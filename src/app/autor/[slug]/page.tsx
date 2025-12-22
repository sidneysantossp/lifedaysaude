import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, Award, Globe, Mail, Phone, ExternalLink, Linkedin, Instagram, Youtube, CheckCircle, BookOpen, Eye, Users, Star } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// Mock data - será substituído por dados do banco
const author = {
  id: '1',
  name: 'Dra. Ana Silva',
  slug: 'dra-ana-silva',
  title: 'Médica Nutróloga',
  credentials: 'CRM 12345 | CRN 67890',
  bio: 'Médica nutróloga com especialização em saúde integrativa e bem-estar. Há mais de 15 anos ajudando pessoas a transformarem sua saúde através da nutrição e hábitos saudáveis. Minha abordagem combina evidências científicas com práticas integrativas para oferecer o melhor tratamento possível para cada paciente.',
  longBio: 'Sou médica formada pela Faculdade de Medicina da USP, com pós-graduação em Nutrologia pela UNIFESP. Ao longo dos meus 15 anos de carreira, dediquei-me a entender como a nutrição pode transformar vidas e prevenir doenças.\n\nMinha jornada profissional inclui trabalho em hospitais de referência, consultório particular e pesquisa científica. Publicei diversos artigos em revistas médicas e participei de congressos nacionais e internacionais.\n\nAcredito em uma abordagem holística da saúde, onde alimentação, exercício, sono e bem-estar emocional trabalham juntos para promover saúde e longevidade.',
  avatar: '/api/placeholder/300/300',
  experience: '15+ anos',
  education: [
    'Faculdade de Medicina da USP (2005-2010)',
    'Residência Médica em Clínica Médica - HC-FMUSP (2011-2013)',
    'Pós-graduação em Nutrologia - UNIFESP (2014-2015)',
    'Especialização em Saúde Integrativa - Harvard Medical School (2018)',
    'Mestrado em Nutrição Clínica - USP (2019-2021)'
  ],
  specialties: ['Nutrologia', 'Saúde Integrativa', 'Bem-Estar', 'Medicina Preventiva', 'Nutrição Clínica'],
  socialLinks: {
    linkedin: 'https://linkedin.com/in/draanasilva',
    instagram: 'https://instagram.com/draanasilva',
    website: 'https://draanasilva.com.br',
    lattes: 'http://lattes.cnpq.br/123456789'
  },
  contact: {
    email: 'contato@draanasilva.com.br',
    phone: '+55 11 99999-9999',
    website: 'https://draanasilva.com.br'
  },
  location: 'São Paulo, SP',
  languages: ['Português (Nativo)', 'Inglês (Fluente)', 'Espanhol (Intermediário)'],
  featured: true,
  active: true,
  postCount: 24,
  totalViews: 45678,
  followers: 12500,
  createdAt: '2023-01-15',
  achievements: [
    'Prêmio de Melhor Artigo Científico - 2020',
    'Membro da Associação Brasileira de Nutrologia',
    'Certificação em Medicina Funcional',
    'Autora de 2 livros sobre nutrição'
  ]
}

const posts = [
  {
    id: '1',
    title: 'Como Aumentar sua Energia Naturalmente: Guia Completo',
    slug: 'aumentar-energia-naturalmente',
    excerpt: 'Descubra as melhores estratégias e suplementos para combater o cansaço e ter mais disposição no dia a dia.',
    coverImage: '/api/placeholder/400/250',
    category: { name: 'Energia', color: 'bg-yellow-500' },
    readTime: 8,
    viewCount: 2341,
    createdAt: '2024-01-15',
    featured: true
  },
  {
    id: '2',
    title: 'Os 10 Suplementos Essenciais para Mais Energia',
    slug: 'suplementos-essenciais-energia',
    excerpt: 'Conheça os suplementos mais eficazes para aumentar seus níveis de energia de forma segura e natural.',
    coverImage: '/api/placeholder/400/250',
    category: { name: 'Vitaminas & Minerais', color: 'bg-orange-500' },
    readTime: 6,
    viewCount: 1856,
    createdAt: '2024-01-12'
  },
  {
    id: '3',
    title: 'Nutrição para Imunidade Fortalecida',
    slug: 'nutricao-imunidade-fortalecida',
    excerpt: 'Aprenda quais alimentos e nutrientes fortalecem seu sistema imunológico e protegem sua saúde.',
    coverImage: '/api/placeholder/400/250',
    category: { name: 'Imunidade', color: 'bg-green-500' },
    readTime: 10,
    viewCount: 3124,
    createdAt: '2024-01-10'
  }
]

