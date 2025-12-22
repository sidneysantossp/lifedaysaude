import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, MapPin, Award, Globe, Star, CheckCircle, ExternalLink, Heart } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

// Mock data - será substituído por dados do banco
const authors = [
  {
    id: '1',
    name: 'Dra. Ana Silva',
    slug: 'dra-ana-silva',
    title: 'Médica Nutróloga',
    credentials: 'CRM 12345 | CRN 67890',
    bio: 'Médica nutróloga com especialização em saúde integrativa e bem-estar. Há mais de 15 anos ajudando pessoas a transformarem sua saúde através da nutrição e hábitos saudáveis.',
    avatar: '/api/placeholder/200/200',
    experience: '15+ anos',
    education: 'Faculdade de Medicina da USP • Pós-graduação em Nutrologia pela UNIFESP',
    specialties: ['Nutrologia', 'Saúde Integrativa', 'Bem-Estar', 'Medicina Preventiva'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/draanasilva',
      instagram: 'https://instagram.com/draanasilva',
      website: 'https://draanasilva.com.br'
    },
    location: 'São Paulo, SP',
    languages: ['Português', 'Inglês', 'Espanhol'],
    featured: true,
    active: true,
    postCount: 24,
    totalViews: 45678,
    createdAt: '2023-01-15'
  },
  {
    id: '2',
    name: 'Dr. Carlos Mendes',
    slug: 'dr-carlos-mendes',
    title: 'Médico Geriatra',
    credentials: 'CRM 54321 • RQE 98765',
    bio: 'Especialista em geriatria e longevidade saudável. Focado em ajudar pessoas a viverem mais e melhor através de evidências científicas e abordagens personalizadas.',
    avatar: '/api/placeholder/200/200',
    experience: '12+ anos',
    education: 'Faculdade de Medicina da UFMG • Residência em Geriatria no HC-FMUSP',
    specialties: ['Geriatria', 'Longevidade', 'Medicina Preventiva', 'Qualidade de Vida'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/drcarlosmendes',
      instagram: 'https://instagram.com/drcarlosmendes'
    },
    location: 'Belo Horizonte, MG',
    languages: ['Português', 'Inglês'],
    featured: true,
    active: true,
    postCount: 18,
    totalViews: 32145,
    createdAt: '2023-03-20'
  },
  {
    id: '3',
    name: 'Dra. Maria Costa',
    slug: 'dra-maria-costa',
    title: 'Farmacêutica Bioquímica',
    credentials: 'CRF 11111 • Pós em Fitoterapia',
    bio: 'Especialista em farmacologia e suplementação. Dedica-se a desmistificar o mundo dos suplementos e ajudar as pessoas a fazerem escolhas seguras e eficazes.',
    avatar: '/api/placeholder/200/200',
    experience: '10+ anos',
    education: 'Faculdade de Farmácia da UFRJ • Pós-graduação em Fitoterapia',
    specialties: ['Farmacologia', 'Suplementação', 'Vitaminas', 'Minerais', 'Fitoterapia'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/dramariacosta',
      instagram: 'https://instagram.com/dramariacosta',
      website: 'https://dramariacosta.com.br'
    },
    location: 'Rio de Janeiro, RJ',
    languages: ['Português', 'Inglês'],
    featured: false,
    active: true,
    postCount: 32,
    totalViews: 52341,
    createdAt: '2022-11-10'
  },
  {
    id: '4',
    name: 'Dr. Roberto Oliveira',
    slug: 'dr-roberto-oliveira',
    title: 'Médico do Esporte',
    credentials: 'CRM 22222 • Especialista em Medicina do Esporte',
    bio: 'Especialista em medicina do esporte e fisiologia do exercício. Ajuda atletas e entusiastas a otimizarem seu desempenho e recuperação através de abordagens científicas.',
    avatar: '/api/placeholder/200/200',
    experience: '8+ anos',
    education: 'Faculdade de Medicina da Unicamp • Especialização em Medicina do Esporte',
    specialties: ['Medicina do Esporte', 'Fisiologia', 'Performance', 'Recuperação'],
    socialLinks: {
      instagram: 'https://instagram.com/drrobertooliveira',
      youtube: 'https://youtube.com/drrobertooliveira'
    },
    location: 'Campinas, SP',
    languages: ['Português', 'Inglês'],
    featured: false,
    active: true,
    postCount: 15,
    totalViews: 28976,
    createdAt: '2023-06-05'
  },
  {
    id: '5',
    name: 'Dra. Paula Santos',
    slug: 'dra-paula-santos',
    title: 'Ginecologista e Obstetra',
    credentials: 'CRM 33333 • RQE 11111',
    bio: 'Especialista em saúde da mulher, com foco em menopausa e bem-estar feminino. Comprometida em ajudar mulheres a viverem bem em todas as fases da vida.',
    avatar: '/api/placeholder/200/200',
    experience: '14+ anos',
    education: 'Faculdade de Medicina da UFPE • Residência em Ginecologia e Obstetrícia',
    specialties: ['Ginecologia', 'Menopausa', 'Saúde da Mulher', 'Bem-Estar Feminino'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/drapaulasantos',
      instagram: 'https://instagram.com/drapaulasantos'
    },
    location: 'Recife, PE',
    languages: ['Português', 'Inglês'],
    featured: true,
    active: true,
    postCount: 21,
    totalViews: 38765,
    createdAt: '2023-02-28'
  }
]

const specialties = [
  'Todas',
  'Nutrologia',
  'Geriatria',
  'Farmacologia',
  'Medicina do Esporte',
  'Ginecologia',
  'Saúde Integrativa',
  'Longevidade'
]

