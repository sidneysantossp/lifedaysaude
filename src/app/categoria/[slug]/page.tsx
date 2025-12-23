import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, Eye, ArrowLeft, BookOpen, TrendingUp, Filter } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

// Mock data - será substituído por dados do banco
const categoryData = {
  id: '1',
  name: 'Energia',
  slug: 'energia',
  description: 'Descubra como aumentar seus níveis de energia naturalmente através da nutrição, suplementação e hábitos saudáveis. Encontre estratégias práticas para combater o cansaço e ter mais disposição no dia a dia.',
  color: 'bg-yellow-500',
  icon: '⚡',
  image: '/categoria-energia.jpg',
  postCount: 12,
  totalViews: 45230,
  averageReadTime: 8,
  stats: {
    totalViews: 45230,
    totalReadTime: 96,
    averageReadTime: 8,
    totalComments: 234
  }
}

const posts = [
  {
    id: '1',
    title: 'Os 10 Melhores Suplementos para Energia e Vitalidade',
    slug: 'melhores-suplementos-energia',
    excerpt: 'Descubra quais suplementos realmente funcionam para aumentar sua energia e disposição diária, com base na ciência e evidências clínicas.',
    coverImage: '/artigo-energia-suplementos.jpg',
    author: { name: 'Dra. Ana Silva', avatar: '/avatar-ana.jpg', title: 'Nutricionista Esportiva' },
    category: { name: 'Energia', color: 'bg-yellow-500' },
    readTime: 8,
    viewCount: 2341,
    createdAt: '2024-01-15',
    tags: ['energia', 'suplementos', 'vitaminas', 'disposição'],
    featured: true
  },
  {
    id: '2',
    title: 'Alimentos que Aumentam a Energia Imediatamente',
    slug: 'alimentos-energia-imediata',
    excerpt: 'Conheça os alimentos poderosos que proporcionam energia rápida e sustentável, perfeitos para combater a tarde de sono.',
    coverImage: '/artigo-energia-alimentos.jpg',
    author: { name: 'Dr. Carlos Mendes', avatar: '/avatar-carlos.jpg', title: 'Médico Nutrólogo' },
    category: { name: 'Energia', color: 'bg-yellow-500' },
    readTime: 6,
    viewCount: 1856,
    createdAt: '2024-01-14',
    tags: ['energia', 'alimentos', 'nutrição', 'bem-estar']
  },
  {
    id: '3',
    title: 'Exercícios Físicos para Aumentar a Energia Diária',
    slug: 'exercicios-energia-diaria',
    excerpt: 'Aprenda quais exercícios físicos são mais eficazes para aumentar seus níveis de energia e melhorar a disposição.',
    coverImage: '/artigo-energia-exercicios.jpg',
    author: { name: 'Dra. Maria Costa', avatar: '/avatar-maria.jpg', title: 'Educação Física' },
    category: { name: 'Energia', color: 'bg-yellow-500' },
    readTime: 10,
    viewCount: 1423,
    createdAt: '2024-01-13',
    tags: ['energia', 'exercícios', 'disposição', 'saúde']
  },
  {
    id: '4',
    title: 'Sono e Energia: A Conexão que Você Precisa Conhecer',
    slug: 'sono-energia-conexao',
    excerpt: 'Entenda como a qualidade do seu sono impacta diretamente seus níveis de energia durante o dia.',
    coverImage: '/artigo-energia-sono.jpg',
    author: { name: 'Dr. Roberto Oliveira', avatar: '/avatar-roberto.jpg', title: 'Médico do Sono' },
    category: { name: 'Energia', color: 'bg-yellow-500' },
    readTime: 7,
    viewCount: 1654,
    createdAt: '2024-01-12',
    tags: ['energia', 'sono', 'qualidade de vida', 'bem-estar']
  }
]

