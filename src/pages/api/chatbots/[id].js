import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'Chatbot ID is required' });
  }

  try {
    switch (req.method) {
      case 'GET': {
        // Получение чат-бота по ID
        const chatbot = await prisma.chatbot.findUnique({
          where: { id },
          include: { modules: true },
        });

        if (!chatbot) {
          return res.status(404).json({ error: 'Chatbot not found' });
        }

        res.status(200).json(chatbot);
        break;
      }

      case 'PUT': {
        // Обновление данных чат-бота
        const { name } = req.body;

        if (!name) {
          return res.status(400).json({ error: 'Missing name' });
        }

        const updatedChatbot = await prisma.chatbot.update({
          where: { id },
          data: { name },
        });

        res.status(200).json(updatedChatbot);
        break;
      }

      case 'DELETE': {
        // Удаление чат-бота
        await prisma.chatbot.delete({ where: { id } });
        res.status(204).end();
        break;
      }

      default:
        res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error in /api/chatbots/[id]:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
