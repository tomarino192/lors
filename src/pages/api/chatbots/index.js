import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        const role = req.headers['x-role'];
        const businessId = req.headers['x-filter-business'];
        const employeeBusinessId = req.headers['x-filter-employee-business'];

        let chatbots;

        if (role === 'ADMIN') {
          // ADMIN видит все чат-боты
          chatbots = await prisma.chatbot.findMany({
            include: { modules: true },
          });
        } else if (role === 'BO' && businessId) {
          // BO видит только свои чат-боты
          chatbots = await prisma.chatbot.findMany({
            where: { businessId },
            include: { modules: true },
          });
        } else if (role === 'BE' && employeeBusinessId) {
          // BE видит чат-боты своего бизнеса
          chatbots = await prisma.chatbot.findMany({
            where: { businessId: employeeBusinessId },
            include: { modules: true },
          });
        } else {
          return res.status(403).json({ error: 'Access Denied' });
        }

        res.status(200).json(chatbots);
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
