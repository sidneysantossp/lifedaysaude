import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, Eye, CheckCircle, AlertCircle, BookOpen, Target, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import HealthSchema from '@/components/seo/HealthSchema'

// Dados do Pillar Page
const pillarData = {
  title: 'Energia: Guia Completo para Vitalidade e Bem-Estar',
  description: 'Descubra tudo sobre energia natural, fadiga crônica, suplementação e estratégias para aumentar sua disposição. Guia completo baseado em evidências científicas.',
  url: 'https://saude-bem-estar.com/pilares/energia',
  image: '/artigo-energia-natural.jpg',
  lastReviewed: '2024-01-15',
  reviewedBy: 'Dra. Ana Silva'
}

// Cluster Content - Artigos relacionados ao pilar
const clusterContent = [
  {
    title: 'Como Aumentar sua Energia Naturalmente',
    slug: 'aumentar-energia-naturalmente',
    excerpt: 'Estratégias comprovadas para combater a fadiga e aumentar disposição',
    category: 'Fundamentos',
    difficulty: 'Básico',
    readTime: 8,
    image: '/artigo-energia-natural.jpg'
  },
  {
    title: 'Alimentos que Aumentam a Energia',
    slug: 'alimentos-aumentam-energia',
    excerpt: 'Os melhores alimentos para combater o cansaço e melhorar vitalidade',
    category: 'Nutrição',
    difficulty: 'Básico',
    readTime: 6,
    image: '/artigo-imunidade-alimentos.jpg'
  },
  {
    title: 'Suplementos Energéticos: Guia Completo',
    slug: 'suplementos-energeticos-guia',
    excerpt: 'Análise completa dos melhores suplementos para energia e disposição',
    category: 'Suplementação',
    difficulty: 'Intermediário',
    readTime: 12,
    image: '/artigo-longevidade-habitos.jpg'
  },
  {
    title: 'Exercícios para Mais Energia',
    slug: 'exercicios-mais-energia',
    excerpt: 'Movimentos específicos que aumentam disposição e combatem fadiga',
    category: 'Exercícios',
    difficulty: 'Básico',
    readTime: 7,
    image: '/artigo-sono-qualidade.jpg'
  },
  {
    title: 'Sono e Energia: A Conexão Essencial',
    slug: 'sono-energia-conexao',
    excerpt: 'Como a qualidade do sono afeta seus níveis de energia diários',
    category: 'Sono',
    difficulty: 'Intermediário',
    readTime: 10,
    image: '/artigo-menopausa-qualidade.jpg'
  },
  {
    title: 'Estresse e Fadiga: Como Quebrar o Ciclo',
    slug: 'estresse-fadiga-ciclo',
    excerpt: 'Estratégias para reduzir estresse e recuperar energia natural',
    category: 'Saúde Mental',
    difficulty: 'Intermediário',
    readTime: 9,
    image: '/artigo-energia-natural.jpg'
  }
]

// FAQ para Schema
const faqData = [
  {
    question: "O que causa fadiga crônica?",
    answer: "A fadiga crônica pode ser causada por múltiplos fatores incluindo privação de sono, má nutrição, estresse crônico, condições médicas subjacentes, deficiências de vitaminas e sedentarismo. É importante consultar um médico para diagnóstico adequado."
  },
  {
    question: "Quais suplementos realmente aumentam a energia?",
    answer: "Os suplementos mais eficazes para energia incluem Coenzima Q10, Magnésio, Vitaminas do Complexo B, Ferro (em caso de deficiência), e Adaptógenos como Rhodiola rosea. Sempre consulte um profissional antes de iniciar suplementação."
  },
  {
    question: "Como melhorar a energia naturalmente?",
    answer: "Para melhorar a energia naturalmente: durma 7-9 horas por noite, mantenha-se hidratado, faça exercícios regularmente, consuma alimentos nutritivos, gerencie o estresse, evite excesso de cafeína e mantenha horários regulares."
  },
  {
    question: "Quando devo procurar um médico para fadiga?",
    answer: "Procure um médico se a fadiga persistir por mais de duas semanas, for acompanhada por perda de peso inexplicada, falta de ar, tonturas, palidez extrema ou interferir significativamente em suas atividades diárias."
  }
]

export const metadata: Metadata = {
  title: pillarData.title,
  description: pillarData.description,
  keywords: ['energia', 'fadiga', 'vitalidade', 'bem-estar', 'suplementos energéticos', 'saúde', 'disposição'],
  openGraph: {
    title: pillarData.title,
    description: pillarData.description,
    type: 'article',
    url: pillarData.url,
    images: [
      {
        url: pillarData.image,
        width: 1440,
        height: 720,
        alt: pillarData.title,
      },
    ],
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: pillarData.title,
    description: pillarData.description,
    images: [pillarData.image],
  },
  alternates: {
    canonical: pillarData.url,
  },
}

