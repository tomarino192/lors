import { NextResponse } from 'next/server';

export function middleware(request) {
  const role = request.headers.get('x-role');
  const url = request.nextUrl.pathname;

  if (url.startsWith('/api/users') && role !== 'ADMIN') {
    return NextResponse.json({ error: 'Access Denied' }, { status: 403 });
  }

  if (url.startsWith('/api/business') && !['ADMIN', 'BO'].includes(role)) {
    return NextResponse.json({ error: 'Access Denied' }, { status: 403 });
  }  

  return NextResponse.next();
}
