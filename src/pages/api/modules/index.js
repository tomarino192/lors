import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        // Получение списка всех модулей
        const modules = await prisma.module.findMany();
        res.status(200).json(modules);
        break;
      }

      case 'POST': {
        // Создание нового модуля
        const { name, config } = req.body;

        if (!name || !config) {
          return res.status(400).json({ error: 'Missing name or config' });
        }

        const newModule = await prisma.module.create({
          data: { name, config },
        });

        res.status(201).json(newModule);
        break;
      }

      default:
        res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error in /api/modules:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
