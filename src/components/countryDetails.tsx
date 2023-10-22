import React from "react";
import { Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
import { Country } from "@/vendor/trevorblades/types";

export default function CountryDetails(props: { country : Country }) {
  console.log('Country details', props.country);

  return <Card>
    <CardHeader>
      <Heading size='md'>{props.country.name}</Heading>
    </CardHeader>

    <CardBody>
      <Stack divider={<StackDivider />} spacing='4'>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Native Name
          </Heading>
          <Text pt='2' fontSize='sm'>
            {props.country.native}
          </Text>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Capital
          </Heading>
          <Text pt='2' fontSize='sm'>
            {props.country.capital}
          </Text>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Currency
          </Heading>
          <Text pt='2' fontSize='sm'>
            {props.country.currency}
          </Text>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Phone
          </Heading>
          <Text pt='2' fontSize='sm'>
            {props.country.phone}
          </Text>
        </Box>
      </Stack>
    </CardBody>
  </Card>;
}