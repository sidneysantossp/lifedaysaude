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
  Image as ImageIcon,
  Calendar,
  TrendingUp,
  Monitor,
  Smartphone
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
  title: 'Banners - Painel Admin - if',
  description: 'Gestão de banners do painel administrativo',
}

// Mock data - será substituído por dados reais
const banners = [
  {
    id: '1',
    title: 'Promoção de Verão',
    description: 'Produtos para energia e vitalidade com até 30% de desconto',
    image: '/blog-hero.jpg',
    mobileImage: '/blog-hero.jpg',
    link: '/promocao-verao',
    linkText: 'Ver Promoções',
    position: 'home_hero',
    status: 'active',
    startDate: '2024-01-01',
    endDate: '2024-02-29',
    priority: 1,
    clicks: 1234,
    impressions: 15678,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Guia de Imunidade',
    description: 'Aprenda a fortalecer seu sistema imunológico',
    image: '/categoria-imunidade.jpg',
    mobileImage: '/categoria-imunidade.jpg',
    link: '/categoria/imunidade',
    linkText: 'Saiba Mais',
    position: 'home_featured',
    status: 'active',
    startDate: '2024-01-10',
    endDate: '2024-02-10',
    priority: 2,
    clicks: 856,
    impressions: 9876,
    createdAt: '2024-01-10',
    updatedAt: '2024-01-10'
  },
  {
    id: '3',
    title: 'Dicas de Sono',
    description: 'Melhore sua qualidade de sono com nossas dicas',
    image: '/categoria-sono.jpg',
    mobileImage: '/categoria-sono.jpg',
    link: '/categoria/sono-bem-estar',
    linkText: 'Confira',
    position: 'sidebar',
    status: 'scheduled',
    startDate: '2024-02-01',
    endDate: '2024-03-01',
    priority: 3,
    clicks: 0,
    impressions: 0,
    createdAt: '2024-01-20',
    updatedAt: '2024-01-20'
  },
  {
    id: '4',
    title: 'Newsletter Exclusiva',
    description: 'Reba as melhores dicas de saúde semanalmente',
    image: '/og-image.jpg',
    mobileImage: '/og-image.jpg',
    link: '/newsletter',
    linkText: 'Assinar',
    position: 'footer',
    status: 'inactive',
    startDate: '2023-12-01',
    endDate: '2024-01-31',
    priority: 4,
    clicks: 234,
    impressions: 3456,
    createdAt: '2023-12-01',
    updatedAt: '2024-01-05'
  }
]

const getPositionBadge = (position: string) => {
  const positionConfig = {
    home_hero: { label: 'Home Hero', variant: 'default' as const },
    home_featured: { label: 'Home Destaque', variant: 'secondary' as const },
    sidebar: { label: 'Sidebar', variant: 'outline' as const },
    footer: { label: 'Footer', variant: 'outline' as const },
    header: { label: 'Header', variant: 'outline' as const }
  }
  return positionConfig[position as keyof typeof positionConfig] || { label: position, variant: 'outline' as const }
}

const getStatusBadge = (status: string) => {
  const statusConfig = {
    active: { label: 'Ativo', variant: 'default' as const },
    scheduled: { label: 'Agendado', variant: 'secondary' as const },
    inactive: { label: 'Inativo', variant: 'destructive' as const }
  }
  return statusConfig[status as keyof typeof statusConfig] || { label: status, variant: 'outline' as const }
}

const getCTR = (clicks: number, impressions: number) => {
  if (impressions === 0) return '0.00%'
  return ((clicks / impressions) * 100).toFixed(2) + '%'
}

export default function AdminBanners() {
  const activeCount = banners.filter(b => b.status === 'active').length
  const scheduledCount = banners.filter(b => b.status === 'scheduled').length
  const inactiveCount = banners.filter(b => b.status === 'inactive').length
  const totalClicks = banners.reduce((sum, b) => sum + b.clicks, 0)
  const totalImpressions = banners.reduce((sum, b) => sum + b.impressions, 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Banners</h1>
          <p className="text-muted-foreground">Gestão de banners e propaganda</p>
        </div>
        <div className="flex items-center gap-3">
          <Button asChild>
            <Link href="/admin/banners/new">
              <Plus className="mr-2 h-4 w-4" />
              Novo Banner
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Banners</CardTitle>
            <ImageIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{banners.length}</div>
            <p className="text-xs text-muted-foreground">
              {activeCount} ativos
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ativos</CardTitle>
            <Monitor className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeCount}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((activeCount / banners.length) * 100)}% do total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Cliques</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalClicks.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Todos os banners
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">CTR Médio</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {totalImpressions > 0 ? getCTR(totalClicks, totalImpressions) : '0.00%'}
            </div>
            <p className="text-xs text-muted-foreground">
              Click-through rate
            </p>
          </CardContent>
        </Card>
      </div>

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
                placeholder="Buscar banners..."
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

      {/* Banners Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Banners</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Banner</TableHead>
                <TableHead>Posição</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Período</TableHead>
                <TableHead>CTR</TableHead>
                <TableHead>Criado em</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {banners.map((banner) => (
                <TableRow key={banner.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-16 w-24 rounded bg-muted overflow-hidden">
                        <img 
                          src={banner.image} 
                          alt={banner.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{banner.title}</div>
                        <div className="text-sm text-muted-foreground truncate">
                          {banner.description}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {banner.linkText}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Prioridade {banner.priority}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getPositionBadge(banner.position).variant}>
                      {getPositionBadge(banner.position).label}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusBadge(banner.status).variant}>
                      {getStatusBadge(banner.status).label}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {new Date(banner.startDate).toLocaleDateString('pt-BR')} - {new Date(banner.endDate).toLocaleDateString('pt-BR')}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm font-medium">
                      {getCTR(banner.clicks, banner.impressions)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {new Date(banner.createdAt).toLocaleDateString('pt-BR')}
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
                          <Link href={banner.link} target="_blank">
                            <Eye className="mr-2 h-4 w-4" />
                            Visualizar
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/admin/banners/${banner.id}/edit`}>
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