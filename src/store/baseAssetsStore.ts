import { CONTRACTS } from '@/config';
import { Token } from '@/interfaces';
import { mapToken } from '@/utils/interfaceMaps';
import axios from 'axios';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface BaseAssetState {
  baseAssets: Token[];
  isLoading: boolean;
  actions: {
    initBaseAssets: () => void;
    getBaseAsset: (address: string) => Token | undefined;
    setBaseAsset: (token: Token) => void;
  };
}
const BASE_URL = process.env.NEXT_PUBLIC_API ?? 'https://localhost:8000';

export const useBaseAssetStore = create<BaseAssetState>()(
  devtools((set, get) => ({
    baseAssets: [],
    isLoading: false,
    actions: {
      initBaseAssets: async () => {
        set({ isLoading: true });
        await axios
          .get(BASE_URL.concat('/assets'))
          .then(response => {
            let baseAssets = response.data.data;
            baseAssets = mapToken(baseAssets);

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