export const metadata: Metadata = {
  title: 'Nossos Especialistas - Autores | Saúde & Bem-Estar',
  description: 'Conheça nossa equipe de especialistas em saúde e bem-estar. Médicos, nutrólogos e profissionais qualificados que compartilham conhecimento baseado em evidências científicas.',
  keywords: ['especialistas saúde', 'médicos autores', 'profissionais saúde', 'equipe médica', 'autores especializados'],
  openGraph: {
    title: 'Nossos Especialistas - Saúde & Bem-Estar',
    description: 'Conheça nossa equipe de especialistas em saúde e bem-estar. Profissionais qualificados com vasta experiência.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nossos Especialistas - Saúde & Bem-Estar',
    description: 'Conheça nossa equipe de especialistas em saúde e bem-estar.',
  },
  alternates: {
    canonical: '/autores',
  },
}

export default function AuthorsPage() {
  const featuredAuthors = authors.filter(author => author.featured)
  const regularAuthors = authors.filter(author => !author.featured)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Saúde & Bem-Estar</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Início</Link>
              <Link href="/categorias" className="text-sm font-medium hover:text-primary transition-colors">Categorias</Link>
              <Link href="/autores" className="text-sm font-medium text-primary">Autores</Link>
              <Link href="/sobre" className="text-sm font-medium hover:text-primary transition-colors">Sobre</Link>
              <Link href="/contato" className="text-sm font-medium hover:text-primary transition-colors">Contato</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <Input
                  type="search"
                  placeholder="Buscar autores..."
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
        <section className="text-center py-12 mb-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nossos <span className="text-blue-600">Especialistas</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Conheça a equipe de profissionais qualificados que compartilham conhecimento 
              baseado em anos de experiência e evidências científicas
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{authors.length}</div>
                <div className="text-sm text-muted-foreground">Especialistas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">110+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">200K+</div>
                <div className="text-sm text-muted-foreground">Leitores Mensais</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">100%</div>
                <div className="text-sm text-muted-foreground">Conteúdo Verificado</div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Input
                type="search"
                placeholder="Buscar especialistas por nome ou especialidade..."
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Especialidade" />
              </SelectTrigger>
              <SelectContent>
                {specialties.map((specialty) => (
                  <SelectItem key={specialty} value={specialty}>
                    {specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="destaque">Em Destaque</SelectItem>
                <SelectItem value="nome">Nome</SelectItem>
                <SelectItem value="experiencia">Experiência</SelectItem>
                <SelectItem value="artigos">Mais Artigos</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* Featured Authors */}
        {featuredAuthors.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-5 h-5 text-yellow-500" />
              <h2 className="text-2xl font-bold">Especialistas em Destaque</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredAuthors.map((author) => (
                <Card key={author.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <Image
                        src={author.avatar}
                        alt={author.name}
                        fill
                        className="rounded-full object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">{author.name}</h3>
                    <p className="text-sm text-muted-foreground">{author.title}</p>
                    <p className="text-xs text-muted-foreground">{author.credentials}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {author.bio}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {author.specialties.slice(0, 2).map((specialty) => (
                        <Badge key={specialty} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                      {author.specialties.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{author.specialties.length - 2}
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-2 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3" />
                        <span>{author.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-3 h-3" />
                        <span>{author.experience} de experiência</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        <span>{author.postCount} artigos publicados</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button asChild className="flex-1">
                        <Link href={`/autor/${author.slug}`}>
                          Ver Perfil
                        </Link>
                      </Button>
                      <Button variant="outline" size="icon">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* All Authors */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Todos os Especialistas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularAuthors.map((author) => (
              <Card key={author.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="relative w-20 h-20 mx-auto mb-3">
                    <Image
                      src={author.avatar}
                      alt={author.name}
                      fill
                      className="rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold">{author.name}</h3>
                  <p className="text-sm text-muted-foreground">{author.title}</p>
                  <p className="text-xs text-muted-foreground">{author.credentials}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {author.bio}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {author.specialties.slice(0, 2).map((specialty) => (
                      <Badge key={specialty} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-1 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      <span>{author.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-3 h-3" />
                      <span>{author.experience} de experiência</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button asChild className="flex-1" variant="outline">
                      <Link href={`/autor/${author.slug}`}>
                        Ver Perfil
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            Quer se tornar um autor?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Junte-se à nossa equipe de especialistas e compartilhe seu conhecimento com milhares de leitores. 
            Temos padrões rigorosos para garantir a qualidade e precisão do conteúdo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Candidatar-se como Autor
            </Button>
            <Button variant="outline" size="lg">
              Nossos Padrões de Qualidade
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Saúde & Bem-Estar</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Conteúdo especializado criado por profissionais de saúde qualificados.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-muted-foreground hover:text-primary">Início</Link></li>
                <li><Link href="/categorias" className="text-muted-foreground hover:text-primary">Categorias</Link></li>
                <li><Link href="/autores" className="text-muted-foreground hover:text-primary">Autores</Link></li>
                <li><Link href="/sobre" className="text-muted-foreground hover:text-primary">Sobre</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Para Profissionais</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/autores" className="text-muted-foreground hover:text-primary">Nossos Autores</Link></li>
                <li><Link href="/candidatar" className="text-muted-foreground hover:text-primary">Seja Autor</Link></li>
                <li><Link href="/padroes" className="text-muted-foreground hover:text-primary">Padrões de Qualidade</Link></li>
                <li><Link href="/contato" className="text-muted-foreground hover:text-primary">Contato</Link></li>
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
            <p>© 2024 Saúde & Bem-Estar. Todos os direitos reservados. | As informações não substituem consulta médica.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}