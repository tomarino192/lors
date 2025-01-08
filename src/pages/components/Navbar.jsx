import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex space-x-4 p-4 bg-gray-800 text-white">
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/users">Пользователи</Link>
      <Link href="/businesses">Бизнесы</Link>
      <Link href="/chatbots">Чат-боты</Link>
    </nav>
  );
}
