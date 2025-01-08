import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'PATCH': {
        const { moduleId, botIds } = req.body;

        if (!moduleId || !botIds || !Array.isArray(botIds)) {
          return res.status(400).json({ error: 'moduleId and botIds (array) are required' });
        }

        // Проверка, существует ли модуль
        const module = await prisma.module.findUnique({ where: { id: moduleId } });
        if (!module) {
          return res.status(404).json({ error: 'Module not found' });
        }

        // Прикрепление модуля к чат-ботам
        const updatedBots = await prisma.bot.updateMany({
          where: { id: { in: botIds } },
          data: { modules: { connect: { id: moduleId } } },
        });

        res.status(200).json({ message: 'Module attached to bots successfully', updatedBots });
        break;
      }

      default:
        res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error in /api/modules/attach:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
