import gql from 'graphql-tag'

export const GET_PAIRS = gql`
  query {
    pairs {
      id
      token0 {
        symbol
      }
      token1 {
        symbol
      }
      reserve0
      reserve1
    }
  }
`;

export const GET_TOKENS = gql`
  query {
    tokens {
      id
      symbol
      name
      decimals
    }
  }
`;