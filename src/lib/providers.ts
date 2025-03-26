import { CurrentConfig } from './config'
import { BaseProvider } from '@ethersproject/providers'

// Single copies of provider and wallet
const baseProvider = new BaseProvider(
  CurrentConfig.rpc.base
)

// Interfaces

export enum TransactionState {
  Failed = 'Failed',
  New = 'New',
  Rejected = 'Rejected',
  Sending = 'Sending',
  Sent = 'Sent',
}

// Provider and Wallet Functions

export function getBaseProvider(): BaseProvider {
  return baseProvider;
}
