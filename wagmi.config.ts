import { factoryABI, routerABI } from '@/config/abis';
import * as MAINNET from '@/config/';
import * as TESTNET from '@/config/contracts';
import { defineConfig, loadEnv } from '@wagmi/cli';
import { actions, react } from '@wagmi/cli/plugins';

//@ts-expect-error
export default defineConfig(() => {
  let contracts = [];
  const env = loadEnv({
    envDir: process.cwd(),
    mode: process.env.NODE_ENV,
  });

  contracts = [
    {
      abi: TESTNET.FACTORY_ABI,
      address: TESTNET.FACTORY_ADDRESS,
      name: 'PairFactory',
    },
    {
      abi: TESTNET.ROUTER_ABI,
      address: TESTNET.ROUTER_ADDRESS,
      name: 'Router',
    },
    {
      abi: TESTNET.ERC20_ABI,
      name: 'Erc20',
    },
    {
      abi: TESTNET.PAIR_ABI,
      name: 'Pair',
    },
  ];
  return {
    out: 'src/lib/swamp.ts',
    contracts: contracts,
    plugins: [actions(), react()],
  };
});
