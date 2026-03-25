import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const handle = hostname.split('.')[0]

  if (
    handle === '121212' ||
    handle === 'www' ||
    hostname.includes('vercel.app') ||
    hostname.includes('localhost')
  ) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = `/reviewer/${handle}${url.pathname === '/' ? '' : url.pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|icon.svg|favicon.ico).*)'],
}
