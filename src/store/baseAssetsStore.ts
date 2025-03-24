import { CONTRACTS } from '@/config';
import { Token } from '@/interfaces';
import { mapToken } from '@/utils/interfaceMaps';
import axios from 'axios';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { fetchTokenData } from '@/utils/fetchData';

interface BaseAssetState {
  baseAssets: Token[];
  isLoading: boolean;
  actions: {
    initBaseAssets: () => void;
    getBaseAsset: (address: string) => Token | undefined;
    setBaseAsset: (token: Token) => void;
  };
}
const BASE_URL = process.env.NEXT_PUBLIC_UNISWAP_BASE_SUBGRAPH_URL ?? 'https://localhost:8000';

export const useBaseAssetStore = create<BaseAssetState>()(
  devtools((set, get) => ({
    baseAssets: [],
    isLoading: false,
    actions: {
      initBaseAssets: async () => {
        console.log(process.env.NEXT_PUBLIC_UNISWAP_BASE_SUBGRAPH_URL);
        set({ isLoading: true });
        await fetchTokenData()
          .then(result => {
            let baseAssets = result?.data.tokens;
            // baseAssets.add(CONTRACTS.COIN_ADDRESS);

            console.log('Fetched tokens:', baseAssets);
            baseAssets = mapToken(baseAssets);

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

            set({ baseAssets });
          })
          .catch(error => console.log(error));
        set({ isLoading: false });
      },
      getBaseAsset: (address: string) => {
        const { baseAssets } = get();
        return baseAssets.find(
          (token: Token) =>
            token.address.toLowerCase() === address.toLowerCase()
        );
      },
      setBaseAsset: (token: Token) => {
        const { baseAssets } = get();
        const index = baseAssets.findIndex(
          (t: Token) => t.address.toLowerCase() === token.address.toLowerCase()
        );
        if (index >= 0) {
          baseAssets[index] = token;
          console.log('setBaseAsset', token);
          set({ baseAssets });
        }
      },
    },
  }))
);
