// src/hooks/useAuth.js
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

export const useAuth = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setRole(decoded.role);
      } catch (err) {
        console.error('Failed to decode token:', err);
      }
    }
  }, []);

  return { role };
};
