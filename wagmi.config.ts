import { factoryABI, routerABI } from '@/config/abis';
import * as MAINNET from '@/config/contracts';
import * as TESTNET from '@/config/contractsTestnet';
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
      abi: MAINNET.FACTORY_ABI,
      address: MAINNET.FACTORY_ADDRESS,
      name: 'UniFactory',
    },
    {
      abi: MAINNET.ROUTER_ABI,
      address: MAINNET.ROUTER_ADDRESS,
      name: 'Router',
    },
    {
      abi: MAINNET.ERC20_ABI,
      name: 'Erc20',
    },
    {
      abi: MAINNET.PAIR_ABI,
      name: 'Pair',
    },
  ];
  return {
    out: 'src/lib/swamp.ts',
    contracts: contracts,
    plugins: [actions(), react()],
    
  };
});
