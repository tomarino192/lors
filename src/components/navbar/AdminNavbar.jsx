// src/components/navbar/AdminNavbar.jsx
import Link from 'next/link';

const AdminNavbar = () => (
  <nav>
    <Link href="/admin/dashboard">Dashboard</Link>
    <Link href="/admin/users">Users</Link>
    <Link href="/admin/logs">Logs</Link>
  </nav>
);

export default AdminNavbar;
