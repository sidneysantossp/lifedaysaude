import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/comments - Listar comentários
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const postId = searchParams.get('postId')
    const approved = searchParams.get('approved')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')

    const skip = (page - 1) * limit

    const where: any = {}
    
    if (postId) {
      where.postId = postId
    }

    if (approved !== null) {
      where.approved = approved === 'true'
    }

    const [comments, total] = await Promise.all([
      db.comment.findMany({
        where,
        include: {
          post: {
            select: {
              id: true,
              title: true,
              slug: true
            }
          }
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit
      }),
      db.comment.count({ where })
    ])

    return NextResponse.json({
      comments,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })

  } catch (error) {
    console.error('Error fetching comments:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar comentários' },
      { status: 500 }
    )
  }
}

// POST /api/comments - Criar novo comentário
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { content, author, email, postId } = body

    // Validar campos obrigatórios
    if (!content || !author || !email || !postId) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: content, author, email, postId' },
        { status: 400 }
      )
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Verificar se post existe
    const post = await db.post.findUnique({
      where: { id: postId }
    })

    if (!post) {
      return NextResponse.json(
        { error: 'Post não encontrado' },
        { status: 404 }
      )
    }

    // Criar comentário (inicia como não aprovado)
    const comment = await db.comment.create({
      data: {
        content,
        author,
        email,
        postId,
        approved: false // Requer aprovação manual
      },
      include: {
        post: {
          select: {
            id: true,
            title: true,
            slug: true
          }
        }
      }
    })

    return NextResponse.json({
      ...comment,
      message: 'Comentário criado com sucesso. Aguardando aprovação.'
    }, { status: 201 })

  } catch (error) {
    console.error('Error creating comment:', error)
    return NextResponse.json(
      { error: 'Erro ao criar comentário' },
      { status: 500 }
    )
  }
}