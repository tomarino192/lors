import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        // Получение всех пользователей
        const users = await prisma.user.findMany();
        res.status(200).json(users);
        break;
      }
      case 'POST': {
        // Создание нового пользователя
        const { email, password, role } = req.body;
        if (!email || !password || !role) {
          return res.status(400).json({ error: 'Missing email, password, or role' });
        }
        const user = await prisma.user.create({
          data: { email, password, role },
        });
        res.status(201).json(user);
        break;
      }
      default:
        res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error in /api/users:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
