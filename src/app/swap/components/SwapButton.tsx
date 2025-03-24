import { useAccount } from 'wagmi';
import SwampConnectButton from '@/components/features/SwampConnectButton';

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
