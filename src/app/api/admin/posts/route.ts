import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/admin/posts - Listar posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const search = searchParams.get('search') || ''
    const category = searchParams.get('category') || ''
    const author = searchParams.get('author') || ''
    const status = searchParams.get('status') || '' // published, draft, all
    const featured = searchParams.get('featured') || ''

    const skip = (page - 1) * limit

    // Construir filtro
    const where: any = {}
    
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { excerpt: { contains: search, mode: 'insensitive' } },
        { content: { contains: search, mode: 'insensitive' } },
        { tags: { contains: search, mode: 'insensitive' } }
      ]
    }

    if (category) {
      where.category = {
        slug: category
      }
    }

    if (author) {
      where.author = {
        name: { contains: author, mode: 'insensitive' }
      }
    }

    if (status === 'published') {
      where.published = true
    } else if (status === 'draft') {
      where.published = false
    }

    if (featured === 'true') {
      where.featured = true
    }

    const [posts, total] = await Promise.all([
      db.post.findMany({
        where,
        include: {
          author: {
            select: {
              id: true,
              name: true,
              avatar: true,
              email: true
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
              comments: {
                where: { approved: true }
              }
            }
          }
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit
      }),
      db.post.count({ where })
    ])

    return NextResponse.json({
      posts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
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

// POST /api/admin/posts - Criar novo post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      title,
      slug,
      excerpt,
      content,
      coverImage,
      published,
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
    if (!title || !content || !authorId) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: title, content, authorId' },
        { status: 400 }
      )
    }

    // Gerar slug automaticamente se não fornecido
    const finalSlug = slug || title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim()

    // Verificar se slug já existe
    const existingPost = await db.post.findUnique({
      where: { slug: finalSlug }
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
        slug: finalSlug,
        excerpt,
        content,
        coverImage,
        published: published || false,
        featured: featured || false,
        authorId,
        categoryId,
        tags,
        metaTitle,
        metaDescription,
        metaKeywords,
        readTime,
        viewCount: 0
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