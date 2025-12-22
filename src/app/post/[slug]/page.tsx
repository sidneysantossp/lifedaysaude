import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, Eye, Share2, Bookmark, ArrowLeft, MessageSquare, Heart, AlertCircle } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'

// Mock data - será substituído por dados do banco
const post = {
  id: '1',
  title: 'Como Aumentar sua Energia Naturalmente: Guia Completo',
  slug: 'aumentar-energia-naturalmente',
  excerpt: 'Descubra as melhores estratégias e suplementos para combater o cansaço e ter mais disposição no dia a dia.',
  content: `
# Como Aumentar sua Energia Naturalmente: Guia Completo

Sentir-se cansado e sem energia é um problema comum que afeta milhões de pessoas worldwide. A boa notícia é que existem muitas formas naturais de aumentar seus níveis de energia e melhorar sua qualidade de vida.

## Por que nos Sentimos Cansados?

Antes de resolvermos o problema, precisamos entender suas causas principais:

### 1. Nutrição Inadequada
- Falta de nutrientes essenciais
- Excesso de açúcar e processados
- Desidratação crônica

### 2. Estilo de Vida Sedentário
- Falta de atividade física
- Muito tempo sentado
- Rotina pouco estimulante

### 3. Estresse e Sono Ruim
- Privacão de sono
- Estresse crônico
- Ansiedade e preocupações

## Alimentos que Aumentam a Energia

### 🥜 Frutas Secas e Oleaginosas
Castanhas, amêndoas e nozes são ricas em:
- Magnésio: essencial para produção de energia
- Proteínas: mantêm saciedade e energia estável
- Gorduras saudáveis: combustível de longa duração

### 🍌 Frutas Ricas em Potássio
Banana, abacate e coco:
- Potássio: previne cãibras e fadiga
- Carboidratos naturais: energia rápida
- Vitaminas do complexo B: metabolismo energético

### 🥦 Vegetais Folhosos Escuros
Espinafre, couve e brócolis:
- Ferro: previne anemia e fadiga
- Ácido fólico: produção de células vermelhas
- Antioxidantes: combatem o estresse oxidativo

## Suplementos Energéticos Naturais

### Coenzima Q10
Essencial para produção de energia celular:
- Melhora função mitocondrial
- Antioxidante poderoso
- Apoia saúde cardiovascular

### Vitaminas do Complexo B
Fundamentais para metabolismo energético:
- B1 (Tiamina): conversão de carboidratos
- B2 (Riboflavina): produção de energia
- B6 (Piridoxina): metabolismo de proteínas
- B12 (Cobalamina): formação de células vermelhas

### Magnésio
Mineral essencial para energia:
- Participa de 300 reações bioquímicas
- Relaxa músculos e nervos
- Melhora qualidade do sono

## Hábitos que Aumentam a Energia

### 🌅 Exposição Solar Matinal
15-20 minutos de sol pela manhã:
- Regula ritmo circadiano
- Aumenta vitamina D
- Melhora humor e energia

### 💧 Hidratação Adequada
Água é fundamental para energia:
- Transporta nutrientes
- Remove toxinas
- Mantém função celular

### 🏃‍♀️ Exercício Regular
Atividade física aumenta energia:
- Melhora circulação
- Aumenta oxigenação
- Libera endorfinas

## Receitas Energéticas

### Su Verde Energizante
Ingredientes:
- 1 folha de couve
- 1/2 banana
- 1 colher de chia
- 200ml de água de coco
- Gengibre a gosto

### Mix de Oleaginosas
Ingredientes:
- 2 castanhas-do-pará
- 3 amêndoas
- 1 noz
- 2 damascos secos

## Ervas Comuns que Causam Fadiga

### Cafeína em Excesso
Embora dê energia inicial, pode causar:
- Crashes de energia
- Insônia
- Dependência

### Açúcar Refinado
Energia rápida seguida de fadiga:
- Picos de glicose
- Resistência à insulina
- Inflamação crônica

## Plano de Ação para Mais Energia

### Manhã (6:00 - 9:00)
- ☀️ Exposição solar
- 💧 Água com limão
- 🥣 Café da manhã nutritivo
- 🚶‍♀️ Caminhada leve

### Meio-dia (12:00 - 14:00)
- 🥗 Almoço balanceado
- 🚶‍♂️ Pós-almoço ativo
- 💤 Power nap (15-20 min)

### Tarde (15:00 - 18:00)
- 🍵 Chá verde
- 🥜 Lanche energético
- 🧘‍♀️ Alongamento

### Noite (19:00 - 22:00)
- 🍽️ Jantar leve
- 📱 Sem telas
- 📖 Leitura relaxante
- 😴 Sono reparador

## Quando Procurar Ajuda Médica

Consulte um médico se tiver:
- Fadiga persistente (> 2 semanas)
- Perda de peso inexplicada
- Falta de ar
- Palidez extrema
- Tonturas frequentes

## Conclusão

Aumentar sua energia naturalmente é possível através de uma abordagem integrada que inclui nutrição adequada, suplementação inteligente, exercícios regulares e bons hábitos de sono.

Lembre-se que a energia sustentável vem de escolhas consistentes, não de soluções rápidas. Comece pequeno, seja paciente e celebre cada vitória em sua jornada para mais vitalidade!

**Dica final:** A energia é como um músculo - quanto mais você cuida dela, mais forte ela fica.
  `,
  coverImage: '/artigo-energia-natural.jpg',
  author: { 
    name: 'Dra. Ana Silva', 
    bio: 'Médica nutróloga com especialização em saúde integrativa e bem-estar. Há mais de 15 anos ajudando pessoas a transformarem sua saúde através da nutrição e hábitos saudáveis.',
    avatar: '/api/placeholder/100/100'
  },
  category: { name: 'Energia', slug: 'energia', color: 'bg-yellow-500' },
  tags: ['energia', 'nutrição', 'suplementos', 'bem-estar', 'fadiga'],
  readTime: 15,
  viewCount: 2341,
  createdAt: '2024-01-15',
  updatedAt: '2024-01-15',
  metaTitle: 'Como Aumentar Energia Naturalmente - Guia Completo 2024',
  metaDescription: 'Descubra as melhores estratégias naturais para combater a fadiga e aumentar seus níveis de energia. Alimentos, suplementos e hábitos que funcionam.',
  metaKeywords: 'energia natural, combater fadiga, suplementos energéticos, nutrição para energia, bem-estar, vitalidade'
}