const relatedCategories = [
  { name: 'Sono & Bem Estar', slug: 'sono-bem-estar', count: 14, icon: '🌙', color: 'bg-indigo-500' },
  { name: 'Vitaminas & Minerais', slug: 'vitaminas-minerais', count: 18, icon: '💊', color: 'bg-orange-500' },
  { name: 'Imunidade', slug: 'imunidade', count: 15, icon: '🛡️', color: 'bg-green-500' },
  { name: 'Longevidade', slug: 'longevidade', count: 8, icon: '🌱', color: 'bg-blue-500' }
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: `${categoryData.name} - if | Guias Completo`,
    description: categoryData.description,
    keywords: [categoryData.name, 'saúde', 'bem-estar', 'energia', 'disposição', 'qualidade de vida'],
    openGraph: {
      title: `${categoryData.name} - if`,
      description: categoryData.description,
      type: 'website',
      locale: 'pt_BR',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${categoryData.name} - if`,
      description: categoryData.description,
    },
    alternates: {
      canonical: `/categoria/${categoryData.slug}`,
    },
  }
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const featuredPost = posts.find(post => post.featured)
  const regularPosts = posts.filter(post => !post.featured)

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
                  placeholder="Buscar em energia..."
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
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-primary">Início</Link>
          <span>/</span>
          <Link href="/categorias" className="hover:text-primary">Categorias</Link>
          <span>/</span>
          <span className="text-foreground font-medium">{categoryData.name}</span>
        </nav>

        {/* Category Header */}
        <section className="mb-12">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-yellow-50 to-orange-50 p-8 md:p-12">
            <div className="absolute top-4 right-4">
              <Badge className={`${categoryData.color} text-white text-lg px-4 py-2`}>
                {categoryData.icon} {categoryData.name}
              </Badge>
            </div>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {categoryData.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {categoryData.description}
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-yellow-600" />
                  <span className="font-medium">{categoryData.postCount} artigos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-blue-600" />
                  <span className="font-medium">{Math.round(categoryData.stats.totalViews / 1000)}K visualizações</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-600" />
                  <span className="font-medium">{categoryData.stats.averageReadTime} min leitura</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Input
                type="search"
                placeholder={`Buscar artigos sobre ${categoryData.name.toLowerCase()}...`}
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recentes">Mais Recentes</SelectItem>
                <SelectItem value="populares">Mais Populares</SelectItem>
                <SelectItem value="lidos">Mais Lidos</SelectItem>
                <SelectItem value="tempo">Menor Tempo de Leitura</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            {featuredPost && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Artigo em Destaque</h2>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <div className="relative h-64 md:h-full">
                        <div className={`absolute inset-0 ${categoryData.color} opacity-10`}></div>
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-yellow-500 text-white">Destaque</Badge>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-6xl opacity-20">{categoryData.icon}</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-3/5 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className={featuredPost.category.color}>
                          {featuredPost.category.name}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {featuredPost.readTime} min de leitura
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">
                        <Link href={`/post/${featuredPost.slug}`} className="hover:text-primary transition-colors">
                          {featuredPost.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {featuredPost.author.name}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(featuredPost.createdAt).toLocaleDateString('pt-BR')}
                          </span>
                        </div>
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {featuredPost.viewCount}
                        </span>
                      </div>
                      {featuredPost.tags && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {featuredPost.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                      <Button className="bg-green-600 hover:bg-green-700">
                        <Link href={`/post/${featuredPost.slug}`}>
                          Ler Artigo Completo
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </section>
            )}

            {/* Regular Posts */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Todos os Artigos</h2>
              <div className="grid gap-6">
                {regularPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="relative h-48 md:h-full">
                          <div className={`absolute inset-0 ${post.category.color} opacity-10`}></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-5xl opacity-20">{categoryData.icon}</span>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-2/3 p-6">
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
                        {post.tags && (
                          <div className="flex flex-wrap gap-1 mb-3">
                            {post.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {post.author.name}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(post.createdAt).toLocaleDateString('pt-BR')}
                            </span>
                          </div>
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {post.viewCount}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              {/* Load More */}
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Carregar Mais Artigos
                </Button>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Category Stats */}
            <Card className="mb-6">
              <CardHeader>
                <h3 className="font-bold">Estatísticas da Categoria</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total de Artigos</span>
                  <span className="font-bold">{categoryData.postCount}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Visualizações</span>
                  <span className="font-bold">{Math.round(categoryData.stats.totalViews / 1000)}K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Tempo Médio</span>
                  <span className="font-bold">{categoryData.stats.averageReadTime} min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Comentários</span>
                  <span className="font-bold">{categoryData.stats.totalComments}</span>
                </div>
              </CardContent>
            </Card>

            {/* Related Categories */}
            <Card className="mb-6">
              <CardHeader>
                <h3 className="font-bold">Categorias Relacionadas</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                {relatedCategories.map((relatedCategory) => (
                  <Link
                    key={relatedCategory.slug}
                    href={`/categoria/${relatedCategory.slug}`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{relatedCategory.icon}</span>
                      <div>
                        <div className="font-medium text-sm">{relatedCategory.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {relatedCategory.count} artigos
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {relatedCategory.count}
                    </Badge>
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card>
              <CardHeader>
                <h3 className="font-bold">Newsletter {categoryData.name}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Receba os melhores artigos sobre {categoryData.name.toLowerCase()} diretamente no seu email.
                </p>
                <div className="space-y-2">
                  <Input type="email" placeholder="Seu email" />
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Inscrever-se
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
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