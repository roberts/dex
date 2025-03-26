import { Token } from '@uniswap/sdk-core'
import { wagmiConfig } from '../config/wagmiConfig';

// Sets if the example should run locally or on chain
export enum Environment {
  LOCAL,
  WALLET_EXTENSION,
  MAINNET,
}

// Inputs that configure this example to run
export interface ExampleConfig {
  env: Environment
  rpc: {
    local: string
    mainnet: string
    base: string
  }
}

// Example Configuration

export const CurrentConfig: ExampleConfig = {
  env: Environment.LOCAL,
  rpc: {
    local: 'http://localhost:8545',
    mainnet: '',
    base: wagmiConfig.chains[2].rpcUrls.default.http[0]
  },
}