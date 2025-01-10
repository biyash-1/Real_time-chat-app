import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

  // Correct way to get the token from cookies

  console.log("middlware run");
  
  const token = request.cookies.get('token')?.value;

  console.log("token in middleware", token);

  if (!token) {
    // Redirect to login if the token is not present
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  // Proceed to the next middleware or route handler
  return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/chatpage/:path*,/profile',
};
