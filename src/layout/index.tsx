'use client';

import React, { PropsWithChildren, useState, useEffect } from 'react';
import Footer from '@/layout/footer';
import Navbar from '@/layout/navbar';
import Sidebar from '@/layout/sidebar';
import { useBaseAssetStore } from '@/store/baseAssetsStore';
import { shallow } from 'zustand/shallow';
import { usePairStore } from '@/store/pairsStore';

export default function Layout({ children }: PropsWithChildren) {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { initBaseAssets, isLoading } = useBaseAssetStore(
    state => ({
      initBaseAssets: state.actions.initBaseAssets,
      isLoading: state.isLoading,
    }),
    shallow
  );
  const { initPairs } = usePairStore(
    state => ({
      initPairs: state.actions.initPairs
    }),
    shallow
  );
  useEffect(() => {
    initBaseAssets();
    initPairs();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        isOpen={isSidebarOpen}
        toggleOpen={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <Sidebar
        isOpen={isSidebarOpen}
        toggleOpen={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <main className="flex-1 px-4 flex items-center w-full">{children}</main>
      <Footer />
    </div>
  );
}
