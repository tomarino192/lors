// src/components/navbar/EmployeeNavbar.jsx
import Link from 'next/link';

const EmployeeNavbar = () => (
  <nav>
    <Link href="/employee/dashboard">Dashboard</Link>
    <Link href="/employee/tasks">Tasks</Link>
  </nav>
);

export default EmployeeNavbar;
