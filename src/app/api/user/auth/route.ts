import { hashPassword } from '@/lib/crypto';
import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export async function POST(
    req: Request,
  ) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return new Response("invalid inputs", { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: email, password: hashPassword(password) },
      select: {
        id: true,
        email: true,
        name: true,
        title: true,
      },
    });

    if (user) {
      return new Response(JSON.stringify(user), { status: 200 });
    } else {
      return new Response("invalid credentials", { status: 401 });
    }
  } catch (e) {
    return new Response("Internal Error", { status: 500 });
  }
}