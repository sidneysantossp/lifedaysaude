import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/posts/[slug] - Buscar post específico
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params

    const post = await db.post.findUnique({
      where: { slug },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            bio: true,
            avatar: true
          }
        },
        category: {
          select: {
            id: true,
            name: true,
            slug: true,
            color: true,
            description: true
          }
        },
        comments: {
          where: { approved: true },
          orderBy: { createdAt: 'desc' },
          include: {
            _count: true
          }
        },
        _count: {
          select: {
            comments: true
          }
        }
      }
    })

    if (!post) {
      return NextResponse.json(
        { error: 'Post não encontrado' },
        { status: 404 }
      )
    }

    // Incrementar view count
    await db.post.update({
      where: { id: post.id },
      data: { viewCount: { increment: 1 } }
    })

    // Buscar posts relacionados
    const relatedPosts = await db.post.findMany({
      where: {
        id: { not: post.id },
        published: true,
        OR: [
          { categoryId: post.categoryId },
          { tags: { contains: post.tags?.split(',')[0] } }
        ]
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            avatar: true
          }
        },
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
      take: 3
    })

    return NextResponse.json({
      ...post,
      relatedPosts
    })

  } catch (error) {
    console.error('Error fetching post:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar post' },
      { status: 500 }
    )
  }
}

// PUT /api/posts/[slug] - Atualizar post
export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params
    const body = await request.json()

    // Verificar se post existe
    const existingPost = await db.post.findUnique({
      where: { slug }
    })

    if (!existingPost) {
      return NextResponse.json(
        { error: 'Post não encontrado' },
        { status: 404 }
      )
    }

    // Se mudando o slug, verificar se novo slug já existe
    if (body.slug && body.slug !== slug) {
      const slugExists = await db.post.findUnique({
        where: { slug: body.slug }
      })

      if (slugExists) {
        return NextResponse.json(
          { error: 'Novo slug já existe' },
          { status: 409 }
        )
      }
    }

    // Atualizar post
    const updatedPost = await db.post.update({
      where: { slug },
      data: {
        ...body,
        updatedAt: new Date()
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            avatar: true
          }
        },
        category: {
          select: {
            id: true,
            name: true,
            slug: true,
            color: true
          }
        }
      }
    })

    return NextResponse.json(updatedPost)

  } catch (error) {
    console.error('Error updating post:', error)
    return NextResponse.json(
      { error: 'Erro ao atualizar post' },
      { status: 500 }
    )
  }
}

// DELETE /api/posts/[slug] - Deletar post
export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params

    // Verificar se post existe
    const existingPost = await db.post.findUnique({
      where: { slug }
    })

    if (!existingPost) {
      return NextResponse.json(
        { error: 'Post não encontrado' },
        { status: 404 }
      )
    }

    // Deletar post (cascade deletará comentários)
    await db.post.delete({
      where: { slug }
    })

    return NextResponse.json(
      { message: 'Post deletado com sucesso' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error deleting post:', error)
    return NextResponse.json(
      { error: 'Erro ao deletar post' },
      { status: 500 }
    )
  }
}