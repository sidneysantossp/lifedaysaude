import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { params: Promise<{ params: string[] }> }
) {
  try {
    const resolvedParams = await params
    const [width, height] = resolvedParams.params
    const w = parseInt(width) || 400
    const h = parseInt(height) || 300

    // Validar dimensões
    const finalW = Math.min(w, 1920)
    const finalH = Math.min(h, 1080)

    // Criar SVG placeholder
    const svg = `
      <svg width="${finalW}" height="${finalH}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${finalW}" height="${finalH}" fill="#f3f4f6" />
        <text x="50%" y="50%" text="#6b728" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" text-anchor="middle">
          ${finalW}x${finalH}
        </text>
      </svg>
    `

    return new NextResponse(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=86400',
        'Content-Security-Policy': "default-src 'default-src 'none'; script-src 'unsafe-inline'",
        'Content-Disposition': 'inline',
        'Content-Type': 'image/svg+xml'
      },
      body: svg
    })
  } catch (error) {
      return NextResponse.json(
        { error: 'Error generating placeholder' },
        { status: 500 }
      )
    }
  }
}