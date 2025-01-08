import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        // Получение всех чат-ботов
        const chatbots = await prisma.chatbot.findMany();
        res.status(200).json(chatbots);
        break;
      }
      case 'POST': {
        // Создание нового чат-бота
        const { name, businessId } = req.body;
        if (!name || !businessId) {
          return res.status(400).json({ error: 'Missing name or businessId' });
        }
        const chatbot = await prisma.chatbot.create({
          data: { name, businessId },
        });
        res.status(201).json(chatbot);
        break;
      }
      default:
        res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error in /api/chatbots:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
