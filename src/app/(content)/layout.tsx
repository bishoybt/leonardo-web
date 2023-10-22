
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Text } from "@chakra-ui/react";

export default async function PrivatePagesLayout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession(authOptions);

    if (session != null) {
        return <> {children} </>;
    } else {
        return <Text>Unauthenticated</Text>;
    }
}