const relatedPosts = [
  {
    id: '2',
    title: 'Fortaleça sua Imunidade com Estes 10 Alimentos',
    slug: 'fortalecer-imunidade-alimentos',
    excerpt: 'Conheça os alimentos poderosos que vão fortalecer seu sistema imunológico e proteger sua saúde.',
    coverImage: '/artigo-imunidade-alimentos.jpg',
    readTime: 6,
    createdAt: '2024-01-14'
  },
  {
    id: '3',
    title: 'Sono de Qualidade: O Segredo para Mais Energia',
    slug: 'sono-qualidade-energia',
    excerpt: 'Descubra como melhorar seu sono e acordar com mais disposição todos os dias.',
    coverImage: '/artigo-sono-qualidade.jpg',
    readTime: 8,
    createdAt: '2024-01-13'
  }
]

const comments = [
  {
    id: '1',
    content: 'Excelente artigo! Já comecei a aplicar as dicas e sinto mais energia durante o dia. O mix de oleaginosas tem sido meu salva-vidas!',
    author: 'Maria Santos',
    email: 'maria@example.com',
    createdAt: '2024-01-16',
    approved: true
  },
  {
    id: '2',
    content: 'A Dra. Ana explica tudo de forma clara e objetiva. Estou tomando CoQ10 e realmente fez diferença na minha disposição.',
    author: 'Pedro Costa',
    email: 'pedro@example.com',
    createdAt: '2024-01-16',
    approved: true
  }
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.metaKeywords,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'pt_BR',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.coverImage],
      creator: '@saudebemestar',
    },
    alternates: {
      canonical: `/post/${post.slug}`,
    },
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Início</Link>
          <span>/</span>
          <Link href="/categoria/energia" className="hover:text-primary">Energia</Link>
          <span>/</span>
          <span className="text-foreground">{post.title}</span>
        </nav>
      </div>

      <article className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Medical Disclaimer */}
          <Card className="mb-6 border-yellow-200 bg-yellow-50">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-yellow-800">
                  <strong>Importante:</strong> Este artigo tem fins informativos e não substitui consulta médica. 
                  Sempre consulte um profissional de saúde antes de iniciar qualquer suplementação ou tratamento.
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge className={post.category.color}>
                {post.category.name}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {post.readTime} min de leitura
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              {post.excerpt}
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.createdAt).toLocaleDateString('pt-BR')}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {post.viewCount} views
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartilhar
                </Button>
                <Button variant="outline" size="sm">
                  <Bookmark className="w-4 h-4 mr-2" />
                  Salvar
                </Button>
              </div>
            </div>
          </header>

          {/* Cover Image */}
          <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                #{tag}
              </Badge>
            ))}
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
          </div>

          {/* Author Bio */}
          <Card className="mb-12">
            <CardHeader>
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                Sobre a Autora
              </h3>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{post.author.name}</h4>
                  <p className="text-muted-foreground mb-3">{post.author.bio}</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Seguir
                    </Button>
                    <Button variant="outline" size="sm">
                      Ver Artigos
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Share Section */}
          <Card className="mb-12">
            <CardHeader>
              <h3 className="text-xl font-bold">Compartilhe este Artigo</h3>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" className="flex-1 sm:flex-none">
                  Facebook
                </Button>
                <Button variant="outline" className="flex-1 sm:flex-none">
                  Twitter
                </Button>
                <Button variant="outline" className="flex-1 sm:flex-none">
                  LinkedIn
                </Button>
                <Button variant="outline" className="flex-1 sm:flex-none">
                  WhatsApp
                </Button>
                <Button variant="outline" className="flex-1 sm:flex-none">
                  Copiar Link
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Comments Section */}
          <Card className="mb-12">
            <CardHeader>
              <h3 className="text-xl font-bold flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Comentários ({comments.length})
              </h3>
            </CardHeader>
            <CardContent>
              {/* Comment Form */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4">Deixe um comentário</h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Seu nome" />
                    <Input type="email" placeholder="Seu email" />
                  </div>
                  <Textarea 
                    placeholder="Seu comentário..." 
                    rows={4}
                  />
                  <Button className="bg-green-600 hover:bg-green-700">Enviar Comentário</Button>
                </div>
              </div>

              <Separator className="my-8" />

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                        <span className="font-semibold text-sm">
                          {comment.author.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{comment.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(comment.createdAt).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground ml-13">
                      {comment.content}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Related Posts */}
          <section>
            <h3 className="text-2xl font-bold mb-6">Artigos Relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.coverImage}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">
                      <Link href={`/post/${relatedPost.slug}`} className="hover:text-primary transition-colors">
                        {relatedPost.title}
                      </Link>
                    </h4>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{new Date(relatedPost.createdAt).toLocaleDateString('pt-BR')}</span>
                      <span>{relatedPost.readTime} min leitura</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Back to Posts */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para Artigos
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
}