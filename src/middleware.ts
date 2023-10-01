import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {

  // Get token from request
  const token = request.cookies.get('token')?.value || ''

  const path = request.nextUrl.pathname

  const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail'

  if(isPublicPath && token) {
    return NextResponse.redirect(new URL('/todo', request.nextUrl))
  }

  // Validate token
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }

}

export const config = {
  matcher: [
    '/',
    '/signup',
    '/login',
    '/todo'
  ] 
}