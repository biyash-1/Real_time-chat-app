import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const publicPath = ["/login", "/signup"].includes(request.nextUrl.pathname);

  console.log("Token:", token);

  // If no token, redirect to login
  if (!token && !publicPath) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If token exists and the user is on a public path, redirect to chatpage
  if (token && publicPath) {
    return NextResponse.redirect(new URL('/chatpage', request.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ['/chatpage/:path*', '/login', '/signup'], // Match protected and public routes
};
