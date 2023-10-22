import React from "react";
import { getClient } from "@/vendor/trevorblades";
import { GQL_CONTINENT_COUNTRIES } from "@/vendor/trevorblades/queries";
import CountriesList from "@/components/countries";
import Link from "next/link";

export default async function Continent({ params }: { params: { continentCode: string } }) {
  console.log(`Fetching countries for continent code ${params.continentCode}`);
  const client = getClient();
  const { data } = await client.query({ query: GQL_CONTINENT_COUNTRIES, variables: { continentCode: params.continentCode } });

  return <main>
      <h1>
        <Link href={'/continents'}> {'>>'} </Link>
        {data.continents[0].name}
      </h1>
      <CountriesList countries={ data.countries } continentCode={ params.continentCode }/>
    </main>;
}