import { NextRequest, NextResponse } from 'next/server';
import Cors from 'cors'

const allowedOrigins = process.env.NODE_ENV === 'production' 
  ? ['https://nextjs-todo-599kk2tn7-mohammedyunus2002.vercel.app']
  : ['http://localhost:3000', 'https://www.google.com', 'https://nextjs-todo-599kk2tn7-mohammedyunus2002.vercel.app'] 

const cors = Cors({
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  origin: '*' // Allow all origins
 })
 
export function middleware(request: NextRequest) {
  const origin = request.headers.get('origin')
  console.log(origin)

  if(origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad request",
      headers: {
        'Content-type': 'text/plain'
      }
    })
  }
  const token = request.cookies.get('token')?.value || '';
  
  const path = request.nextUrl.pathname;
  const isPublicPath = path === '/login' || path === '/signup' || path === '/';
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/todo', request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }

  // if(path === '/' && token || !token) {
  //   return NextResponse.redirect(new URL('/login', request.nextUrl));
  // }
}

export const config = {
  matcher: ['/', '/signup', '/login', '/todo'],
};


