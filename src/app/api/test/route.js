import prisma from "@/lib/prisma";





export async function GET() {
  const users = await prisma.User.findMany();
  return Response.json(users);
}