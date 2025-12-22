import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/posts - Listar posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const category = searchParams.get('category')
    const featured = searchParams.get('featured')
    const search = searchParams.get('search')
    const sort = searchParams.get('sort') || 'recent'

    const skip = (page - 1) * limit

    // Construir where clause
    const where: any = {
      published: true
    }

    if (category) {
      where.category = {
        slug: category
      }
    }

    if (featured === 'true') {
      where.featured = true
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { excerpt: { contains: search, mode: 'insensitive' } },
        { content: { contains: search, mode: 'insensitive' } }
      ]
    }

    // Construir orderBy
    let orderBy: any = { createdAt: 'desc' }
    
    switch (sort) {
      case 'popular':
        orderBy = { viewCount: 'desc' }
        break
      case 'oldest':
        orderBy = { createdAt: 'asc' }
        break
      case 'title':
        orderBy = { title: 'asc' }
        break
      default:
        orderBy = { createdAt: 'desc' }
    }

    // Buscar posts
    const [posts, total] = await Promise.all([
      db.post.findMany({
        where,
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
          },
          _count: {
            select: {
              comments: true
            }
          }
        },
        orderBy,
        skip,
        take: limit
      }),
      db.post.count({ where })
    ])

    // Incrementar view count para posts populares
    if (sort === 'popular') {
      await Promise.all(
        posts.map(post => 
          db.post.update({
            where: { id: post.id },
            data: { viewCount: { increment: 1 } }
          })
        )
      )
    }

    return NextResponse.json({
      posts,
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
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar posts' },
      { status: 500 }
    )
  }
}

// POST /api/posts - Criar novo post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      title,
      slug,
      excerpt,
      content,
      coverImage,
      featured,
      authorId,
      categoryId,
      tags,
      metaTitle,
      metaDescription,
      metaKeywords,
      readTime
    } = body

    // Validar campos obrigatórios
    if (!title || !slug || !content || !authorId) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: title, slug, content, authorId' },
        { status: 400 }
      )
    }

    // Verificar se slug já existe
    const existingPost = await db.post.findUnique({
      where: { slug }
    })

    if (existingPost) {
      return NextResponse.json(
        { error: 'Slug já existe' },
        { status: 409 }
      )
    }

    // Criar post
    const post = await db.post.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        coverImage,
        featured: featured || false,
        published: false, // Posts começam como rascunho
        authorId,
        categoryId,
        tags,
        metaTitle,
        metaDescription,
        metaKeywords,
        readTime
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

    return NextResponse.json(post, { status: 201 })

  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json(
      { error: 'Erro ao criar post' },
      { status: 500 }
    )
  }
}