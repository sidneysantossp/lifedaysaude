import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Save, Eye, EyeOff } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Novo Usuário - Painel Admin - if',
  description: 'Criar novo usuário no painel administrativo',
}

export default function AdminNewUser() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/admin/users">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Novo Usuário</h1>
          <p className="text-muted-foreground">Criar novo usuário no sistema</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Informações Básicas */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações Básicas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input id="name" placeholder="Nome completo do usuário" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="email@exemplo.com" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="password">Senha *</Label>
                  <Input id="password" type="password" placeholder="Senha segura" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Função *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma função" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Administrador</SelectItem>
                      <SelectItem value="author">Autor</SelectItem>
                      <SelectItem value="editor">Editor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Biografia</Label>
                <Textarea 
                  id="bio" 
                  placeholder="Biografia do usuário..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Título Profissional</Label>
                <Input id="title" placeholder="Ex: Dra. em Nutrição" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="credentials">Credenciais</Label>
                  <Input id="credentials" placeholder="Ex: CRM 12345" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Experiência</Label>
                  <Input id="experience" placeholder="Ex: 10 anos" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialties">Especialidades</Label>
                <Input id="specialties" placeholder="Ex: Nutrição Esportiva, Saúde da Mulher" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" placeholder="https://exemplo.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Localização</Label>
                  <Input id="location" placeholder="Ex: São Paulo, SP" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="languages">Idiomas</Label>
                <Input id="languages" placeholder="Ex: Português, Inglês, Espanhol" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="socialLinks">Redes Sociais (JSON)</Label>
                <Textarea 
                  id="socialLinks" 
                  placeholder='{"instagram": "@usuario", "linkedin": "usuario"}'
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Configurações */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Configurações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="active">Usuário Ativo</Label>
                  <p className="text-sm text-muted-foreground">
                    Usuário pode acessar o sistema
                  </p>
                </div>
                <Switch id="active" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="featured">Usuário em Destaque</Label>
                  <p className="text-sm text-muted-foreground">
                    Exibir na página inicial
                  </p>
                </div>
                <Switch id="featured" />
              </div>
            </CardContent>
          </Card>

          {/* Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <div className="mx-auto h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-2xl font-bold">NU</span>
                </div>
                <div>
                  <h3 className="font-bold">Nome do Usuário</h3>
                  <p className="text-sm text-muted-foreground">email@exemplo.com</p>
                  <Badge className="mt-2">Autor</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-4">
        <Button variant="outline" asChild>
          <Link href="/admin/users">Cancelar</Link>
        </Button>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Criar Usuário
        </Button>
      </div>
    </div>
  )
}