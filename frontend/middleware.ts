import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  console.log("Token in middleware:", token);

  const pathname = request.nextUrl.pathname;

  // Public paths that don't require authentication
  const publicPaths = ['/login', '/signup','/'];
  const isPublicPath = publicPaths.includes(pathname);

 
  if (isPublicPath) {
    return NextResponse.next();
  }

  // If no token is present, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  

  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ['/chatpage/:path*', '/login', '/signup','/profile'], // Match routes for middleware
};
