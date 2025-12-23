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
  User,
  Mail,
  Calendar,
  Shield,
  ShieldCheck,
  Clock
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
  title: 'Usuários - Painel Admin - if',
  description: 'Gestão de usuários do painel administrativo',
}

// Mock data - será substituído por dados reais
const users = [
  {
    id: '1',
    name: 'Dra. Ana Silva',
    email: 'ana.silva@if.com',
    avatar: '/author-avatar.jpg',
    role: 'admin',
    status: 'active',
    bio: 'Nutricionista especialista em saúde e bem-estar',
    title: 'Nutricionista Esportiva',
    credentials: 'CRN 12345',
    experience: '10 anos',
    specialties: 'Nutrição Esportiva, Saúde da Mulher, Longevidade',
    socialLinks: '{"instagram": "@anasilva", "linkedin": "ana-silva"}',
    website: 'https://anasilva.com.br',
    location: 'São Paulo, SP',
    languages: 'Português, Inglês',
    featured: true,
    active: true,
    createdAt: '2024-01-10',
    lastLogin: '2024-01-20T14:30:00Z',
    postCount: 24
  },
  {
    id: '2',
    name: 'Dr. Carlos Mendes',
    email: 'carlos.mendes@if.com',
    avatar: '/author-avatar.jpg',
    role: 'author',
    status: 'active',
    bio: 'Médico nutrólogo com foco em medicina preventiva',
    title: 'Médico Nutrólogo',
    credentials: 'CRM 67890',
    experience: '8 anos',
    specialties: 'Medicina Preventiva, Nutrologia, Imunologia',
    socialLinks: '{"linkedin": "carlos-mendes"}',
    website: 'https://carlosmendes.com.br',
    location: 'Rio de Janeiro, RJ',
    languages: 'Português, Espanhol',
    featured: false,
    active: true,
    createdAt: '2024-01-12',
    lastLogin: '2024-01-19T10:15:00Z',
    postCount: 18
  },
  {
    id: '3',
    name: 'Dra. Maria Costa',
    email: 'maria.costa@if.com',
    avatar: '/author-avatar.jpg',
    role: 'author',
    status: 'inactive',
    bio: 'Especialista em saúde da mulher e longevidade',
    title: 'Ginecologista e Obstetra',
    credentials: 'CRM 11111',
    experience: '15 anos',
    specialties: 'Saúde da Mulher, Menopausa, Longevidade',
    socialLinks: '{"instagram": "@mariacosta"}',
    website: 'https://mariacosta.com.br',
    location: 'Belo Horizonte, MG',
    languages: 'Português, Inglês, Francês',
    featured: true,
    active: false,
    createdAt: '2024-01-08',
    lastLogin: '2024-01-15T16:45:00Z',
    postCount: 32
  },
  {
    id: '4',
    name: 'Dr. Roberto Oliveira',
    email: 'roberto.oliveira@if.com',
    avatar: '/author-avatar.jpg',
    role: 'editor',
    status: 'active',
    bio: 'Especialista em sono e medicina do sono',
    title: 'Médico do Sono',
    credentials: 'CRM 22222',
    experience: '12 anos',
    specialties: 'Medicina do Sono, Neurologia, Psiquiatria',
    socialLinks: '{"twitter": "@robertosono"}',
    website: 'https://robertooliveira.com.br',
    location: 'Porto Alegre, RS',
    languages: 'Português, Inglês',
    featured: false,
    active: true,
    createdAt: '2024-01-05',
    lastLogin: '2024-01-20T09:20:00Z',
    postCount: 15
  }
]

const getRoleBadge = (role: string) => {
  const roleConfig = {
    admin: { label: 'Administrador', variant: 'destructive' as const },
    author: { label: 'Autor', variant: 'default' as const },
    editor: { label: 'Editor', variant: 'secondary' as const },
  }
  return roleConfig[role as keyof typeof roleConfig] || { label: role, variant: 'outline' as const }
}

const getStatusBadge = (status: string) => {
  const statusConfig = {
    active: { label: 'Ativo', variant: 'default' as const },
    inactive: { label: 'Inativo', variant: 'secondary' as const },
    suspended: { label: 'Suspenso', variant: 'destructive' as const },
  }
  return statusConfig[status as keyof typeof statusConfig] || { label: status, variant: 'outline' as const }
}

export default function AdminUsers() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Usuários</h1>
          <p className="text-muted-foreground">Gestão de usuários do sistema</p>
        </div>
        <div className="flex items-center gap-3">
          <Button asChild>
            <Link href="/admin/users/new">
              <Plus className="mr-2 h-4 w-4" />
              Novo Usuário
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Usuários</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{users.length}</div>
            <p className="text-xs text-muted-foreground">
              +2 novos este mês
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ativos</CardTitle>
            <ShieldCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{users.filter(u => u.status === 'active').length}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((users.filter(u => u.status === 'active').length / users.length) * 100)}% do total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Administradores</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{users.filter(u => u.role === 'admin').length}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((users.filter(u => u.role === 'admin').length / users.length) * 100)}% do total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Inativos</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{users.filter(u => u.status === 'inactive').length}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((users.filter(u => u.status === 'inactive').length / users.length) * 100)}% do total
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
              <Link href="/admin/users/new">
                <Plus className="h-6 w-6" />
                <span>Novo Usuário</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-auto p-4 flex-col space-y-2">
              <Link href="/admin/users?role=admin">
                <Shield className="h-6 w-6" />
                <span>Administradores</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-auto p-4 flex-col space-y-2">
              <Link href="/admin/users?status=active">
                <ShieldCheck className="h-6 w-6" />
                <span>Ativos</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-auto p-4 flex-col space-y-2">
              <Link href="/admin/users?status=inactive">
                <Clock className="h-6 w-6" />
                <span>Inativos</span>
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
                placeholder="Buscar usuários..."
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

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Usuários</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Usuário</TableHead>
                <TableHead>Função</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Criado em</TableHead>
                <TableHead>Último Login</TableHead>
                <TableHead>Posts</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>
                          {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getRoleBadge(user.role).variant}>
                      {getRoleBadge(user.role).label}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusBadge(user.status).variant}>
                      {getStatusBadge(user.status).label}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {new Date(user.createdAt).toLocaleDateString('pt-BR')}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {new Date(user.lastLogin).toLocaleDateString('pt-BR')}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm font-medium">{user.postCount}</div>
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
                          <Link href={`/admin/users/${user.id}`}>
                            <Eye className="mr-2 h-4 w-4" />
                            Ver
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/admin/users/${user.id}/edit`}>
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