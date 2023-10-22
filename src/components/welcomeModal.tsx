'use client';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  TabPanel,
  TabPanels,
  Tabs,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react';
import LoginForm from "./login";
import SignUpForm from "./signup";

export default function WelcomeModal() {
  const { isOpen, onOpen, onClose } = useDisclosure({ isOpen: true });
  const [currentTab, setCurrentTab] = useState(0);

  return <>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>Welcome to World's Countries</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Tabs index={currentTab}>
            <TabPanels>
              <TabPanel>
                <Stack align={'center'}>
                  <Text>An app to browse continents and countries around the globe.</Text>  
                  <Button colorScheme='blue' mt={6} w='80%' onClick={() => setCurrentTab(1)}>
                    Existing User? Login!
                  </Button>
                  <Button colorScheme='red' mt={4} w='80%' onClick={() => setCurrentTab(2)}>
                    New User? Sign Up Here!
                  </Button>
                </Stack>
              </TabPanel>
              <TabPanel>
                <LoginForm />
                <Button colorScheme='red' mt={6} w='100%' onClick={() => setCurrentTab(2)}>
                  Sign Up Instead!
                </Button>
              </TabPanel>
              <TabPanel>
                <SignUpForm />
                <Button colorScheme='red' mt={6} w='100%' onClick={() => setCurrentTab(1)}>
                  Login Instead!
                </Button>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  </>;
}