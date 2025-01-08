import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const totalLogs = await prisma.log.count();
    const successfulLogins = await prisma.log.count({ where: { action: 'LOGIN_ATTEMPT', status: 'SUCCESS' } });
    const failedLogins = await prisma.log.count({ where: { action: 'LOGIN_ATTEMPT', status: 'FAILED' } });
    const accountLockouts = await prisma.log.count({ where: { action: 'LOGIN_ATTEMPT', status: 'FAILED', details: 'Account is locked' } });

    res.status(200).json({
      totalLogs,
      successfulLogins,
      failedLogins,
      accountLockouts,
    });
  } catch (error) {
    console.error('Error in /api/analytics:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}