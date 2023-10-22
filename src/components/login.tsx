import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text
} from '@chakra-ui/react'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import { useState } from 'react';

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  async function validateAndSubmitLoginForm() {
    if (email === '' || password === '') {
      setErrorMessage('Please fill all required fields');
    } else {
      setErrorMessage('');

      const res = await signIn("credentials", {
        email: email,
        callbackUrl: '/continents',
        password: password,
        redirect: false,
      });

      if (res?.error) {
        setErrorMessage("Credintials Login Error!");
      } else {
        setErrorMessage("");

        if (res?.url) {
          return router.push(res.url);
        }
      }
    }
  }

  return <>
    { !!errorMessage &&
      <Text mb={8} color='red'>{errorMessage}</Text>
    }

    <FormControl isRequired>
      <FormLabel>Email</FormLabel>
      <Input type='email' placeholder='Email' onChange={event => setEmail(event.currentTarget.value)} />
    </FormControl>
    <FormControl mt={4} isRequired>
      <FormLabel>Password</FormLabel>
      <Input placeholder='Password' type='password' onChange={event => setPassword(event.currentTarget.value)} />
    </FormControl>
    <Button colorScheme='blue' mt={6} w='100%' onClick={validateAndSubmitLoginForm}>
        Login
    </Button>
  </>;
}