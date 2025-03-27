import { Token, Pair } from '@/interfaces';

export const mapToken = (token: any): Token | Token[] => {
  const mapping = (t: any) =>
    <Token>{
      address: t.id,
      decimals: Number(t.decimals),
      name: t.name,
      symbol: t.symbol,
      // logoURI: t.logoURI,
      // stable: t.stable,
      // price: t.price,
      // liquidStakedAddress: t.liquid_staked_address,
      balance: 0.0,
    };
  if (Array.isArray(token)) {
    return token.map(x => mapping(x));
  } else {
    return mapping(token);
  }
};

export const mapPair = (pair: any): Pair | Pair[] => {
  const mapping = (p: any) =>
    <Pair>{
      address: p.id,
      tvl: p.reserveUSD,
      symbol: "Uni Pair",
      decimals: 18,
      totalSupply: p.totalSupply,
      reserve0: p.reserve0,
      reserve1: p.reserve1,
      token0: mapToken(p.token0),
      token1: mapToken(p.token1),
    };
  if (Array.isArray(pair)) {
    return pair.map(x => mapping(x));
  } else {
    return mapping(pair);
  }
};
