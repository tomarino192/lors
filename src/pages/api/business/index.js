import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        // Получение списка всех бизнесов
        const businesses = await prisma.business.findMany();
        res.status(200).json(businesses);
        break;
      }

      case 'POST': {
        // Создание нового бизнеса
        const { name, ownerId } = req.body;

        if (!name || !ownerId) {
          return res.status(400).json({ error: 'Missing name or ownerId' });
        }

        const newBusiness = await prisma.business.create({
          data: { name, ownerId },
        });

        res.status(201).json(newBusiness);
        break;
      }

      default:
        res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error in /api/business:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
