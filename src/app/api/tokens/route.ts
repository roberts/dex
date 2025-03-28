import { NextResponse } from "next/server";
import { fetchTokenData } from '@/utils/fetchData';
import { mapToken } from '@/utils/interfaceMaps';
import { CONTRACTS } from '@/config';

export async function POST(req: Request) {
  try {
    const result = await fetchTokenData();

    let baseAssets = result?.data.tokens;
    // baseAssets.add(CONTRACTS.COIN_ADDRESS);

    baseAssets = mapToken(baseAssets);
    baseAssets.unshift(
      {
        address: CONTRACTS.USDC_TOKEN_ADDRESS,
        decimals: 6,
        name: "USD Coin",
        symbol: "USDC",
        stable: true,
        price: 1,
        liquidStakedAddress: "",
        balance: 0.0,
      }
    );
    baseAssets.unshift(
      {
        address: CONTRACTS.COIN_ADDRESS,
        decimals: CONTRACTS.COIN_DECIMALS,
        name: CONTRACTS.COIN_NAME,
        symbol: CONTRACTS.COIN_SYMBOL,
        stable: false,
        price: 0,
        liquidStakedAddress: "",
        balance: 0.0,
      }
    );

    return NextResponse.json(baseAssets, { status: 200, headers: { "Access-Control-Allow-Origin": "*" } });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
