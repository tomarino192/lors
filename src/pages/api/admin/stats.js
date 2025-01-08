import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const userCount = await prisma.user.count();
      const businessCount = await prisma.business.count();
      const chatbotCount = await prisma.chatbot.count();

      res.status(200).json({
        users: userCount,
        businesses: businessCount,
        chatbots: chatbotCount,
      });
    } catch (error) {
      console.error('Admin Stats Error:', error);
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

export const config = {
   runtime: 'nodejs'
}