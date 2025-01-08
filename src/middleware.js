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
    const { role, userId, businessId } = payload;
    const url = req.nextUrl.pathname;

    if (!role) {
      return NextResponse.json({ error: 'Unauthorized - Role not found in token' }, { status: 401 });
    }

    // ✅ Доступ для /api/admin
    if (url.startsWith('/api/admin')) {
      if (role !== 'ADMIN') {
        return NextResponse.json({ error: 'Access Denied: Admins only' }, { status: 403 });
      }
    }

    if (url.startsWith('/api/modules/attach') && req.method === 'PATCH') {
      // Доступен всем авторизованным пользователям
      return NextResponse.next();
    }

    // ✅ Доступ для /api/chatbots
    if (url.startsWith('/api/chatbots')) {
      if (['POST', 'PUT', 'DELETE'].includes(req.method)) {
        // Создание, обновление, удаление – ADMIN и BO
        if (!['ADMIN', 'BO'].includes(role)) {
          return NextResponse.json({ error: 'Access Denied: Only admins or BO can manage chatbots' }, { status: 403 });
        }
      }

      if (req.method === 'GET') {
        // ADMIN – видит всех
        if (role === 'ADMIN') {
          return NextResponse.next();
        }

        // BO – видит только чат-боты своего бизнеса
        if (role === 'BO') {
          req.headers.set('x-filter-business', businessId); // Передаем бизнес-ID для фильтрации в API
          return NextResponse.next();
        }

        // BE – видит чат-боты бизнеса, к которому он прикреплен
        if (role === 'BE') {
          req.headers.set('x-filter-employee-business', businessId); // Фильтр для BE
          return NextResponse.next();
        }

        // GUEST – нет доступа
        return NextResponse.json({ error: 'Access Denied: Guests cannot access chatbots' }, { status: 403 });
      }
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
    '/api/modules/:path*',
    '/api/chatbots/:path*'
  ],
};
