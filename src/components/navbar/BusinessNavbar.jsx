// src/components/navbar/BusinessNavbar.jsx
import Link from 'next/link';

const BusinessNavbar = () => (
  <nav>
    <Link href="/business/dashboard">Dashboard</Link>
    <Link href="/business/employees">Employees</Link>
    <Link href="/business/chatbots">Chatbots</Link>
  </nav>
);

export default BusinessNavbar;
