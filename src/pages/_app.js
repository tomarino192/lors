import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated, getUserRole } from '@/utils/auth';
import '@/styles/globals.css';

// Маршруты, доступные без аутентификации
const publicRoutes = ['/auth/signin', '/auth/signup'];

// Маршруты для разных ролей
const roleRoutes = {
  ADMIN: ['/admin', '/dashboard'],
  BO: ['/business', '/dashboard'],
  BE: ['/employee', '/dashboard']
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Проверка авторизации при каждом изменении маршрута
    const checkAuth = () => {
      // Разрешаем доступ к публичным маршрутам
      if (publicRoutes.includes(router.pathname)) {
        setIsLoading(false);
        return;
      }

      // Проверяем аутентификацию
      if (!isAuthenticated()) {
        router.push('/auth/signin');
        return;
      }

      // Проверяем права доступа на основе роли
      const userRole = getUserRole();
      const allowedRoutes = roleRoutes[userRole] || [];
      
      const hasAccess = allowedRoutes.some(route => 
        router.pathname.startsWith(route)
      );

      if (!hasAccess) {
        router.push('/dashboard');
      }

      setIsLoading(false);
    };

    checkAuth();
  }, [router.pathname]);

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
    </div>;
  }

  return <Component {...pageProps} />;
}

export default MyApp;