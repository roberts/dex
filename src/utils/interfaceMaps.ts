import { Token } from '@/interfaces';

export const mapToken = (token: any): Token | Token[] => {
  const mapping = (t: any) =>
    <Token>{
      address: t.address,
      decimals: t.decimals,
      name: t.name,
      symbol: t.symbol,
      logoURI: t.logoURI,
      stable: t.stable,
      price: t.price,
      liquidStakedAddress: t.liquid_staked_address,
      balance: 0.0,
    };
  if (Array.isArray(token)) {
    return token.map(x => mapping(x));
  } else {
    return mapping(token);
  }
};
