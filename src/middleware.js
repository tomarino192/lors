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

    if (!role) {
      return NextResponse.json({ error: 'Unauthorized - Role not found in token' }, { status: 401 });
    }

    // ✅ Проверка доступа для /api/admin
    if (url.startsWith('/api/admin')) {
      if (role !== 'ADMIN') {
        return NextResponse.json({ error: 'Access Denied: Admins only' }, { status: 403 });
      }
    }

    // ✅ Проверка доступа для /api/business
    if (url.startsWith('/api/business')) {
      if (!['ADMIN', 'BO'].includes(role)) {
        return NextResponse.json({ error: 'Access Denied: Admins or BO only' }, { status: 403 });
      }
    }

    // ✅ Проверка доступа для /api/modules
    if (url.startsWith('/api/modules')) {
      if (['POST', 'DELETE'].includes(req.method)) {
        // Добавление и удаление доступны только администраторам
        if (role !== 'ADMIN') {
          return NextResponse.json({ error: 'Access Denied: Only admins can add or delete modules' }, { status: 403 });
        }
      }
      // GET и другие методы доступны всем авторизованным пользователям
    }

    return NextResponse.next();
  } catch (error) {
    console.error('JWT Verification Error:', error.message);
    return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
  }
}

// ✅ Конфигурация маршрутов
export const config = {
  matcher: [
    '/api/admin/:path*',
    '/api/business/:path*',
    '/api/modules/:path*'
  ],
};
