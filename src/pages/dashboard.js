import Layout from '../components/Layout';

export default function Dashboard() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold">Добро пожаловать в Geopard Dashboard</h1>
      <div className="mt-4">
        <p>Вы можете управлять пользователями, бизнесами и чат-ботами здесь.</p>
      </div>
    </Layout>
  );
}
