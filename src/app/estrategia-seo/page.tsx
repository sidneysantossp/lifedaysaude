import { Metadata } from 'next'
import Link from 'next/link'
import { Globe, Users, Award, TrendingUp, Shield, Target, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Estratégia SEO Completa - Autoridade em Saúde | Saúde & Bem-Estar',
  description: 'Nossa estratégia completa de SEO E-E-A-T para建立 autoridade máxima em saúde. Schema estruturado, Pillar-Cluster, busca por voz, zero clique e otimização para IA.',
  keywords: ['SEO E-E-A-T', 'autoridade médica', 'schema estruturado', 'busca por voz', 'SEO saúde', 'busca generativa', 'Pillar Cluster'],
  openGraph: {
    title: 'Estratégia SEO Completa - Autoridade em Saúde',
    description: 'Estratégia avançada de SEO para建立 autoridade máxima em saúde e bem-estar.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estratégia SEO Completa',
    description: 'Estratégia avançada de SEO para建立 autoridade em saúde.',
  },
  alternates: {
    canonical: 'https://saude-bem-estar.com/estrategia-seo',
  },
}

export default function SEOStrategyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-96 bg-gradient-to-r from-blue-600 to-green-600 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Estratégia SEO Completa para Autoridade em Saúde
          </h1>
          <p className="text-xl mb-6 opacity-90">
            Implementação avançada de E-E-A-T, Schema Estruturado, Pillar-Cluster e otimização para IA generativa
          </p>
          <div className="flex items-center justify-center gap-4">
            <Badge className="bg-yellow-500 text-white text-lg px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              E-E-A-T Máximo
            </Badge>
            <Badge className="bg-purple-500 text-white text-lg px-4 py-2">
              <Target className="w-4 h-4 mr-2" />
              Autoridade Médica
            </Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* E-E-A-T Framework */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Award className="w-8 h-8 text-yellow-500" />
              Framework E-E-A-T Implementado
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <h3 className="text-xl font-bold text-green-700">Experiência</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Autores com 15+ anos de experiência</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Casos clínicos reais documentados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Experiência prática comprovada</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <h3 className="text-xl font-bold text-blue-700">Expertise</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Credenciais médicas verificadas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Especializações reconhecidas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Conhecimento especializado profundo</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <h3 className="text-xl font-bold text-purple-700">Autoridade</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Backlinks de autoridades médicas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Menciones em publicações científicas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Reconhecimento na área</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <h3 className="text-xl font-bold text-red-700">Confiança</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Transparência total</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Fontes verificáveis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Informações atualizadas</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Schema Estruturado */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Globe className="w-8 h-8 text-blue-500" />
              Schema Estruturado Avançado
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold">Schemas Implementados</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      'MedicalArticle - Para artigos médicos',
                      'MedicalOrganization - Para autoridade',
                      'FAQPage - Para zero clique',
                      'MedicalWebPage - Para páginas médicas',
                      'HowTo - Para instruções passo a passo',
                      'Person - Para perfis de autores',
                      'BreadcrumbList - Para navegação',
                      'WebSite - Para estrutura geral'
                    ].map((schema, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">{schema}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold">Benefícios para SEO</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      'Rich snippets no Google',
                      'Featured snippets otimizados',
                      'Knowledge graph enhancement',
                      'Voice search optimization',
                      'AI search compatibility',
                      'Zero-click answers',
                      'Local SEO improvement'
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Pillar-Cluster Strategy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Target className="w-8 h-8 text-purple-500" />
              Estratégia Pillar-Cluster
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <h3 className="text-xl font-semibold">Estrutura de Conteúdo</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-semibold text-purple-900 mb-2">Pillar Pages (8)</h4>
                      <p className="text-sm text-purple-700">Guias completos para cada categoria principal (Energia, Imunidade, etc.)</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-blue-900 mb-2">Cluster Content (50+)</h4>
                      <p className="text-sm text-blue-700">Artigos específicos que linkam para os pillar pages</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-green-900 mb-2">Supporting Content (100+)</h4>
                      <p className="text-sm text-green-700">Posts de blog, FAQs, guias rápidos</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold">Resultados Esperados</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Autoridade tópica</span>
                      <Badge className="bg-green-500">Alta</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Ranking de palavras-chave</span>
                      <Badge className="bg-green-500">Top 3</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Tráfego orgânico</span>
                      <Badge className="bg-blue-500">+300%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Tempo no site</span>
                      <Badge className="bg-purple-500">+45%</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Voice Search & Zero Click */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Users className="w-8 h-8 text-green-500" />
              Busca por Voz e Zero Clique
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold">Otimização Voice Search</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      'Perguntas em linguagem natural',
                      'Respostas diretas e concisas',
                      'Schema FAQ implementado',
                      'Como/Quando/Onde/Onde',
                      'Instruções passo a passo',
                      'Comandos de voz otimizados'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold">Zero Click Optimization</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      'Featured snippets targeting',
                      'People Also Optimization',
                      'Knowledge Graph claims',
                      'Local pack presence',
                      'Quick answers structure',
                      'Immediate value delivery'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* AI & Generative Search */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-8 h-8 text-orange-500" />
              Busca Generativa AI e GPTs
            </h2>
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Estratégia para IA Generativa</h3>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Content Optimization</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Structured data completo</li>
                      <li>• Entity recognition</li>
                      <li>• Topic authority</li>
                      <li>• Fresh content signals</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">AI-Friendly Format</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Clear hierarchy</li>
                      <li>• Actionable insights</li>
                      <li>• Source attribution</li>
                      <li>• Expert quotes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Technical Signals</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• E-E-A-T verification</li>
                      <li>• Medical accuracy</li>
                      <li>• Recent updates</li>
                      <li>• User engagement</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Off-Page Strategy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <ExternalLink className="w-8 h-8 text-red-500" />
              Estratégia Off-Page e Autoridade
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold">Link Building Estratégico</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      'Guest posts em portais médicos',
                      'Parcerias com instituições de saúde',
                      'Menciones em pesquisas acadêmicas',
                      'Directory submissions qualificadas',
                      'Resource page building',
                      'Broken link building'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold">Signals de Autoridade</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      'E-E-A-T documentation',
                      'Author bios completas',
                      'Medical disclaimers',
                      'Source citations',
                      'Expert verification',
                      'Professional credentials'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Implemente Esta Estratégia no Seu Projeto
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Transforme seu blog em uma autoridade máxima em saúde com nossa estratégia completa de SEO E-E-A-T.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <ArrowRight className="w-4 h-4 mr-2" />
                Implementar Agora
              </Button>
              <Button variant="outline" size="lg">
                <ExternalLink className="w-4 h-4 mr-2" />
                Ver Exemplo Prático
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}