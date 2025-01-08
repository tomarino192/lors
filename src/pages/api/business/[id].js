import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'Business ID is required' });
  }

  try {
    switch (req.method) {
      case 'GET': {
        // Получение бизнеса по ID
        const business = await prisma.business.findUnique({ where: { id } });
        if (!business) {
          return res.status(404).json({ error: 'Business not found' });
        }
        res.status(200).json(business);
        break;
      }

      case 'PUT': {
        // Обновление бизнеса
        const { name, ownerId } = req.body;

        if (!name && !ownerId) {
          return res.status(400).json({ error: 'Nothing to update' });
        }

        const updatedBusiness = await prisma.business.update({
          where: { id },
          data: { name, ownerId },
        });

        res.status(200).json(updatedBusiness);
        break;
      }

      case 'DELETE': {
        // Удаление бизнеса
        try {
          await prisma.business.delete({ where: { id } });
          res.status(204).end();
        } catch (deleteError) {
          if (deleteError.code === 'P2025') {
            return res.status(404).json({ error: 'Business not found' });
          }
          throw deleteError;
        }
        break;
      }

      default:
        res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error in /api/business/[id]:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
