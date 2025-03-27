import { Token } from './Token';

export interface Pair {
  address: `0x${string}`;
  tvl: number;
  symbol: string;
  decimals: number;
  totalSupply: number;
  reserve0: number;
  reserve1: number;
  token0: Token;
  token1: Token;
}
