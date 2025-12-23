import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Edit, 
  Trash2, 
  Eye,
  Grid3x3,
  FileText,
  Calendar,
  TrendingUp
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export const metadata: Metadata = {
  title: 'Categorias - Painel Admin - if',
  description: 'Gestão de categorias do painel administrativo',
}

// Mock data - será substituído por dados reais
const categories = [
  {
    id: '1',
    name: 'Energia',
    slug: 'energia',
    description: 'Descubra como aumentar seus níveis de energia naturalmente através da nutrição, suplementação e hábitos saudáveis.',
    color: 'bg-yellow-500',
    image: '/categoria-energia.jpg',
    createdAt: '2024-01-10',
    updatedAt: '2024-01-15',
    _count: {
      posts: 12
    }
  },
  {
    id: '2',
    name: 'Imunidade',
    slug: 'imunidade',
    description: 'Fortaleça seu sistema imunológico com as melhores estratégias de nutrição, vitaminas e hábitos de vida.',
    color: 'bg-green-500',
    image: '/categoria-imunidade.jpg',
    createdAt: '2024-01-08',
    updatedAt: '2024-01-14',
    _count: {
      posts: 15
    }
  },
  {
    id: '3',
    name: 'Longevidade',
    slug: 'longevidade',
    description: 'Aprenda os segredos das zonas azuis do mundo e adote hábitos que promovem uma vida longa e saudável.',
    color: 'bg-blue-500',
    image: '/categoria-longevidade.jpg',
    createdAt: '2024-01-05',
    updatedAt: '2024-01-13',
    _count: {
      posts: 8
    }
  },
  {
    id: '4',
    name: 'Menopausa',
    slug: 'menopausa',
    description: 'Guia completo para viver a menopausa com qualidade de vida, equilíbrio hormonal e bem-estar.',
    color: 'bg-purple-500',
    image: '/categoria-menopausa.jpg',
    createdAt: '2024-01-12',
    updatedAt: '2024-01-12',
    _count: {
      posts: 10
    }
  },
  {
    id: '5',
    name: 'Sono & Bem Estar',
    slug: 'sono-bem-estar',
    description: 'Melhore a qualidade do seu sono e descubra o impacto na sua saúde física e mental.',
    color: 'bg-indigo-500',
    image: '/categoria-sono.jpg',
    createdAt: '2024-01-03',
    updatedAt: '2024-01-11',
    _count: {
      posts: 14
    }
  },
  {
    id: '6',
    name: 'Ossos & Músculos',
    slug: 'ossos-musculos',
    description: 'Mantenha a saúde do seu sistema musculoesquelético com dicas de exercícios e nutrição adequada.',
    color: 'bg-red-500',
    image: '/categoria-ossos.jpg',
    createdAt: '2024-01-07',
    updatedAt: '2024-01-09',
    _count: {
      posts: 9
    }
  },
  {
    id: '7',
    name: 'Vitaminas & Minerais',
    slug: 'vitaminas-minerais',
    description: 'Conheça a importância dos micronutrientes para sua saúde e como otimizar seus níveis.',
    color: 'bg-orange-500',
    image: '/categoria-vitaminas.jpg',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-16',
    _count: {
      posts: 18
    }
  },
  {
    id: '8',
    name: 'Cabelo, Pele, Unha',
    slug: 'cabelo-pele-unha',
    description: 'Cuidados completos para beleza e saúde da pele, cabelos e unhas através da nutrição.',
    color: 'bg-pink-500',
    image: '/categoria-beleza.jpg',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
    _count: {
      posts: 11
    }
  }
]

const totalPosts = categories.reduce((sum, cat) => sum + cat._count.posts, 0)

export default function AdminCategories() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Categorias</h1>
          <p className="text-muted-foreground">Gestão de categorias de conteúdo</p>
        </div>
        <div className="flex items-center gap-3">
          <Button asChild>
            <Link href="/admin/categories/new">
              <Plus className="mr-2 h-4 w-4" />
              Nova Categoria
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Categorias</CardTitle>
            <Grid3x3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{categories.length}</div>
            <p className="text-xs text-muted-foreground">
              Categorias ativas
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalPosts}</div>
            <p className="text-xs text-muted-foreground">
              Em todas as categorias
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Média por Categoria</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round(totalPosts / categories.length)}</div>
            <p className="text-xs text-muted-foreground">
              Posts por categoria
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Categoria Mais Popular</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {categories.reduce((max, cat) => cat._count.posts > max._count.posts ? cat : max)._count.posts}
            </div>
            <p className="text-xs text-muted-foreground">
              Maior número de posts
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Button asChild variant="outline" className="h-auto p-4 flex-col space-y-2">
              <Link href="/admin/categories/new">
                <Plus className="h-6 w-6" />
                <span>Nova Categoria</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-auto p-4 flex-col space-y-2">
              <Link href="/admin/categories?sort=posts">
                <FileText className="h-6 w-6" />
                <span>Mais Posts</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-auto p-4 flex-col space-y-2">
              <Link href="/admin/categories?sort=recent">
                <Calendar className="h-6 w-6" />
                <span>Recentes</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-auto p-4 flex-col space-y-2">
              <Link href="/admin/categories?sort=name">
                <TrendingUp className="h-6 w-6" />
                <span>Ordem Alfabética</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Search and Filter */}
      <Card>
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Buscar categorias..."
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Categories Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Categorias</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Categoria</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Posts</TableHead>
                <TableHead>Criada em</TableHead>
                <TableHead>Atualizada em</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded bg-muted overflow-hidden">
                        <img 
                          src={category.image} 
                          alt={category.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium flex items-center gap-2">
                          {category.name}
                          <Badge className={category.color} variant="secondary">
                            <div className="h-2 w-2 rounded-full bg-current"></div>
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground truncate max-w-xs">
                          {category.description}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <code className="text-sm bg-muted px-2 py-1 rounded">
                      {category.slug}
                    </code>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm font-medium">{category._count.posts}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {new Date(category.createdAt).toLocaleDateString('pt-BR')}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {new Date(category.updatedAt).toLocaleDateString('pt-BR')}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Abrir menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link href={`/categoria/${category.slug}`} target="_blank">
                            <Eye className="mr-2 h-4 w-4" />
                            Visualizar
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/admin/categories/${category.id}/edit`}>
                            <Edit className="mr-2 h-4 w-4" />
                            Editar
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Excluir
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}