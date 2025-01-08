import { useEffect } from 'react';
import { useRouter } from 'next/router';
import AuthForm from '@/components/AuthForm';
import { isAuthenticated } from '@/utils/auth';

export default function SignIn() {
  const router = useRouter();

  useEffect(() => {
    // Если пользователь уже аутентифицирован, перенаправляем на dashboard
    if (isAuthenticated()) {
      router.push('/dashboard');
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <AuthForm />
    </div>
  );
}