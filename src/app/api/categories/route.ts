import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/categories - Listar categorias
export async function GET(request: NextRequest) {
  try {
    const categories = await db.category.findMany({
      include: {
        _count: {
          select: {
            posts: {
              where: { published: true }
            }
          }
        }
      },
      orderBy: { name: 'asc' }
    })

    return NextResponse.json(categories)

  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar categorias' },
      { status: 500 }
    )
  }
}

// POST /api/categories - Criar nova categoria
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, slug, description, color } = body

    // Validar campos obrigatórios
    if (!name || !slug) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: name, slug' },
        { status: 400 }
      )
    }

    // Verificar se slug já existe
    const existingCategory = await db.category.findUnique({
      where: { slug }
    })

    if (existingCategory) {
      return NextResponse.json(
        { error: 'Slug já existe' },
        { status: 409 }
      )
    }

    // Criar categoria
    const category = await db.category.create({
      data: {
        name,
        slug,
        description,
        color: color || 'bg-gray-500'
      }
    })

    return NextResponse.json(category, { status: 201 })

  } catch (error) {
    console.error('Error creating category:', error)
    return NextResponse.json(
      { error: 'Erro ao criar categoria' },
      { status: 500 }
    )
  }
}