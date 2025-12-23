import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/categories/[slug] - Buscar categoria específica
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const category = await db.category.findUnique({
      where: { slug: params.slug },
      include: {
        posts: {
          where: { published: true },
          include: {
            author: {
              select: {
                id: true,
                name: true,
                avatar: true,
                title: true,
                slug: true
              }
            },
            _count: {
              select: {
                comments: {
                  where: { approved: true }
                }
              }
            }
          },
          orderBy: { createdAt: 'desc' }
        },
        _count: {
          select: {
            posts: {
              where: { published: true }
            }
          }
        }
      }
    })

    if (!category) {
      return NextResponse.json(
        { error: 'Categoria não encontrada' },
        { status: 404 }
      )
    }

    // Calcular estatísticas
    const totalViews = category.posts.reduce((sum, post) => sum + post.viewCount, 0)
    const totalReadTime = category.posts.reduce((sum, post) => sum + (post.readTime || 0), 0)

    const categoryWithStats = {
      ...category,
      stats: {
        totalViews,
        totalReadTime,
        averageReadTime: category.posts.length > 0 ? Math.round(totalReadTime / category.posts.length) : 0,
        totalComments: category.posts.reduce((sum, post) => sum + post._count.comments, 0)
      }
    }

    return NextResponse.json(categoryWithStats)

  } catch (error) {
    console.error('Error fetching category:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar categoria' },
      { status: 500 }
    )
  }
}

// PUT /api/categories/[slug] - Atualizar categoria
export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const body = await request.json()
    const { name, description, color } = body

    // Verificar se categoria existe
    const existingCategory = await db.category.findUnique({
      where: { slug: params.slug }
    })

    if (!existingCategory) {
      return NextResponse.json(
        { error: 'Categoria não encontrada' },
        { status: 404 }
      )
    }

    // Atualizar categoria
    const category = await db.category.update({
      where: { slug: params.slug },
      data: {
        ...(name && { name }),
        ...(description !== undefined && { description }),
        ...(color && { color })
      }
    })

    return NextResponse.json(category)

  } catch (error) {
    console.error('Error updating category:', error)
    return NextResponse.json(
      { error: 'Erro ao atualizar categoria' },
      { status: 500 }
    )
  }
}

// DELETE /api/categories/[slug] - Deletar categoria
export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // Verificar se categoria existe
    const existingCategory = await db.category.findUnique({
      where: { slug: params.slug },
      include: {
        _count: {
          select: {
            posts: true
          }
        }
      }
    })

    if (!existingCategory) {
      return NextResponse.json(
        { error: 'Categoria não encontrada' },
        { status: 404 }
      )
    }

    // Verificar se há posts vinculados
    if (existingCategory._count.posts > 0) {
      return NextResponse.json(
        { 
          error: 'Não é possível deletar categoria com posts vinculados',
          postsCount: existingCategory._count.posts
        },
        { status: 400 }
      )
    }

    // Deletar categoria
    await db.category.delete({
      where: { slug: params.slug }
    })

    return NextResponse.json(
      { message: 'Categoria deletada com sucesso' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error deleting category:', error)
    return NextResponse.json(
      { error: 'Erro ao deletar categoria' },
      { status: 500 }
    )
  }
}