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
  FileText,
  Calendar,
  User,
  Clock,
  TrendingUp,
  MessageSquare
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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
  title: 'Conteúdos - Painel Admin - if',
  description: 'Gestão de conteúdos do painel administrativo',
}

// Mock data - será substituído por dados reais
const posts = [
  {
    id: '1',
    title: 'Os 10 Melhores Suplementos para Energia e Vitalidade',
    slug: 'melhores-suplementos-energia',
    excerpt: 'Descubra quais suplementos realmente funcionam para aumentar sua energia e disposição diária.',
    coverImage: '/artigo-energia-natural.jpg',
    published: true,
    featured: true,
    author: { 
      name: 'Dra. Ana Silva', 
      avatar: '/author-avatar.jpg',
      email: 'ana.silva@if.com'
    },
    category: { 
      name: 'Energia', 
      color: 'bg-yellow-500',
      slug: 'energia'
    },
    readTime: 8,
    viewCount: 2341,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
    tags: ['energia', 'suplementos', 'vitaminas', 'disposição'],
    _count: {
      comments: 23
    }
  },
  {
    id: '2',
    title: 'Alimentos que Aumentam a Energia Imediatamente',
    slug: 'alimentos-energia-imediata',
    excerpt: 'Conheça os alimentos poderosos que proporcionam energia rápida e sustentável.',
    coverImage: '/artigo-energia-alimentos.jpg',
    published: true,
    featured: false,
    author: { 
      name: 'Dr. Carlos Mendes', 
      avatar: '/author-avatar.jpg',
      email: 'carlos.mendes@if.com'
    },
    category: { 
      name: 'Energia', 
      color: 'bg-yellow-500',
      slug: 'energia'
    },
    readTime: 6,
    viewCount: 1856,
    createdAt: '2024-01-14',
    updatedAt: '2024-01-14',
    tags: ['energia', 'alimentos', 'nutrição'],
    _count: {
      comments: 15
    }
  },
  {
    id: '3',
    title: 'Exercícios Físicos para Aumentar a Energia Diária',
    slug: 'exercicios-energia-diaria',
    excerpt: 'Aprenda quais exercícios físicos são mais eficazes para aumentar seus níveis de energia.',
    coverImage: '/artigo-energia-exercicios.jpg',
    published: false,
    featured: false,
    author: { 
      name: 'Dra. Maria Costa', 
      avatar: '/author-avatar.jpg',
      email: 'maria.costa@if.com'
    },
    category: { 
      name: 'Energia', 
      color: 'bg-yellow-500',
      slug: 'energia'
    },
    readTime: 10,
    viewCount: 1423,
    createdAt: '2024-01-13',
    updatedAt: '2024-01-13',
    tags: ['energia', 'exercícios', 'disposição', 'saúde'],
    _count: {
      comments: 8
    }
  },
  {
    id: '4',
    title: 'Sono e Energia: A Conexão que Você Precisa Conhecer',
    slug: 'sono-energia-conexao',
    excerpt: 'Entenda como a qualidade do seu sono impacta diretamente seus níveis de energia.',
    coverImage: '/artigo-energia-sono.jpg',
    published: true,
    featured: false,
    author: { 
      name: 'Dr. Roberto Oliveira', 
      avatar: '/author-avatar.jpg',
      email: 'roberto.oliveira@if.com'
    },
    category: { 
      name: 'Sono & Bem Estar', 
      color: 'bg-indigo-500',
      slug: 'sono-bem-estar'
    },
    readTime: 7,
    viewCount: 1654,
    createdAt: '2024-01-12',
    updatedAt: '2024-01-12',
    tags: ['energia', 'sono', 'qualidade de vida'],
    _count: {
      comments: 12
    }
  }
]

const getStatusBadge = (published: boolean, featured: boolean) => {
  if (featured) return { label: 'Destaque', variant: 'default' as const }
  if (published) return { label: 'Publicado', variant: 'default' as const }
  return { label: 'Rascunho', variant: 'secondary' as const }
}

export default function AdminPosts() {
  const publishedCount = posts.filter(p => p.published).length
  const draftCount = posts.filter(p => !p.published).length
  const featuredCount = posts.filter(p => p.featured).length
  const totalViews = posts.reduce((sum, p) => sum + p.viewCount, 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Conteúdos</h1>
          <p className="text-muted-foreground">Gestão de artigos e conteúdos</p>
        </div>
        <div className="flex items-center gap-3">
          <Button asChild>
            <Link href="/admin/posts/new">
              <Plus className="mr-2 h-4 w-4" />
              Novo Conteúdo
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{posts.length}</div>
            <p className="text-xs text-muted-foreground">
              {featuredCount} em destaque
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Publicados</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{publishedCount}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((publishedCount / posts.length) * 100)}% do total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rascunhos</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{draftCount}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((draftCount / posts.length) * 100)}% do total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Visualizações</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalViews.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Total de visualizações
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
              <Link href="/admin/posts/new">
                <Plus className="h-6 w-6" />
                <span>Novo Artigo</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-auto p-4 flex-col space-y-2">
              <Link href="/admin/posts?status=draft">
                <FileText className="h-6 w-6" />
                <span>Rascunhos</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-auto p-4 flex-col space-y-2">
              <Link href="/admin/posts?featured=true">
                <Eye className="h-6 w-6" />
                <span>Em Destaque</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-auto p-4 flex-col space-y-2">
              <Link href="/admin/posts?status=published">
                <Calendar className="h-6 w-6" />
                <span>Publicados</span>
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
                placeholder="Buscar conteúdos..."
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

      {/* Posts Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Conteúdos</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Conteúdo</TableHead>
                <TableHead>Autor</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Criado em</TableHead>
                <TableHead>Visualizações</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-16 rounded bg-muted overflow-hidden">
                        <img 
                          src={post.coverImage} 
                          alt={post.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{post.title}</div>
                        <div className="text-sm text-muted-foreground truncate">
                          {post.excerpt}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {post.readTime} min
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {post._count.comments} comentários
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={post.author.avatar} alt={post.author.name} />
                        <AvatarFallback>
                          {post.author.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-sm">{post.author.name}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={post.category.color}>
                      {post.category.name}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusBadge(post.published, post.featured).variant}>
                      {getStatusBadge(post.published, post.featured).label}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {new Date(post.createdAt).toLocaleDateString('pt-BR')}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm font-medium">{post.viewCount.toLocaleString()}</div>
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
                          <Link href={`/post/${post.slug}`} target="_blank">
                            <Eye className="mr-2 h-4 w-4" />
                            Visualizar
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/admin/posts/${post.id}/edit`}>
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