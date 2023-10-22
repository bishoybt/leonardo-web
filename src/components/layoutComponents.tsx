'use client';

import {
  Box,
  Container,
  Heading,
  Link,
  Stack,
  Flex,
  Text,
  useColorModeValue,
  chakra,
  Center,
} from '@chakra-ui/react'
import { FaLinkedin } from 'react-icons/fa'

export function LayoutContainer({ children }: { children: React.ReactNode }) {
  return <Flex
      className='layout-container'
      direction='column'>
      {children}
    </Flex>;
}

export function Header() {
  return <header>
    <Box margin={10}>
      <Heading>
        Browse World&apos;s Countries
      </Heading>
    </Box>
  </header>;
}

export function Footer() {
  return <><footer className='layout-footer'>
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ md: 'space-between' }}
            align={{ md: 'center' }}>
            <Text>A project to demonestrate
              using <Link href='https://nextjs.org/blog/next-13'>
                Next.JS 13
              </Link>, <Link href='https://next-auth.js.org/'>
                NextAuth
              </Link>, and <Link href='https://chakra-ui.com/'>
                Chakra UI
              </Link> to query <Link href='https://github.com/trevorblades/countries'>
                Trevor Blades Countries GraphQL APIs
              </Link>. By <Link href='https://www.linkedin.com/in/bishoybt/'>Bishoy Botros</Link>.
            </Text>
            <chakra.button
              bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
              rounded={'full'}
              w={8}
              h={8}
              cursor={'pointer'}
              as={'a'}
              href={'https://www.linkedin.com/in/bishoybt/'}
              display={'inline-flex'}
              alignItems={'center'}
              justifyContent={'center'}
              transition={'background 0.3s ease'}
              _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
              }}>
                <FaLinkedin />
            </chakra.button>
          </Container>
        </Box>
      </Box>
    </footer></>
}

export function Main({ children }: { children: React.ReactNode }) {
  return <main>
    <Center alignContent='center' m={30}>
      {children}
    </Center>
  </main>
}