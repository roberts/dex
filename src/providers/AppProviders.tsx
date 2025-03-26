'use client';

import { type JSX } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { wagmiConfig } from '@/config/wagmiConfig';
import { ChakraProvider } from '@chakra-ui/react';
import { theme, rainbowTheme } from '../styles/theme';


const queryClient = new QueryClient();

type ProvidersProps = {
  children: JSX.Element | JSX.Element[] | string | null;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider theme={rainbowTheme} showRecentTransactions={true}>
            <ChakraProvider theme={rainbowTheme}>
              {children}
            </ChakraProvider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  );
}
