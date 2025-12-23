import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, Eye, Tag, Heart, Activity, Sun, Moon } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import InfiniteCarousel from '@/components/ui/infinite-carousel'

// Mock data - será substituído por dados do banco
const featuredPosts = [
  {
    id: '1',
    title: 'Como Aumentar sua Energia Naturalmente: Guia Completo',
    slug: 'aumentar-energia-naturalmente',
    excerpt: 'Descubra as melhores estratégias e suplementos para combater o cansaço e ter mais disposição no dia a dia.',
    coverImage: '/artigo-energia-natural.jpg',
    author: { name: 'Dra. Ana Silva' },
    category: { name: 'Energia', color: 'bg-yellow-500' },
    readTime: 8,
    viewCount: 2341,
    createdAt: '2024-01-15',
    featured: true
  }
]

const recentPosts = [
  {
    id: '2',
    title: 'Fortaleça sua Imunidade com Estes 10 Alimentos',
    slug: 'fortalecer-imunidade-alimentos',
    excerpt: 'Conheça os alimentos poderosos que vão fortalecer seu sistema imunológico e proteger sua saúde.',
    coverImage: '/artigo-imunidade-alimentos.jpg',
    author: { name: 'Dr. Carlos Mendes' },
    category: { name: 'Imunidade', color: 'bg-green-500' },
    readTime: 6,
    viewCount: 1856,
    createdAt: '2024-01-14',
    tags: ['imunidade', 'alimentos', 'saúde', 'vitaminas']
  },
  {
    id: '3',
    title: 'Longevidade: Hábitos das Pessoas que Vivem Mais',
    slug: 'longevidade-habitos-saudaveis',
    excerpt: 'Aprenda com as zonas azuis do mundo e adote hábitos que podem aumentar sua expectativa de vida.',
    coverImage: '/artigo-longevidade-habitos.jpg',
    author: { name: 'Dra. Maria Costa' },
    category: { name: 'Longevidade', color: 'bg-blue-500' },
    readTime: 10,
    viewCount: 1423,
    createdAt: '2024-01-13',
    tags: ['longevidade', 'hábitos', 'qualidade de vida']
  },
  {
    id: '4',
    title: 'Menopausa: Como Enfrentar esta Fase com Qualidade de Vida',
    slug: 'menopausa-qualidade-vida',
    excerpt: 'Guia completo para lidar com os sintomas da menopausa e manter o bem-estar durante esta transição.',
    coverImage: '/artigo-menopausa-qualidade.jpg',
    author: { name: 'Dra. Paula Santos' },
    category: { name: 'Menopausa', color: 'bg-purple-500' },
    readTime: 12,
    viewCount: 987,
    createdAt: '2024-01-12',
    tags: ['menopausa', 'saúde da mulher', 'bem-estar']
  },
  {
    id: '5',
    title: 'Sono de Qualidade: O Segredo para uma Vida Mais Saudável',
    slug: 'sono-qualidade-saude',
    excerpt: 'Descubra como melhorar a qualidade do seu sono e os benefícios para sua saúde física e mental.',
    coverImage: '/artigo-sono-qualidade.jpg',
    author: { name: 'Dr. Roberto Oliveira' },
    category: { name: 'Sono & Bem Estar', color: 'bg-indigo-500' },
    readTime: 7,
    viewCount: 1654,
    createdAt: '2024-01-11',
    tags: ['sono', 'bem-estar', 'saúde mental']
  }
]

const categories = [
  { name: 'Energia', slug: 'energia', count: 12, color: 'bg-yellow-500', icon: '⚡', image: '/categoria-energia.jpg' },
  { name: 'Imunidade', slug: 'imunidade', count: 15, color: 'bg-green-500', icon: '🛡️', image: '/categoria-imunidade.jpg' },
  { name: 'Longevidade', slug: 'longevidade', count: 8, color: 'bg-blue-500', icon: '🌱', image: '/categoria-longevidade.jpg' },
  { name: 'Menopausa', slug: 'menopausa', count: 10, color: 'bg-purple-500', icon: '🌸', image: '/categoria-menopausa.jpg' },
  { name: 'Sono & Bem Estar', slug: 'sono-bem-estar', count: 14, color: 'bg-indigo-500', icon: '🌙', image: '/categoria-sono.jpg' },
  { name: 'Ossos & Músculos', slug: 'ossos-musculos', count: 9, color: 'bg-red-500', icon: '💪', image: '/categoria-ossos.jpg' },
  { name: 'Vitaminas & Minerais', slug: 'vitaminas-minerais', count: 18, color: 'bg-orange-500', icon: '💊', image: '/categoria-vitaminas.jpg' },
  { name: 'Cabelo, Pele, Unha', slug: 'cabelo-pele-unha', count: 11, color: 'bg-pink-500', icon: '✨', image: '/categoria-beleza.jpg' }
]