const relatedAuthors = [
  {
    id: '2',
    name: 'Dr. Carlos Mendes',
    slug: 'dr-carlos-mendes',
    title: 'Médico Geriatra',
    avatar: '/api/placeholder/100/100',
    specialties: ['Geriatria', 'Longevidade']
  },
  {
    id: '3',
    name: 'Dra. Maria Costa',
    slug: 'dra-maria-costa',
    title: 'Farmacêutica Bioquímica',
    avatar: '/api/placeholder/100/100',
    specialties: ['Farmacologia', 'Suplementação']
  }
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: `${author.name} - ${author.title} | Saúde & Bem-Estar`,
    description: `Conheça ${author.name}, ${author.title} com ${author.experience} de experiência. Especialista em ${author.specialties.join(', ')}. ${author.postCount} artigos publicados.`,
    keywords: [author.name, author.title, ...author.specialties, 'médico', 'especialista', 'saúde', 'nutrologia'],
    authors: [{ name: author.name }],
    openGraph: {
      title: `${author.name} - ${author.title}`,
      description: author.bio,
      type: 'profile',
      url: `https://saude-bem-estar.com/autor/${author.slug}`,
      images: [
        {
          url: author.avatar,
          width: 300,
          height: 300,
          alt: author.name,
        },
      ],
      locale: 'pt_BR',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${author.name} - ${author.title}`,
      description: author.bio,
      images: [author.avatar],
    },
    alternates: {
      canonical: `/autor/${author.slug}`,
    },
  }
}

export default function AuthorPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": author.name,
            "jobTitle": author.title,
            "description": author.bio,
            "url": `https://saude-bem-estar.com/autor/${author.slug}`,
            "image": author.avatar,
            "sameAs": Object.values(author.socialLinks),
            "knowsAbout": author.specialties,
            "worksFor": {
              "@type": "Organization",
              "name": "Saúde & Bem-Estar"
            },
            "alumniOf": author.education.map(edu => ({
              "@type": "EducationalOrganization",
              "name": edu.split(' - ')[0]
            })),
            "award": author.achievements
          })
        }}
      />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Início</Link>
          <span>/</span>
          <Link href="/autores" className="hover:text-primary">Autores</Link>
          <span>/</span>
          <span className="text-foreground">{author.name}</span>
        </nav>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Author Header */}
          <section className="mb-12">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-8 text-white">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="relative">
                    <div className="w-32 h-32 md:w-40 md:h-40">
                      <Image
                        src={author.avatar}
                        alt={author.name}
                        fill
                        className="rounded-full object-cover border-4 border-white"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <h1 className="text-3xl md:text-4xl font-bold">{author.name}</h1>
                      <div className="flex items-center gap-1 bg-yellow-500 text-white px-2 py-1 rounded-full text-sm">
                        <Star className="w-3 h-3" />
                        Destaque
                      </div>
                    </div>
                    <p className="text-xl mb-2 opacity-90">{author.title}</p>
                    <p className="text-sm opacity-80 mb-4">{author.credentials}</p>
                    <p className="text-base opacity-90 max-w-2xl">{author.bio}</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Button className="bg-white text-blue-600 hover:bg-gray-100">
                      <Mail className="w-4 h-4 mr-2" />
                      Entrar em Contato
                    </Button>
                    <div className="flex gap-2">
                      {author.socialLinks.linkedin && (
                        <Button variant="outline" size="icon" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                          <Linkedin className="w-4 h-4" />
                        </Button>
                      )}
                      {author.socialLinks.instagram && (
                        <Button variant="outline" size="icon" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                          <Instagram className="w-4 h-4" />
                        </Button>
                      )}
                      {author.socialLinks.website && (
                        <Button variant="outline" size="icon" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                          <Globe className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{author.postCount}</div>
                    <div className="text-sm text-muted-foreground">Artigos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">{author.totalViews.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Visualizações</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">{author.followers.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Seguidores</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">{author.experience}</div>
                    <div className="text-sm text-muted-foreground">Experiência</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Sobre Mim</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="prose prose-lg max-w-none">
                      {author.longBio.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4 text-muted-foreground">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Education */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Formação Acadêmica</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {author.education.map((edu, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <Award className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium">{edu.split(' - ')[0]}</p>
                            <p className="text-sm text-muted-foreground">{edu.split(' - ')[1]}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Recent Posts */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Artigos Recentes</h2>
                <div className="grid gap-6">
                  {posts.map((post) => (
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
                            {post.featured && (
                              <div className="absolute top-4 left-4">
                                <Badge className="bg-yellow-500 text-white">Destaque</Badge>
                              </div>
                            )}
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
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(post.createdAt).toLocaleDateString('pt-BR')}
                            </span>
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
                
                <div className="text-center mt-6">
                  <Button variant="outline" size="lg">
                    Ver Todos os Artigos
                  </Button>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Quick Info */}
              <Card>
                <CardHeader>
                  <h3 className="font-bold">Informações Rápidas</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{author.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{author.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-muted-foreground" />
                    <a href={author.contact.website} className="text-sm text-primary hover:underline">
                      Website
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{author.followers.toLocaleString()} seguidores</span>
                  </div>
                </CardContent>
              </Card>

              {/* Specialties */}
              <Card>
                <CardHeader>
                  <h3 className="font-bold">Especialidades</h3>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {author.specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card>
                <CardHeader>
                  <h3 className="font-bold">Idiomas</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {author.languages.map((language) => (
                      <div key={language} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{language}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card>
                <CardHeader>
                  <h3 className="font-bold">Conquistas</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {author.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Related Authors */}
              <Card>
                <CardHeader>
                  <h3 className="font-bold">Outros Especialistas</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {relatedAuthors.map((relatedAuthor) => (
                      <div key={relatedAuthor.id} className="flex items-center gap-3">
                        <div className="relative w-12 h-12">
                          <Image
                            src={relatedAuthor.avatar}
                            alt={relatedAuthor.name}
                            fill
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <Link 
                            href={`/autor/${relatedAuthor.slug}`}
                            className="font-medium text-sm hover:text-primary transition-colors"
                          >
                            {relatedAuthor.name}
                          </Link>
                          <p className="text-xs text-muted-foreground">{relatedAuthor.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </main>
    </div>
  )
}