import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value || '';
  const path = request.nextUrl.pathname;
  const isPublicPath = path === '/login' || path === '/signup' || path === '/';

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/todo', request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }

}

export const config = {
  matcher: ['/', '/signup', '/login', '/todo'],
};


