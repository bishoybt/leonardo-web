import { hashPassword } from '@/lib/crypto';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

type ResponseData = {
  message: string
}

type RequestData = {
    name: string,
    email: string,
    password: string,
    title : string | undefined,
}

export async function POST(
    req: Request,
  ) {
    const requestData: RequestData = await req.json();
   
    if (requestData?.password === undefined || requestData.password.length < 6) {
      return new Response("Password length should be more than 6 characters", { status: 400 });
    }
    try {
      const user = await prisma.user.create({
        data: { ...requestData, password: hashPassword(requestData.password) },
      });
      return new Response(`User with ID ${user.id} created successfully`, { status: 201 });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        return new Response(e.message, { status: 400 });
      } else {
        return new Response("Internal Error", { status: 500 });
      }
    }
  }