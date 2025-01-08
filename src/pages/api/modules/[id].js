import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'Module ID is required' });
  }

  try {
    switch (req.method) {
      case 'GET': {
        // Получение модуля по ID
        const module = await prisma.module.findUnique({ where: { id } });
        if (!module) {
          return res.status(404).json({ error: 'Module not found' });
        }
        res.status(200).json(module);
        break;
      }

      case 'DELETE': {
        // Удаление модуля (только для администраторов)
        if (req.user.role !== 'ADMIN') {
          return res.status(403).json({ error: 'Access Denied: Only admins can delete modules' });
        }

        await prisma.module.delete({ where: { id } });
        res.status(204).end();
        break;
      }

      default:
        res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error in /api/modules/[id]:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
