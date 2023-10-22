import { gql } from '@apollo/client'

export const GQL_CONTINENTS = gql`
  query GetContinents {
    continents {
      code
      name
    }
  }`;

  export const GQL_CONTINENT_COUNTRIES = gql`
    query GetContinentCountries($continentCode: String!) {
      continents(filter: {code: {eq: $continentCode }}) {
        name
      }
      countries(filter: {continent: {eq: $continentCode }}) {
        code
        name
        emoji
      }
    }`

  export const GQL_COUNTRY = gql`
    query GetCountry($code: ID!) {
      country(code: $code) {
        code
        name
        native
        capital
        currency
        emoji
        languages {
          code
          name
          native
        }
        phone
        states {
          code
          name
        }
        continent {
          code
          name
        }
      }
    }`