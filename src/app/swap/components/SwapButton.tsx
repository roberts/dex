import SwampConnectButton from '@/components/features/SwampConnectButton';
import { useAccount } from 'wagmi';

export default function SwapButton (props: any) {
  const { isConnected } = useAccount();
  
  return (
    isConnected? 
      <button onClick={props.onClick}>
        Swap
      </button>:
      <SwampConnectButton/>
  );
};
