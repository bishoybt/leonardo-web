import React from "react";
import {
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { Country } from "@/vendor/trevorblades/types";

export default function CountriesList(props: { continentCode: string, countries : Country[] }) {
  return <List spacing={3}> {
    props.countries.map((country) =>
      <ListItem key={country.code}>
        <Link href={`/continent/${props.continentCode}/country/${country.code}`}>
          {country.name}
        </Link>
      </ListItem>
    )}</List>;
}