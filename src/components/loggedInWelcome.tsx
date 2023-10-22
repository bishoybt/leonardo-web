'use client';

import React from "react";
import { Text, Button, Stack } from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoggedInWelcome(params?: { email?: string | null, name?: string | null, title?: string | null }) {
  const router = useRouter();

  return <Stack alignItems='center'>
    <Text mb="6">Welcome { params?.name }</Text>
    <Text mb="6">Title: { params?.title } </Text>
    <Button colorScheme="blue" onClick={() => router.push('/continents')}>List Continents</Button>
    <Button onClick={() => signOut()}>Sign Out</Button>
  </Stack>;
}