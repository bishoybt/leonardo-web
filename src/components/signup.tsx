import {
  Button,
  FormControl,
  Text,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation'

export default function SignUpForm() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [title, setTitle] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  async function login() {
    const res = await signIn("credentials", {
        email: email,
        callbackUrl: '/continents',
        password: password,
        redirect: false,
      });

      if (res?.error) {
        setErrorMessage("Credintials Login Error!");
      } else {
        if (res?.url) {
          return router.push(res.url);
        }
      }
  }

  async function validateAndSubmitSignUpForm() {
    if (email === '' || password === '' || name === '' || passwordConfirmation === '' || title === '') {
      setErrorMessage('Please fill all required fields');
    } else if (password !== passwordConfirmation) {
      setErrorMessage('Password confirmation must match');
    } else {
      console.log(process.env);
      const res = await fetch('/api/user/create', {
        method: "POST",
        body: JSON.stringify({ email, password, name, title }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res?.ok) {
        setErrorMessage('');
        await login();
      } else {
        console.log(res);
        setErrorMessage((await res?.text()) ?? "Unknown Error registering user");
      }
    }
  }

  return <>
    { !!errorMessage &&
      <Text mb={8} color='red'>{errorMessage}</Text>
    }

    <FormControl isRequired>
      <FormLabel>Full Name</FormLabel>
      <Input placeholder='Full Name' onChange={event => setName(event.currentTarget.value)} />
    </FormControl>
    <FormControl mt={4} isRequired>
      <FormLabel>Email</FormLabel>
      <Input type='email' placeholder='Email' onChange={event => setEmail(event.currentTarget.value)} />
    </FormControl>
    <FormControl mt={4} isRequired>
      <FormLabel>Password</FormLabel>
      <Input placeholder='Password' type='password' onChange={event => setPassword(event.currentTarget.value)} />
    </FormControl>
    <FormControl mt={4} isRequired>
      <FormLabel>Confirm Password</FormLabel>
      <Input placeholder='Confirm Password' type='password' onChange={event => setPasswordConfirmation(event.currentTarget.value)} />
    </FormControl>
    <FormControl mt={4} isRequired>
      <FormLabel>Job Title</FormLabel>
      <Input placeholder='Job Title' onChange={event => setTitle(event.currentTarget.value)} />
    </FormControl>
    <Button colorScheme='blue' mt={6} w='100%' onClick={validateAndSubmitSignUpForm}>
      Sign Up
    </Button>
  </>;
}