import { NextResponse } from "next/server";
import { fetchPairData, fetchTokenData } from '@/utils/fetchData';
import { mapPair } from '@/utils/interfaceMaps';

export async function POST(req: Request) {
  try {
    const result = await fetchPairData();
    const pairs = mapPair(result?.data.pairs);

    return NextResponse.json(pairs, { status: 200, headers: { "Access-Control-Allow-Origin": "*" } });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
