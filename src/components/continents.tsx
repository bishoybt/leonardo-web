import React from "react";
import {
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { Continent } from "@/vendor/trevorblades/types";

export default function ContinentsList(props: { continents : Continent[] }) {
  return <List spacing={3}> {
    props.continents.map((continent) =>
      <ListItem key={continent.code}>
        <Link href={`/continent/${continent.code}`}>
          {continent.name}
        </Link>
      </ListItem>
    )}</List>;
}