import React from "react";
import { getClient } from "@/vendor/trevorblades";
import { GQL_COUNTRY } from "@/vendor/trevorblades/queries";
import CountryDetails from "@/components/countryDetails";
import Link from "next/link";

export default async function Country({ params }: { params: { continentCode: string, countryCode: string } }) {
  console.log(`Fetching details for coountry code ${params.countryCode}`);
  const client = getClient();
  const { data } = await client.query({ query: GQL_COUNTRY, variables: { code: params.countryCode } });

  return <main>
      <h1>
        <Link href={'/continents'}> {'>>'} </Link>
        <Link href={`/continent/${data.country.continent.code}`}>{data.country.continent.name}</Link>
        {'>'}
        {data.country.name}
      </h1>

      <CountryDetails country={ data.country } />
    </main>;
}