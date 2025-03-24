'use client';

import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import ThemeSwitch from '@/components/features/ThemeSwitch';

export default function Home() {
  const { address, isConnected } = useAccount();

  useEffect(() => {
    if (isConnected) {
      // eslint-disable-next-line no-console
      console.log('Wallet address: ', address);
    } else {
      // eslint-disable-next-line no-console
      console.log('Not connected');
    }
  }, [address, isConnected]);

  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-center mt-8">
        <ThemeSwitch />
      </div>
    </div>
  );
}
