import { Token } from './Token';

export interface SubRoute {
  from: Token;
  to: Token;
  pairAddress: string;
  percentage: number;
}
