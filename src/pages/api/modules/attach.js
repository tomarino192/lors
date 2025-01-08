import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'PATCH': {
        const { moduleId, chatbotIds } = req.body;

        // Валидация входных данных
        if (!moduleId || !chatbotIds || !Array.isArray(chatbotIds)) {
          return res.status(400).json({ error: 'moduleId and chatbotIds (array) are required' });
        }

        // Проверка существования модуля
        const module = await prisma.module.findUnique({ where: { id: moduleId } });
        if (!module) {
          return res.status(404).json({ error: 'Module not found' });
        }

        // Проверка существования чат-ботов
        const validChatbots = await prisma.chatbot.findMany({
          where: {
            id: { in: chatbotIds }
          }
        });

        if (validChatbots.length !== chatbotIds.length) {
          return res.status(400).json({ error: 'One or more Chatbot IDs are invalid' });
        }

        // Прикрепление модуля к чат-ботам
        await prisma.module.update({
          where: { id: moduleId },
          data: {
            chatbots: {
              connect: chatbotIds.map((id) => ({ id }))
            }
          }
        });

        res.status(200).json({ message: 'Module successfully attached to chatbots' });
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
