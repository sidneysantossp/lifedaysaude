import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/authors/[slug] - Buscar autor específico
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params

    const author = await db.user.findFirst({
      where: { 
        slug,
        active: true 
      },
      select: {
        id: true,
        name: true,
        slug: true,
        title: true,
        credentials: true,
        bio: true,
        avatar: true,
        experience: true,
        education: true,
        specialties: true,
        socialLinks: true,
        website: true,
        location: true,
        languages: true,
        featured: true,
        createdAt: true
      }
    })

    if (!author) {
      return NextResponse.json(
        { error: 'Autor não encontrado' },
        { status: 404 }
      )
    }

    // Buscar posts do autor
    const posts = await db.post.findMany({
      where: {
        authorId: author.id,
        published: true
      },
      include: {
        category: {
          select: {
            id: true,
            name: true,
            slug: true,
            color: true
          }
        }
      },
      orderBy: { createdAt: 'desc' },
      take: 10
    })

    // Calcular estatísticas
    const totalViews = posts.reduce((sum, post) => sum + post.viewCount, 0)
    const postCount = await db.post.count({
      where: {
        authorId: author.id,
        published: true
      }
    })

    // Buscar autores relacionados (mesmas especialidades)
    const relatedAuthors = await db.user.findMany({
      where: {
        id: { not: author.id },
        active: true,
        specialties: {
          contains: author.specialties?.split(',')[0],
          mode: 'insensitive'
        }
      },
      select: {
        id: true,
        name: true,
        slug: true,
        title: true,
        avatar: true,
        specialties: true
      },
      take: 3
    })

    // Parse social links se for string
    let parsedSocialLinks = author.socialLinks
    if (typeof author.socialLinks === 'string') {
      try {
        parsedSocialLinks = JSON.parse(author.socialLinks)
      } catch (e) {
        parsedSocialLinks = {}
      }
    }

    return NextResponse.json({
      ...author,
      socialLinks: parsedSocialLinks,
      posts,
      stats: {
        postCount,
        totalViews,
        followers: Math.floor(Math.random() * 50000) + 1000 // Mock data
      },
      relatedAuthors
    })

  } catch (error) {
    console.error('Error fetching author:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar autor' },
      { status: 500 }
    )
  }
}

// PUT /api/authors/[slug] - Atualizar autor
export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params
    const body = await request.json()

    // Verificar se autor existe
    const existingAuthor = await db.user.findFirst({
      where: { slug }
    })

    if (!existingAuthor) {
      return NextResponse.json(
        { error: 'Autor não encontrado' },
        { status: 404 }
      )
    }

    // Se mudando o slug, verificar se novo slug já existe
    if (body.slug && body.slug !== slug) {
      const slugExists = await db.user.findFirst({
        where: { slug: body.slug }
      })

      if (slugExists) {
        return NextResponse.json(
          { error: 'Novo slug já existe' },
          { status: 409 }
        )
      }
    }

    // Preparar dados para atualização
    const updateData: any = {
      ...body,
      updatedAt: new Date()
    }

    // Converter arrays para strings se necessário
    if (body.specialties && Array.isArray(body.specialties)) {
      updateData.specialties = body.specialties.join(', ')
    }

    if (body.languages && Array.isArray(body.languages)) {
      updateData.languages = body.languages.join(', ')
    }

    if (body.socialLinks && typeof body.socialLinks === 'object') {
      updateData.socialLinks = JSON.stringify(body.socialLinks)
    }

    // Atualizar autor
    const updatedAuthor = await db.user.update({
      where: { id: existingAuthor.id },
      data: updateData
    })

    return NextResponse.json(updatedAuthor)

  } catch (error) {
    console.error('Error updating author:', error)
    return NextResponse.json(
      { error: 'Erro ao atualizar autor' },
      { status: 500 }
    )
  }
}

// DELETE /api/authors/[slug] - Deletar autor (soft delete)
export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params

    // Verificar se autor existe
    const existingAuthor = await db.user.findFirst({
      where: { slug }
    })

    if (!existingAuthor) {
      return NextResponse.json(
        { error: 'Autor não encontrado' },
        { status: 404 }
      )
    }

    // Soft delete - desativar autor
    await db.user.update({
      where: { id: existingAuthor.id },
      data: { 
        active: false,
        updatedAt: new Date()
      }
    })

    return NextResponse.json(
      { message: 'Autor desativado com sucesso' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error deleting author:', error)
    return NextResponse.json(
      { error: 'Erro ao desativar autor' },
      { status: 500 }
    )
  }
}