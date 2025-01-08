import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const businesses = await prisma.business.findMany();
      res.status(200).json(businesses);
    } else if (req.method === 'POST') {
      const { name, ownerId } = req.body;
      const business = await prisma.business.create({
        data: { name, ownerId },
      });
      res.status(201).json(business);
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Database Error:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}