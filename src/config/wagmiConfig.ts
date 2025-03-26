import '@rainbow-me/rainbowkit/styles.css';
import { http, fallback } from 'wagmi';
import { arbitrum, base, mainnet, sepolia, localhost as localhost1 } from 'wagmi/chains';
import { createConfig } from '@wagmi/core'
import { getDefaultConfig, WalletList } from '@rainbow-me/rainbowkit';
import {
  coinbaseWallet,
  coin98Wallet,
  injectedWallet,
  ledgerWallet,
  metaMaskWallet,
  okxWallet,
  phantomWallet,
  rabbyWallet,
  rainbowWallet,
  safeWallet,
  trustWallet,
  uniswapWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';

const localhost = {...localhost1, id: 31337}
/**
 * WalletConnect Project ID
 * @description Required for all dApps using WalletConnect. Get your free projectId at
 * @see https://cloud.walletconnect.com/sign-in
 */
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_ID || '';

/**
 * RPC Configuration
 * @description Default RPC endpoints with fallbacks
 */
const RPC_URLS = {
  BASE: [
    base.rpcUrls.default.http[0], // Default RPC
    'https://base-rpc.publicnode.com', // Public Node
    'https://base.llamarpc.com', // Llama
  ],
  LOCALHOST: [
    localhost.rpcUrls.default.http[0], // Default RPC
  ],
} as const;

/**
 * Transport Configuration
 * @description Fallback configuration for RPC endpoints
 */
const transports = {
  [base.id]: fallback(RPC_URLS.BASE.map((url) => http(url))),
  [localhost.id]: fallback(RPC_URLS.LOCALHOST.map((url) => http(url))),
};

//const { wallets } = getDefaultWallets();
const wallets: WalletList = [
  //...getDefaultWallets().wallets,
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet,
      rainbowWallet,
      rabbyWallet,
      ledgerWallet,
      walletConnectWallet,
    ],
  },
  {
    groupName: 'Other Wallets',
    wallets: [
      phantomWallet,
      coinbaseWallet,
      coin98Wallet,
      trustWallet,
      uniswapWallet,
      injectedWallet,
      okxWallet,
      safeWallet,
    ],
  },
];

export const wagmiConfig = getDefaultConfig({
  appName: 'Next dApp Template',
  projectId: projectId,
  wallets: wallets,
  chains: [
    base,
    localhost
  ],
  transports,
  ssr: true, // If your dApp uses server side rendering (SSR)
});

export const config = createConfig({
  chains: [base, localhost],
  transports: {
    [base.id]: http(),
    [localhost.id]: http()
  },
})