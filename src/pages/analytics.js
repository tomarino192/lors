import Layout from '../components/Layout';
import { useEffect, useState } from 'react';

export default function Analytics() {
  const [analytics, setAnalytics] = useState({});

  useEffect(() => {
    async function fetchAnalytics() {
      const res = await fetch('/api/analytics');
      const data = await res.json();
      setAnalytics(data);
    }

    fetchAnalytics();
  }, []);

  return (
    <Layout>
      <h1>Аналитика</h1>
      <ul>
        <li>Общее количество логов: {analytics.totalLogs}</li>
        <li>Успешные входы: {analytics.successfulLogins}</li>
        <li>Неудачные входы: {analytics.failedLogins}</li>
        <li>Заблокированные аккаунты: {analytics.accountLockouts}</li>
      </ul>
    </Layout>
  );
}
