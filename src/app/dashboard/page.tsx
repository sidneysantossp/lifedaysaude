import { Metadata } from 'next'
import Link from 'next/link'
import { FileText } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@//components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  TrendingUp, 
  Users, 
  Eye, 
  AlertCircle, 
  CheckCircle, 
  Target, 
  Calendar,
  BarChart3,
  PieChart,
  Activity,
  Globe,
  Zap,
  Brain,
  Rocket,
  Settings
} from 'lucide-react'
import { ContentStrategyEngine, ViralContentStrategy } from '@/lib/content-strategy'
import { SEOMonitoringEngine, PredictiveSEOEngine } from '@/lib/seo-monitoring'

interface DashboardData {
  overview: {
    totalPosts: number
    totalViews: number
    avgPosition: number
    domainAuthority: number
    organicTraffic: number
  }
  rankings: Array<{
    keyword: string
    position: number
    url: string
    change: number
    volume: number
  }>
  traffic: {
    organic: number
    direct: number
    social: number
    referral: number
  }
  content: {
    published: number
    scheduled: number
    viral: number
    trending: number
  }
  alerts: Array<{
    type: 'error' | 'warning' | 'info'
    message: string
    metric: string
  }>
}

export const metadata: Metadata = {
  title: 'Dashboard SEO - Centro de Controle | Saúde & Bem-Estar',
  description: 'Painel completo de controle SEO com automação de conteúdo, monitoramento em tempo real e estratégias avançadas para dominar as buscas orgânicas.',
  keywords: ['dashboard SEO', 'monitoramento SEO', 'automação conteúdo', 'análise competitiva', 'estratégia SEO'],
  openGraph: {
    title: 'Dashboard SEO - Centro de Controle',
    description: 'Painel completo de controle SEO com automação de conteúdo e monitoramento em tempo real.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dashboard SEO - Centro de Controle',
    description: 'Painel completo de controle SEO com automação de conteúdo e monitoramento.',
  },
  alternates: {
    canonical: 'https://saude-bem-estar.com/dashboard',
  },
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [autoGenerate, setAutoGenerate] = useState(false)

  // Inicializar motores de automação
  useEffect(() => {
    const initializeDashboard = async () => {
      try {
        const contentEngine = new ContentStrategyEngine()
        const seoEngine = new SEOMonitoringEngine()
        const predictiveEngine = new PredictiveSEOEngine()

        // Gerar dados simulados para o dashboard
        const mockData: DashboardData = {
          overview: {
            totalPosts: 156,
            totalViews: 456789,
            avgPosition: 8.5,
            domainAuthority: 52,
            organicTraffic: 23456
          },
          rankings: [
            { keyword: 'energia natural', position: 3, url: '/post/aumentar-energia-naturalmente', change: -2, volume: 12000 },
            { keyword: 'aumentar imunidade', position: 5, url: '/post/fortalecer-imunidade-alimentos', change: 1, volume: 8900 },
            { keyword: 'longevidade saudável', position: 7, url: '/post/longevidade-habitos-saudaveis', change: 0, volume: 6700 },
            { keyword: 'sono qualidade', position: 12, url: '/post/sono-qualidade-saude', change: 3, volume: 4500 },
            { keyword: 'vitaminas essenciais', position: 8, url: '/post/vitaminas-essenciais', change: -1, volume: 5600 }
          ],
          traffic: {
            organic: 23456,
            direct: 8900,
            social: 3456,
            referral: 1234
          },
          content: {
            published: 156,
            scheduled: 24,
            viral: 12,
            trending: 8
          },
          alerts: [
            {
              type: 'warning',
              message: '3 palavras-chave caíram no ranking',
              metric: 'keyword_position'
            },
            {
              type: 'info',
              message: 'Novo conteúdo viral detectado',
              metric: 'viral_content'
            }
          ]
        }

        setDashboardData(mockData)
        setLoading(false)
      } catch (error) {
        console.error('Error initializing dashboard:', error)
        setLoading(false)
      }
    }

    initializeDashboard()
  }, [])

  // Gerar conteúdo automaticamente
  const handleAutoGenerate = async () => {
    setAutoGenerate(true)
    try {
      const contentEngine = new ContentStrategyEngine()
      
      // Gerar conteúdo otimizado
      const content = await contentEngine.generateOptimizedContent({
        topic: 'Dicas para aumentar energia naturalmente',
        category: 'Energia',
        targetAudience: 'Adultos 25-45 anos',
        keywords: ['energia', 'fadiga', 'vitalidade', 'bem-estar'],
        tone: 'educational',
        wordCount: 1500,
        includeFAQ: true,
        includeHowTo: true
      })

      console.log('Conteúdo gerado:', content)
      
      // Atualizar dashboard com novos dados
      if (dashboardData) {
        setDashboardData({
          ...dashboardData,
          content: {
            ...dashboardData.content,
            scheduled: dashboardData.content.scheduled + 1
          }
        })
      }
    } catch (error) {
      console.error('Error generating content:', error)
    } finally {
      setAutoGenerate(false)
    }
  }

  // Analisar tendências
  const handleAnalyzeTrends = async () => {
    try {
      const contentEngine = new ContentStrategyEngine()
      const trends = await contentEngine.identifyTrendingTopics()
      
      console.log('Tendências identificadas:', trends)
      
      // Atualizar dashboard
      if (dashboardData) {
        setDashboardData({
          ...dashboardData,
          content: {
            ...dashboardData.content,
            trending: trends.length
          }
        })
      }
    } catch (error) {
      console.error('Error analyzing trends:', error)
    }
  }

  // Otimizar conteúdo preditivamente
  const handleOptimizeContent = async () => {
    try {
      const predictiveEngine = new PredictiveSEOEngine()
      
      const optimization = await predictiveEngine.optimizeContent(
        'Conteúdo sobre energia e bem-estar',
        'energia natural'
      )
      
      console.log('Otimização concluída:', optimization)
    } catch (error) {
      console.error('Error optimizing content:', error)
    }
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Rocket className="w-8 h-8 text-blue-600" />
              Dashboard SEO
            </h1>
            <p className="text-muted-foreground">
              Centro de controle estratégico para dominar as buscas orgânicas
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button 
              onClick={handleAutoGenerate}
              disabled={autoGenerate}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {autoGenerate ? (
                <>
                  <Brain className="w-4 h-4 mr-2 animate-spin" />
                  Gerando...
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 mr-2" />
                  Gerar Conteúdo IA
                </>
              )}
            </Button>
            <Button variant="outline" onClick={handleAnalyzeTrends}>
              <TrendingUp className="w-4 h-4 mr-2" />
              Analisar Tendências
            </Button>
            <Button variant="outline" onClick={handleOptimizeContent}>
              <Target className="w-4 h-4 mr-2" />
              Otimizar Conteúdo
            </Button>
          </div>
        </div>

        {/* Alertas */}
        {dashboardData?.alerts && dashboardData.alerts.length > 0 && (
          <div className="mb-6 space-y-2">
            {dashboardData.alerts.map((alert, index) => (
              <Card 
                key={index} 
                className={`border-l-4 ${
                  alert.type === 'error' ? 'border-red-500 bg-red-50' : 
                  alert.type === 'warning' ? 'border-yellow-500 bg-yellow-50' : 
                  'border-blue-500 bg-blue-50'
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    {alert.type === 'error' && <AlertCircle className="w-5 h-5 text-red-600" />}
                    {alert.type === 'warning' && <AlertCircle className="w-5 h-5 text-yellow-600" />}
                    {alert.type === 'info' && <CheckCircle className="w-5 h-5 text-blue-600" />}
                    <span className="font-medium">{alert.message}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Visão Geral
              </TabsTrigger>
              <TabsTrigger value="rankings" className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                Rankings
              </TabsTrigger>
              <TabsTrigger value="traffic" className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                Tráfego
              </TabsTrigger>
              <TabsTrigger value="content" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Conteúdo
              </TabsTrigger>
              <TabsTrigger value="automation" className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Automação
              </TabsTrigger>
            </TabsList>

            <TabsContent className="space-y-6">
              {/* Visão Geral */}
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle className="text-lg font-semibold">Posts Publicados</CardTitle>
                      <Badge className="bg-green-500">{dashboardData?.overview.totalPosts}</Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-600">{dashboardData?.overview.totalPosts}</div>
                      <p className="text-sm text-muted-foreground">Total de artigos</p>
                      <div className="mt-2 flex items-center gap-2 text-sm">
                        <span className="text-green-600">+12 este mês</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-blue-600">+156 total</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle className="text-lg font-semibold">Visualizações</CardTitle>
                      <Badge className="bg-blue-500">{dashboardData?.overview.totalViews.toLocaleString()}</Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-blue-600">{dashboardData?.overview.totalViews.toLocaleString()}</div>
                      <p className="text-sm text-muted-foreground">Visualizações totais</p>
                      <div className="mt-2 flex items-center gap-2 text-sm">
                        <span className="text-green-600">+23.5%</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-blue-600">456K total</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle className="text-lg font-semibold">Posição Média</CardTitle>
                      <Badge className="bg-purple-500">{dashboardData?.overview.avgPosition}</Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-purple-600">{dashboardData?.overview.avgPosition}</div>
                      <p className="text-sm text-muted-foreground">Posição média</p>
                      <div className="mt-2 flex items-center gap-2 text-sm">
                        <span className="text-green-600">-2.3</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-blue-600">8.5</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle className="text-lg font-semibold">Autoridade</CardTitle>
                      <Badge className="bg-orange-500">{dashboardData?.overview.domainAuthority}</Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-orange-600">{dashboardData?.overview.domainAuthority}</div>
                      <div className="text-sm text-muted-foreground">Domain Authority</div>
                      <div className="mt-2 flex items-center gap-2 text-sm">
                        <span className="text-green-600">+5</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-blue-600">52</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Tráfego Detalhado */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold mb-4">Análise de Tráfego</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{dashboardData?.traffic.organic.toLocaleString()}</div>
                        <p className="text-sm text-muted-foreground">Orgânico</p>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${(100 / 100) * 70}%` }}
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{dashboardData?.traffic.direct.toLocaleString()}</div>
                        <p className="text-sm text-muted-foreground">Direto</p>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${(100 / 100) * 30}%` }}
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">{dashboardData?.traffic.social.toLocaleString()}</div>
                        <p className="text-sm text-muted-foreground">Social</p>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div 
                            className="bg-purple-500 h-2 rounded-full"
                            style={{ width: `${(100 / 100) * 15}% }}
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">{dashboardData?.traffic.referral.toLocaleString()}</div>
                        <p className="text-sm text-muted-foreground">Referral</p>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div 
                            className="bg-orange-500 h-2 rounded-full"
                            style={{ width: `${(100 / 100) * 5}% }}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Rankings */}
              {activeTab === 'rankings' && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">Rankings de Palavras-Chave</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {dashboardData?.rankings.map((ranking, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-medium">{ranking.keyword}</h4>
                            <p className="text-sm text-muted-foreground">{ranking.url}</p>
                            <div className="flex items-center gap-2 text-sm">
                              <span className="text-blue-600">#{ranking.position}</span>
                              <span className="text-gray-500">•</span>
                              <span className="text-green-600">{ranking.volume.toLocaleString()}/mês</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {ranking.change > 0 ? (
                              <Badge variant="secondary" className="bg-green-100 text-green-800">
                                <TrendingUp className="w-4 h-4" />
                                +{ranking.change}
                              </Badge>
                            ) : ranking.change < 0 ? (
                              <Badge variant="secondary" className="bg-red-100 text-red-800">
                                <TrendingUp className="w-4 h-4 rotate-180" />
                                {ranking.change}
                              </Badge>
                            ) : (
                              <Badge variant="secondary">
                                <span className="w-4 h-4">-</span>
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Conteúdo */}
              {activeTab === 'content' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">Estatísticas de Conteúdo</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Publicados</span>
                          <Badge>{dashboardData?.content.published}</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Agendados</span>
                          <Badge variant="secondary">{dashboardData?.content.scheduled}</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Virais</span>
                          <Badge className="bg-yellow-500 text-white">{dashboardData?.content.viral}</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Trending</span>
                          <Badge className="bg-purple-500 text-white">{dashboardData?.content.trending}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">Calendário de Conteúdo</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Esta semana</span>
                          <Badge>5 posts</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Próxima semana</span>
                          <Badge>8 posts</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Mês atual</span>
                          <Badge>24 posts</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Automação */}
              {activeTab === 'automation' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">Automação de Conteúdo</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span>Status</span>
                          <Badge className={autoGenerate ? 'bg-yellow-500 text-white' : 'bg-green-500 text-white'}>
                            {autoGenerate ? 'Gerando...' : 'Pronto'}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Última geração</span>
                            <span className="text-sm text-muted-foreground">Há 2 minutos</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Conteúdo gerado</span>
                            <span className="text-sm text-muted-foreground">1.500 palavras</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Score SEO</span>
                            <Badge className="bg-green-500 text-white">85/100</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">Configurações de Automação</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span>Geração automática</span>
                          <Button variant="outline" size="sm">
                            <Settings className="w-4 h-4 mr-2" />
                            Configurar
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Frequência</span>
                          <Select defaultValue="daily">
                            <SelectTrigger className="w-32">
                              <SelectValue placeholder="Frequência" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="daily">Diária</SelectItem>
                              <SelectItem value="weekly">Semanal</SelectItem>
                              <SelectItem value="monthly">Mensal</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Categorias</span>
                          <Button variant="outline" size="sm">
                            <Target className="w-4 h-4 mr-2" />
                            Selecionar
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Tipo de conteúdo</span>
                          <Select defaultValue="mixed">
                            <SelectTrigger className="w-32">
                              <SelectValue placeholder="Tipo" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mixed">Misto</SelectItem>
                              <SelectItem value="educational">Educativo</SelectItem>
                              <SelectItem value="viral">Viral</SelectItem>
                              <SelectItem value="seasonal">Sazonal</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Stats Bottom Bar */}
          <div className="mt-8 p-4 bg-muted/50 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">+300%</div>
                <p className="text-sm text-muted-foreground">Crescimento orgânico</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">Top 3</div>
                <p className="text-sm text-muted-foreground">Ranking médio</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">50+</div>
                <p className="text-sm text-featured">Featured snippets</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">95%</div>
                <p className="text-sm text-featured">E-E-A-T Score</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}