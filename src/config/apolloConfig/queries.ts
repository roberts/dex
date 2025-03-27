import gql from 'graphql-tag'

export const GET_PAIRS = gql`
{
  pairs {
    id
    reserve0
    reserve1
    reserveUSD
    trackedReserveETH
    totalSupply
    txCount
    untrackedVolumeUSD
    token0 {
      id
      symbol
      name
      decimals
    }
    token1 {
      id
      symbol
      name
      decimals
    }
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
