import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Grid3x3, Search, Filter, BookOpen, TrendingUp, Users, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

// Mock data - será substituído por dados do banco
const categories = [
  {
    id: '1',
    name: 'Energia',
    slug: 'energia',
    description: 'Descubra como aumentar seus níveis de energia naturalmente através da nutrição, suplementação e hábitos saudáveis.',
    color: 'bg-yellow-500',
    icon: '⚡',
    image: '/categoria-energia.jpg',
    postCount: 12,
    totalViews: 45230,
    featured: true,
    trending: true
  },
  {
    id: '2',
    name: 'Imunidade',
    slug: 'imunidade',
    description: 'Fortaleça seu sistema imunológico com as melhores estratégias de nutrição, vitaminas e hábitos de vida.',
    color: 'bg-green-500',
    icon: '🛡️',
    image: '/categoria-imunidade.jpg',
    postCount: 15,
    totalViews: 38120,
    featured: true,
    trending: false
  },
  {
    id: '3',
    name: 'Longevidade',
    slug: 'longevidade',
    description: 'Aprenda os segredos das zonas azuis e adote hábitos que promovem uma vida longa e saudável.',
    color: 'bg-blue-500',
    icon: '🌱',
    image: '/categoria-longevidade.jpg',
    postCount: 8,
    totalViews: 28940,
    featured: false,
    trending: true
  },
  {
    id: '4',
    name: 'Menopausa',
    slug: 'menopausa',
    description: 'Guia completo para viver a menopausa com qualidade de vida, equilíbrio hormonal e bem-estar.',
    color: 'bg-purple-500',
    icon: '🌸',
    image: '/categoria-menopausa.jpg',
    postCount: 10,
    totalViews: 22150,
    featured: false,
    trending: false
  },
  {
    id: '5',
    name: 'Sono & Bem Estar',
    slug: 'sono-bem-estar',
    description: 'Melhore a qualidade do seu sono e descubra o impacto na sua saúde física e mental.',
    color: 'bg-indigo-500',
    icon: '🌙',
    image: '/categoria-sono.jpg',
    postCount: 14,
    totalViews: 31280,
    featured: true,
    trending: false
  },
  {
    id: '6',
    name: 'Ossos & Músculos',
    slug: 'ossos-musculos',
    description: 'Mantenha a saúde do seu sistema musculoesquelético com dicas de exercícios e nutrição adequada.',
    color: 'bg-red-500',
    icon: '💪',
    image: '/categoria-ossos.jpg',
    postCount: 9,
    totalViews: 19870,
    featured: false,
    trending: false
  },
  {
    id: '7',
    name: 'Vitaminas & Minerais',
    slug: 'vitaminas-minerais',
    description: 'Conheça a importância dos micronutrientes para sua saúde e como otimizar seus níveis.',
    color: 'bg-orange-500',
    icon: '💊',
    image: '/categoria-vitaminas.jpg',
    postCount: 18,
    totalViews: 52340,
    featured: true,
    trending: true
  },
  {
    id: '8',
    name: 'Cabelo, Pele, Unha',
    slug: 'cabelo-pele-unha',
    description: 'Cuidados completos para beleza e saúde da pele, cabelos e unhas através da nutrição.',
    color: 'bg-pink-500',
    icon: '✨',
    image: '/categoria-beleza.jpg',
    postCount: 11,
    totalViews: 26890,
    featured: false,
    trending: false
  }
]

const recentPosts = [
  {
    id: '1',
    title: 'Os 10 Melhores Suplementos para Energia e Vitalidade',
    slug: 'melhores-suplementos-energia',
    excerpt: 'Descubra quais suplementos realmente funcionam para aumentar sua energia e disposição diária.',
    category: { name: 'Energia', color: 'bg-yellow-500' },
    author: { name: 'Dra. Ana Silva' },
    readTime: 8,
    createdAt: '2024-01-15',
    views: 2341
  },
  {
    id: '2',
    title: 'Alimentos que Fortalecem a Imunidade no Inverno',
    slug: 'alimentos-imunidade-inverno',
    excerpt: 'Conheça os alimentos poderosos que vão proteger você durante os meses mais frios do ano.',
    category: { name: 'Imunidade', color: 'bg-green-500' },
    author: { name: 'Dr. Carlos Mendes' },
    readTime: 6,
    createdAt: '2024-01-14',
    views: 1856
  },
  {
    id: '3',
    title: 'Exercícios para Manter a Saúde dos Ossos após 50 anos',
    slug: 'exercicios-saude-ossos',
    excerpt: 'Guia completo de atividades físicas para prevenir osteoporose e manter ossos fortes.',
    category: { name: 'Ossos & Músculos', color: 'bg-red-500' },
    author: { name: 'Dra. Maria Costa' },
    readTime: 10,
    createdAt: '2024-01-13',
    views: 1423
  }
]

export const metadata: Metadata = {
  title: 'Categorias - if | Guias Especializados',
  description: 'Explore nossas categorias especializadas em saúde e bem-estar. Encontre artigos sobre energia, imunidade, longevidade, menopausa e muito mais.',
  keywords: ['categorias saúde', 'guias saúde', 'energia', 'imunidade', 'longevidade', 'menopausa', 'bem-estar'],
  openGraph: {
    title: 'Categorias de Saúde & Bem-Estar',
    description: 'Navegue por nossos conteúdos especializados e encontre as melhores dicas para sua saúde.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Categorias de Saúde & Bem-Estar',
    description: 'Navegue por nossos conteúdos especializados e encontre as melhores dicas para sua saúde.',
  },
  alternates: {
    canonical: '/categorias',
  },
}

