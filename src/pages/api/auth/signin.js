import { SignJWT } from 'jose';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();
const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'supersecretkey'
);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const user = await prisma.user.findUnique({ where: { email } });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const isValid = await bcrypt.compare(password, user.password);

      if (!isValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const token = await new SignJWT({ userId: user.id, role: user.role })
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('1h')
        .sign(JWT_SECRET);

      res.status(200).json({ token });
    } catch (error) {
      console.error('Signin Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