export const metadata: Metadata = {
  title: 'if - Saúde & Bem-Estar | Dicas para uma Vida Mais Saudável',
  description: 'Descubra as melhores dicas de saúde, bem-estar, nutrição e qualidade de vida. Guias completos sobre energia, imunidade, longevidade e muito mais.',
  keywords: ['saúde', 'bem-estar', 'energia', 'imunidade', 'longevidade', 'menopausa', 'sono', 'vitaminas', 'nutrição'],
  openGraph: {
    title: 'if - Saúde & Bem-Estar',
    description: 'Aprenda a viver com mais saúde e qualidade de vida através de nossas dicas especializadas.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'if - Saúde & Bem-Estar',
    description: 'Aprenda a viver com mais saúde e qualidade de vida através de nossas dicas especializadas.',
  },
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
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
              <Link href="/categorias" className="text-sm font-medium hover:text-primary transition-colors">Categorias</Link>
              <Link href="/autores" className="text-sm font-medium hover:text-primary transition-colors">Autores</Link>
              <Link href="/sobre" className="text-sm font-medium hover:text-primary transition-colors">Sobre</Link>
              <Link href="/contato" className="text-sm font-medium hover:text-primary transition-colors">Contato</Link>
              <Link href="/admin" className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded hover:bg-primary/20 transition-colors">Admin</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <Input
                  type="search"
                  placeholder="Buscar artigos..."
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sua Jornada para uma <span className="text-green-600">Vida Mais Saudável</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Descubra o poder da nutrição, suplementação e hábitos saudáveis para transformar sua qualidade de vida
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 bg-green-600 hover:bg-green-700">
                Começar Agora
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Explorar Artigos
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Carousel */}
        <section className="mb-12">
          <InfiniteCarousel 
            categories={categories}
            autoPlay={true}
            speed={3000}
          />
        </section>

        {/* Featured Post */}
        {featuredPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Artigo em Destaque</h2>
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={featuredPosts[0].coverImage}
                      alt={featuredPosts[0].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-yellow-500 text-white">Destaque</Badge>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={featuredPosts[0].category.color}>
                      {featuredPosts[0].category.name}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {featuredPosts[0].readTime} min de leitura
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    <Link href={`/post/${featuredPosts[0].slug}`} className="hover:text-primary transition-colors">
                      {featuredPosts[0].title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {featuredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {featuredPosts[0].author.name}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPosts[0].createdAt).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {featuredPosts[0].viewCount}
                    </span>
                  </div>
                  <Button asChild className="bg-green-600 hover:bg-green-700">
                    <Link href={`/post/${featuredPosts[0].slug}`}>
                      Ler Artigo Completo
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </section>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filter */}
            <div className="mb-8 flex flex-col sm:flex-row gap-4">
              <Input
                type="search"
                placeholder="Buscar artigos de saúde..."
                className="flex-1"
              />
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.slug} value={category.slug}>
                      {category.icon} {category.name} ({category.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recentes">Mais Recentes</SelectItem>
                  <SelectItem value="populares">Mais Populares</SelectItem>
                  <SelectItem value="lidos">Mais Lidos</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Recent Posts */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Artigos Recentes</h2>
              <div className="grid gap-6">
                {recentPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="relative h-48 md:h-full">
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
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
                                <Tag className="w-3 h-3 mr-1" />
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
          <aside className="lg:col-span-1">
            {/* Newsletter */}
            <Card className="mb-6">
              <CardHeader>
                <h3 className="font-bold flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  Newsletter Saúde
                </h3>
                <p className="text-sm text-muted-foreground">
                  Receba dicas exclusivas de saúde e bem-estar no seu email
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Input type="email" placeholder="Seu email" />
                  <Button className="w-full bg-green-600 hover:bg-green-700">Assinar</Button>
                </div>
              </CardContent>
            </Card>

            {/* Popular Categories */}
            <Card className="mb-6">
              <CardHeader>
                <h3 className="font-bold">Categorias Populares</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.slice(0, 6).map((category) => (
                    <Link
                      key={category.slug}
                      href={`/categoria/${category.slug}`}
                      className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{category.icon}</span>
                        <span className="text-sm">{category.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card className="mb-6">
              <CardHeader>
                <h3 className="font-bold">Artigos Populares</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPosts.slice(0, 3).map((post, index) => (
                    <div key={post.id} className="flex gap-3">
                      <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                        <span className="font-bold text-green-600">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <Link
                          href={`/post/${post.slug}`}
                          className="text-sm font-medium hover:text-primary transition-colors line-clamp-2"
                        >
                          {post.title}
                        </Link>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-muted-foreground">
                            {new Date(post.createdAt).toLocaleDateString('pt-BR')}
                          </span>
                          <span className="text-xs text-muted-foreground">•</span>
                          <span className="text-xs text-muted-foreground">
                            {post.viewCount} views
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Health Tips */}
            <Card>
              <CardHeader>
                <h3 className="font-bold flex items-center gap-2">
                  <Activity className="w-5 h-5 text-green-600" />
                  Dica Rápida
                </h3>
              </CardHeader>
              <CardContent>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Beba água!</strong> Manter-se hidratado é essencial para energia, imunidade e saúde geral. 
                    Tente beber pelo menos 8 copos de água por dia.
                  </p>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">if</span>
                </div>
                <span className="text-xl font-bold">if</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Sua jornada para uma vida mais saudável e equilibrada.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-muted-foreground hover:text-primary">Início</Link></li>
                <li><Link href="/categorias" className="text-muted-foreground hover:text-primary">Categorias</Link></li>
                <li><Link href="/sobre" className="text-muted-foreground hover:text-primary">Sobre</Link></li>
                <li><Link href="/contato" className="text-muted-foreground hover:text-primary">Contato</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Categorias</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/categoria/energia" className="text-muted-foreground hover:text-primary">Energia</Link></li>
                <li><Link href="/categoria/imunidade" className="text-muted-foreground hover:text-primary">Imunidade</Link></li>
                <li><Link href="/categoria/longevidade" className="text-muted-foreground hover:text-primary">Longevidade</Link></li>
                <li><Link href="/categoria/vitaminas-minerais" className="text-muted-foreground hover:text-primary">Vitaminas</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacidade" className="text-muted-foreground hover:text-primary">Política de Privacidade</Link></li>
                <li><Link href="/termos" className="text-muted-foreground hover:text-primary">Termos de Uso</Link></li>
                <li><Link href="/disclaimer" className="text-muted-foreground hover:text-primary">Disclaimer Médico</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 if. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}