import { NextResponse, NextRequest } from 'next/server';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|icons|img|favicon.ico|/).*)'],
};

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  console.log("path", pathname);
  const token = req.cookies.get('token')?.value;
  console.log("token", token);

  if (token && pathname === '/') {
    return NextResponse.redirect(`${req.nextUrl.origin}/chat/`);
  } else if (!token && pathname === '/login') {
    return NextResponse.next();
  } else if (token  && pathname === '/login') {
    return NextResponse.redirect(`${req.nextUrl.origin}/chat/`);
  } else if(!token && pathname === '/') {
    return NextResponse.redirect(`${req.nextUrl.origin}/login/`);
  }
}