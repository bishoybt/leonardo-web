import React from "react";
import { getClient } from "../../../vendor/trevorblades";
import { GQL_CONTINENTS } from "../../../vendor/trevorblades/queries";
import ContinentsList from "../../../components/continents";

export default async function ListAllContinents() {
  const client = getClient();
  const { data } = await client.query({ query: GQL_CONTINENTS });

  return <ContinentsList continents={ data.continents } />;
}