import { useState } from 'react';
import { useRouter } from 'next/router';
import { apiRequest } from '@/utils/api';
import { setAuthToken, getUserRole } from '@/utils/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Card,
  CardHeader,
  CardContent,
  CardTitle
} from '@/components/ui/card';
import { Alert, AlertTitle } from '@/components/ui/alert';

const AuthForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Вызываем API аутентификации
      const { token } = await apiRequest('/api/auth/signin', 'POST', formData);
      
      // Сохраняем токен
      setAuthToken(token);

      // Определяем редирект на основе роли
      const role = getUserRole();
      const redirectPath = role === 'ADMIN' ? '/admin/dashboard' 
        : role === 'BO' ? '/business/dashboard'
        : '/dashboard';

      router.push(redirectPath);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Вход в систему
        </CardTitle>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertTitle>{error}</AlertTitle>
          </Alert>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ 
              ...prev, 
              email: e.target.value 
            }))}
            required
            className="w-full"
          />
          
          <Input
            type="password"
            placeholder="Пароль"
            value={formData.password}
            onChange={(e) => setFormData(prev => ({ 
              ...prev, 
              password: e.target.value 
            }))}
            required
            className="w-full"
          />
          
          <Button 
            type="submit" 
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Вход...' : 'Войти'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AuthForm;