export default function PillarPage() {
  return (
    <>
      <HealthSchema
        articleSchema={{
          title: pillarData.title,
          description: pillarData.description,
          author: pillarData.reviewedBy,
          datePublished: '2024-01-15',
          dateModified: '2024-01-15',
          image: pillarData.image,
          url: pillarData.url,
          medicalSpecialty: 'Medicina Geral',
          about: ['Energia', 'Fadiga', 'Vitalidade', 'Bem-Estar', 'Suplementação'],
          mentions: ['Coenzima Q10', 'Magnésio', 'Vitaminas do Complexo B', 'Sono', 'Exercício']
        }}
        organizationSchema={{
          name: 'Saúde & Bem-Estar',
          url: 'https://saude-bem-estar.com',
          logo: 'https://saude-bem-estar.com/logo.png',
          description: 'Plataforma líder em conteúdo de saúde e bem-estar com informações baseadas em evidências científicas',
          sameAs: [
            'https://facebook.com/saudebemestar',
            'https://instagram.com/saudebemestar',
            'https://linkedin.com/company/saudebemestar'
          ]
        }}
        faqSchema={{
          questions: faqData
        }}
        medicalWebPageSchema={{
          name: pillarData.title,
          description: pillarData.description,
          url: pillarData.url,
          lastReviewed: pillarData.lastReviewed,
          reviewedBy: pillarData.reviewedBy,
          mainContentOfPage: {
            about: ['Energia', 'Fadiga', 'Vitalidade'],
            audience: 'Público geral interessado em saúde e bem-estar',
            medicalAudience: 'Pacientes buscando informações sobre energia e vitalidade'
          }
        }}
      />

      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Início</Link>
            <span>/</span>
            <span className="text-foreground">Pilares de Conteúdo</span>
            <span>/</span>
            <span className="text-foreground">Energia</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative w-full h-96 mb-12">
          <Image
            src={pillarData.image}
            alt={pillarData.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-green-900/90 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <Badge className="bg-yellow-500 text-white mb-4 text-lg px-4 py-2">
                <Target className="w-4 h-4 mr-2" />
                Pilar de Conteúdo
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {pillarData.title}
              </h1>
              <p className="text-xl mb-6 opacity-90">
                {pillarData.description}
              </p>
              <div className="flex items-center justify-center gap-6 text-sm">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {pillarData.reviewedBy}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Última atualização: {new Date(pillarData.lastReviewed).toLocaleDateString('pt-BR')}
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  {clusterContent.length} guias completos
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            {/* Medical Disclaimer */}
            <Card className="mb-8 border-yellow-200 bg-yellow-50">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-yellow-800">
                    <strong>Importante:</strong> Este conteúdo tem fins informativos e educacionais e não substitui consulta médica. 
                    Sempre consulte um profissional de saúde qualificado antes de iniciar qualquer tratamento ou suplementação.
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Overview Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Visão Geral: Energia e Vitalidade</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      O que é Energia
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Energia é a capacidade do corpo de realizar atividades físicas e mentais. 
                      Envolve processos bioquímicos complexos que convertem nutrientes em combustível celular.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      Importância
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Níveis adequados de energia são essenciais para produtividade, humor, 
                      sistema imunológico forte e qualidade de vida geral.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-orange-600" />
                      Sinais de Alerta
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Fadiga persistente, dificuldade de concentração, irritabilidade e 
                      necessidade excessiva de cafeína podem indicar problemas energéticos.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Cluster Content */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Guias Especializados (Cluster Content)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clusterContent.map((content, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={content.image}
                        alt={content.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary">
                          {content.category}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge 
                          variant={content.difficulty === 'Básico' ? 'default' : 'secondary'}
                          className={content.difficulty === 'Intermediário' ? 'bg-orange-500' : ''}
                        >
                          {content.difficulty}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">
                        <Link href={`/post/${content.slug}`} className="hover:text-primary transition-colors">
                          {content.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {content.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {content.readTime} min
                        </span>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/post/${content.slug}`}>
                            Ler Mais
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Perguntas Frequentes</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {faqData.map((faq, index) => (
                      <div key={index}>
                        <h3 className="text-lg font-semibold mb-2 flex items-start gap-2">
                          <span className="text-blue-600 mt-1">Q:</span>
                          {faq.question}
                        </h3>
                        <p className="text-muted-foreground flex items-start gap-2">
                          <span className="text-green-600 mt-1">A:</span>
                          {faq.answer}
                        </p>
                        {index < faqData.length - 1 && <Separator className="mt-4" />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Call to Action */}
            <section className="text-center bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">
                Pronto para Aumentar sua Energia?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Explore nossos guias completos e descubra estratégias baseadas em evidências 
                para transformar seus níveis de energia e qualidade de vida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Começar Agora
                </Button>
                <Button variant="outline" size="lg">
                  Falar com Especialista
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}