import { Pair } from '@/interfaces';
import { create } from 'zustand';
import { fetchAggregatedPairToken } from '@/utils/fetchData';
import { mapPair } from '@/utils/interfaceMaps';


interface PairsState {
  pairs: Pair[];
  isLoading: boolean;
  actions: {
    initPairs: () => Promise<void>;
    getPair: (address: string) => Pair | undefined;
  };
}
const BASE_URL = process.env.NEXT_PUBLIC_API ?? 'https://localhost:8000';

export const usePairStore = create<PairsState>((set, get) => ({
  pairs: [],
  isLoading: false,
  actions: {
    initPairs: async () => {
      set({ isLoading: true });
      await fetchAggregatedPairToken()
        .then(result => {
          
          set({ pairs: result });
          console.log("fetchAggregatedPairData : ", result);
        })
        .catch(error => console.log(error));
      set({ isLoading: false });
    },
    getPair: (address: string) => {
      const { pairs } = get();
      return pairs.find(
        (pair: Pair) => pair.address.toLowerCase() === address.toLowerCase()
      );
    },
  },
}));
