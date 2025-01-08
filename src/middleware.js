import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'supersecretkey'
);

export async function middleware(req) {
  const authHeader = req.headers.get('authorization');

  if (!authHeader) {
    return NextResponse.json({ error: 'Unauthorized - Missing Token' }, { status: 401 });
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized - Invalid Token Format' }, { status: 401 });
  }

  try {
    const { payload } = await jwtVerify(token, JWT_SECRET, {
      algorithms: ['HS256'],
    });
    const { role } = payload;
    const url = req.nextUrl.pathname;

    if (url.startsWith('/api/admin') && role !== 'ADMIN') {
      return NextResponse.json({ error: 'Access Denied' }, { status: 403 });
    }

    if (url.startsWith('/api/business') && !['ADMIN', 'BO'].includes(role)) {
      return NextResponse.json({ error: 'Access Denied' }, { status: 403 });
    }

    return NextResponse.next();
  } catch (error) {
    console.error('JWT Verification Error:', error.message);
    return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
  }
}

export const config = {
  matcher: ['/api/admin/:path*', '/api/business/:path*'],
};
