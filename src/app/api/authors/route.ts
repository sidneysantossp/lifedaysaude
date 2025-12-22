import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/authors - Listar autores
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const featured = searchParams.get('featured')
    const specialty = searchParams.get('specialty')
    const search = searchParams.get('search')
    const sort = searchParams.get('sort') || 'name'

    const skip = (page - 1) * limit

    // Construir where clause
    const where: any = {
      active: true
    }

    if (featured === 'true') {
      where.featured = true
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { title: { contains: search, mode: 'insensitive' } },
        { bio: { contains: search, mode: 'insensitive' } },
        { specialties: { contains: search, mode: 'insensitive' } }
      ]
    }

    if (specialty) {
      where.specialties = {
        contains: specialty,
        mode: 'insensitive'
      }
    }

    // Construir orderBy
    let orderBy: any = { name: 'asc' }
    
    switch (sort) {
      case 'featured':
        orderBy = [{ featured: 'desc' }, { name: 'asc' }]
        break
      case 'experience':
        orderBy = { experience: 'desc' }
        break
      case 'posts':
        // Isso exigiria um join complexo, por ora vamos usar createdAt
        orderBy = { createdAt: 'desc' }
        break
      case 'name':
      default:
        orderBy = { name: 'asc' }
        break
    }

    // Buscar autores
    const [authors, total] = await Promise.all([
      db.user.findMany({
        where,
        select: {
          id: true,
          name: true,
          slug: true,
          title: true,
          credentials: true,
          bio: true,
          avatar: true,
          experience: true,
          specialties: true,
          location: true,
          languages: true,
          featured: true,
          socialLinks: true,
          website: true,
          createdAt: true,
          _count: {
            select: {
              posts: {
                where: { published: true }
              }
            }
          }
        },
        orderBy,
        skip,
        take: limit
      }),
      db.user.count({ where })
    ])

    // Calcular estatísticas adicionais
    const authorsWithStats = await Promise.all(
      authors.map(async (author) => {
        const posts = await db.post.findMany({
          where: {
            authorId: author.id,
            published: true
          },
          select: {
            viewCount: true
          }
        })

        const totalViews = posts.reduce((sum, post) => sum + post.viewCount, 0)

        return {
          ...author,
          totalViews,
          postCount: author._count.posts
        }
      })
    )

    return NextResponse.json({
      authors: authorsWithStats,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
        hasNext: page * limit < total,
        hasPrev: page > 1
      }
    })

  } catch (error) {
    console.error('Error fetching authors:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar autores' },
      { status: 500 }
    )
  }
}

// POST /api/authors - Criar novo autor
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name,
      slug,
      title,
      credentials,
      bio,
      avatar,
      experience,
      education,
      specialties,
      socialLinks,
      website,
      location,
      languages,
      featured
    } = body

    // Validar campos obrigatórios
    if (!name || !title || !bio) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: name, title, bio' },
        { status: 400 }
      )
    }

    // Gerar slug se não fornecido
    const finalSlug = slug || name.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')

    // Verificar se slug já existe
    const existingAuthor = await db.user.findFirst({
      where: { slug: finalSlug }
    })

    if (existingAuthor) {
      return NextResponse.json(
        { error: 'Slug já existe' },
        { status: 409 }
      )
    }

    // Criar autor
    const author = await db.user.create({
      data: {
        name,
        slug: finalSlug,
        title,
        credentials,
        bio,
        avatar,
        experience,
        education,
        specialties: Array.isArray(specialties) ? specialties.join(', ') : specialties,
        socialLinks: typeof socialLinks === 'object' ? JSON.stringify(socialLinks) : socialLinks,
        website,
        location,
        languages: Array.isArray(languages) ? languages.join(', ') : languages,
        featured: featured || false,
        active: true
      }
    })

    return NextResponse.json(author, { status: 201 })

  } catch (error) {
    console.error('Error creating author:', error)
    return NextResponse.json(
      { error: 'Erro ao criar autor' },
      { status: 500 }
    )
  }
}