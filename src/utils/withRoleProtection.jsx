// src/utils/withRoleProtection.jsx
import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'next/router';

const withRoleProtection = (WrappedComponent, allowedRoles) => {
  return (props) => {
    const { role } = useAuth();
    const router = useRouter();

    if (!role) return <p>Loading...</p>;

    if (!allowedRoles.includes(role)) {
      router.push('/unauthorized');
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withRoleProtection;