export default function CategoriesPage() {
  const featuredCategories = categories.filter(cat => cat.featured)
  const trendingCategories = categories.filter(cat => cat.trending)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">if</span>
              </div>
              <span className="text-xl font-bold">if</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Início</Link>
              <Link href="/categorias" className="text-sm font-medium text-primary">Categorias</Link>
              <Link href="/autores" className="text-sm font-medium hover:text-primary transition-colors">Autores</Link>
              <Link href="/sobre" className="text-sm font-medium hover:text-primary transition-colors">Sobre</Link>
              <Link href="/contato" className="text-sm font-medium hover:text-primary transition-colors">Contato</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <Input
                  type="search"
                  placeholder="Buscar categorias..."
                  className="w-64 pl-10"
                />
              </div>
              <Button variant="outline" size="sm">
                Newsletter
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-12 mb-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Grid3x3 className="w-12 h-12 text-green-600 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Categorias de <span className="text-green-600">Saúde</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Explore nossos conteúdos especializados e encontre as melhores dicas para cada aspecto da sua saúde
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 bg-green-600 hover:bg-green-700">
                Explorar Todas
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Em Destaque
              </Button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-600">{categories.length}</div>
              <div className="text-sm text-muted-foreground">Categorias</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-600">
                {categories.reduce((sum, cat) => sum + cat.postCount, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Artigos</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-purple-600">
                {Math.round(categories.reduce((sum, cat) => sum + cat.totalViews, 0) / 1000)}K
              </div>
              <div className="text-sm text-muted-foreground">Visualizações</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-orange-600">
                {categories.filter(cat => cat.trending).length}
              </div>
              <div className="text-sm text-muted-foreground">Em Alta</div>
            </CardContent>
          </Card>
        </section>

        {/* Search and Filter */}
        <section className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="search"
                placeholder="Buscar categorias de saúde..."
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nome">Nome (A-Z)</SelectItem>
                <SelectItem value="artigos">Mais Artigos</SelectItem>
                <SelectItem value="views">Mais Visualizadas</SelectItem>
                <SelectItem value="recentes">Mais Recentes</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </section>

        {/* Featured Categories */}
        {featuredCategories.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Categorias em Destaque</h2>
              <Button variant="outline" size="sm">
                Ver Todas
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCategories.map((category) => (
                <Card key={category.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative h-48">
                    <div className={`absolute inset-0 ${category.color} opacity-10`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className={`${category.color} text-white text-lg px-3 py-1`}>
                        {category.icon} {category.name}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-4 text-white text-sm">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {category.postCount} artigos
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          {Math.round(category.totalViews / 1000)}K views
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="pb-6 px-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      <Link href={`/categoria/${category.slug}`} className="block">
                        {category.name}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {category.description}
                    </p>
                    <Button asChild className="w-full">
                      <Link href={`/categoria/${category.slug}`}>
                        Explorar Categoria
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* All Categories Grid */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Todas as Categorias</h2>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-sm">
                {categories.length} categorias
              </Badge>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative h-32">
                  <div className={`absolute inset-0 ${category.color} opacity-20`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl">{category.icon}</span>
                  </div>
                  {category.trending && (
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-red-500 text-white text-xs">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Em Alta
                      </Badge>
                    </div>
                  )}
                </div>
                <CardContent className="pb-4 px-4">
                  <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                    <Link href={`/categoria/${category.slug}`} className="block">
                      {category.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {category.postCount}
                    </span>
                    <span className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {Math.round(category.totalViews / 1000)}K
                    </span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={`/categoria/${category.slug}`}>
                      Ver Artigos
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Posts from Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Artigos Recentes das Categorias</h2>
          <div className="grid gap-6">
            {recentPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className={post.category.color}>
                          {post.category.name}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {post.readTime} min de leitura
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        <Link href={`/post/${post.slug}`} className="hover:text-primary transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {post.author.name}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.createdAt).toLocaleDateString('pt-BR')}
                          </span>
                        </div>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          {post.views} views
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="text-center py-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Fique por dentro das <span className="text-green-600">novidades</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Receba os melhores artigos sobre saúde e bem-estar diretamente no seu email
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1"
              />
              <Button className="bg-green-600 hover:bg-green-700">
                Inscrever-se
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">if</span>
                </div>
                <span className="text-xl font-bold">if</span>
              </div>
              <p className="text-muted-foreground">
                Sua jornada para uma vida mais saudável e equilibrada.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Categorias</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/categorias/energia" className="hover:text-primary">Energia</Link></li>
                <li><Link href="/categorias/imunidade" className="hover:text-primary">Imunidade</Link></li>
                <li><Link href="/categorias/longevidade" className="hover:text-primary">Longevidade</Link></li>
                <li><Link href="/categorias/menopausa" className="hover:text-primary">Menopausa</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/autores" className="hover:text-primary">Autores</Link></li>
                <li><Link href="/sobre" className="hover:text-primary">Sobre Nós</Link></li>
                <li><Link href="/contato" className="hover:text-primary">Contato</Link></li>
                <li><Link href="/privacidade" className="hover:text-primary">Política de Privacidade</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Conecte-se</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/newsletter" className="hover:text-primary">Newsletter</Link></li>
                <li><Link href="/rss" className="hover:text-primary">RSS Feed</Link></li>
                <li><Link href="/instagram" className="hover:text-primary">Instagram</Link></li>
                <li><Link href="/facebook" className="hover:text-primary">Facebook</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 if. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}