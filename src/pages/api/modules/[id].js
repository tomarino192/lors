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

      case 'PUT': {
        // Обновление модуля
        const { name, config } = req.body;

        if (!name && !config) {
          return res.status(400).json({ error: 'Nothing to update' });
        }

        const updatedModule = await prisma.module.update({
          where: { id },
          data: { name, config },
        });

        res.status(200).json(updatedModule);
        break;
      }

      case 'DELETE': {
        // Удаление модуля
        try {
          await prisma.module.delete({ where: { id } });
          res.status(204).end();
        } catch (deleteError) {
          if (deleteError.code === 'P2025') {
            return res.status(404).json({ error: 'Module not found' });
          }
          throw deleteError;
        }
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
