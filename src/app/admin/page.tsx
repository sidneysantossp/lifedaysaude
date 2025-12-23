import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Users, 
  FileText, 
  Grid3x3, 
  Image as ImageIcon, 
  Eye, 
  TrendingUp,
  Calendar,
  Clock,
  ArrowUpRight,
  Plus
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Dashboard - Painel Admin - if',
  description: 'Dashboard administrativo com estatísticas e métricas',
}

// Mock data - será substituído por dados reais
const stats = {
  users: {
    total: 1247,
    growth: 12.5,
    newThisMonth: 89
  },
  posts: {
    total: 342,
    published: 298,
    draft: 44,
    growth: 8.3
  },
  categories: {
    total: 8,
    active: 8,
    growth: 0
  },
  banners: {
    total: 12,
    active: 9,
    growth: 25.0
  }
}

const recentActivity = [
  {
    id: 1,
    type: 'post',
    title: 'Novo artigo publicado: "Os 10 Melhores Suplementos para Energia"',
    author: 'Dra. Ana Silva',
    time: 'há 2 minutos',
    icon: FileText,
    color: 'text-blue-600'
  },
  {
    id: 2,
    type: 'user',
    title: 'Novo usuário registrado: João Santos',
    time: 'há 15 minutos',
    icon: Users,
    color: 'text-green-600'
  },
  {
    id: 3,
    type: 'category',
    title: 'Categoria atualizada: "Vitaminas & Minerais"',
    time: 'há 1 hora',
    icon: Grid3x3,
    color: 'text-purple-600'
  },
  {
    id: 4,
    type: 'banner',
    title: 'Novo banner criado: "Promoção de Inverno"',
    time: 'há 3 horas',
    icon: ImageIcon,
    color: 'text-orange-600'
  }
]

const topPosts = [
  {
    id: 1,
    title: 'Os 10 Melhores Suplementos para Energia e Vitalidade',
    views: 15234,
    growth: 15.2,
    category: 'Energia'
  },
  {
    id: 2,
    title: 'Alimentos que Fortalecem a Imunidade no Inverno',
    views: 12456,
    growth: 8.7,
    category: 'Imunidade'
  },
  {
    id: 3,
    title: 'Longevidade: Hábitos das Pessoas que Vivem Mais',
    views: 9823,
    growth: -2.1,
    category: 'Longevidade'
  }
]

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Bem-vindo ao painel administrativo</p>
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

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Usuários</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.users.total.toLocaleString()}</div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <span className="flex items-center text-green-600">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                {stats.users.growth}%
              </span>
              <span>{stats.users.newThisMonth} novos este mês</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conteúdos</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.posts.total}</div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <span className="flex items-center text-green-600">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                {stats.posts.growth}%
              </span>
              <span>{stats.posts.published} publicados</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Categorias</CardTitle>
            <Grid3x3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.categories.total}</div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <span className="flex items-center text-blue-600">
                <span className="h-3 w-3 mr-1">•</span>
                {stats.categories.active} ativas
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Banners</CardTitle>
            <ImageIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.banners.total}</div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <span className="flex items-center text-green-600">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                {stats.banners.growth}%
              </span>
              <span>{stats.banners.active} ativos</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Atividade Recente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className={`mt-0.5 ${activity.color}`}>
                    <activity.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Posts */}
        <Card>
          <CardHeader>
            <CardTitle>Conteúdos Mais Populares</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPosts.map((post, index) => (
                <div key={post.id} className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{post.title}</p>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {post.views.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className={`text-xs font-medium ${
                    post.growth > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {post.growth > 0 ? '+' : ''}{post.growth}%
                  </div>
                </div>
              ))}
            </div>
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
                <FileText className="h-6 w-6" />
                <span>Novo Artigo</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-auto p-4 flex-col space-y-2">
              <Link href="/admin/users/new">
                <Users className="h-6 w-6" />
                <span>Novo Usuário</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-auto p-4 flex-col space-y-2">
              <Link href="/admin/categories/new">
                <Grid3x3 className="h-6 w-6" />
                <span>Nova Categoria</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-auto p-4 flex-col space-y-2">
              <Link href="/admin/banners/new">
                <ImageIcon className="h-6 w-6" />
                <span>Novo Banner</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}