import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import LoggedInWelcome from "@/components/loggedInWelcome";
import WelcomeModal from "@/components/welcomeModal";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session?.user?.email) {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: {
        id: true,
        email: true,
        name: true,
        title: true,
      },
    });

    return <LoggedInWelcome { ...user } />;
  } else {
    return <WelcomeModal />;
  }
}