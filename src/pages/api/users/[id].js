import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query; // id остается строкой

  if (!id) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  try {
    switch (req.method) {
      case 'GET': {
        // Получение пользователя по ID
        const user = await prisma.user.findUnique({ where: { id } });
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.status(200).json(user);
        break;
      }

      case 'PUT': {
        // Обновление пользователя
        const { email, role } = req.body;

        if (!email && !role) {
          return res.status(400).json({ error: 'Nothing to update' });
        }

        const updatedUser = await prisma.user.update({
          where: { id },
          data: { email, role },
        });

        res.status(200).json(updatedUser);
        break;
      }

      case 'DELETE': {
        // Удаление пользователя
        try {
          await prisma.user.delete({ where: { id } });
          res.status(204).end();
        } catch (deleteError) {
          if (deleteError.code === 'P2025') {
            return res.status(404).json({ error: 'User not found' });
          }
          throw deleteError;
        }
        break;
      }

      default:
        res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error in /api/users/[id]:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
