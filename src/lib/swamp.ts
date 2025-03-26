import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from 'wagmi/codegen'

import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Erc20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [
      { name: '_spender', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: 'success', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [
      { name: '_to', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'showMeTheMoney',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [
      { name: '_to', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: 'success', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [
      { name: '_from', type: 'address' },
      { name: '_to', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: 'success', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '_from', type: 'address', indexed: true },
      { name: '_to', type: 'address', indexed: true },
      { name: '_value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '_owner', type: 'address', indexed: true },
      { name: '_spender', type: 'address', indexed: true },
      { name: '_value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [
      { name: '_owner', type: 'address' },
      { name: '_spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: 'remaining', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [{ name: '_owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', type: 'string' }],
    stateMutability: 'view',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', type: 'string' }],
    stateMutability: 'view',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pair
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const pairAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount0',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount1',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'Burn',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount0',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount1',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Fees',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount0',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount1',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Mint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount0In',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount1In',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount0Out',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount1Out',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'Swap',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'reserve0',
        internalType: 'uint112',
        type: 'uint112',
        indexed: false,
      },
      {
        name: 'reserve1',
        internalType: 'uint112',
        type: 'uint112',
        indexed: false,
      },
    ],
    name: 'Sync',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MINIMUM_LIQUIDITY',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'PERMIT_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'blockTimestampLast',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'burn',
    outputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'claimFees',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'recipient', internalType: 'address', type: 'address' }],
    name: 'claimFeesFor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'claimable0',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'claimable1',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'priceCumulativeStart',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'priceCumulativeEnd', internalType: 'uint256', type: 'uint256' },
      { name: 'timeElapsed', internalType: 'uint256', type: 'uint256' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'computeAmountOut',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenIn', internalType: 'address', type: 'address' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'current',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'currentBlockTimestamp',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'currentCumulativePrices',
    outputs: [
      { name: 'price0Cumulative', internalType: 'uint256', type: 'uint256' },
      { name: 'price1Cumulative', internalType: 'uint256', type: 'uint256' },
      { name: 'blockTimestamp', internalType: 'uint32', type: 'uint32' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'fees',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenIn', internalType: 'address', type: 'address' },
    ],
    name: 'getAmountOut',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getReserves',
    outputs: [
      { name: '_reserve0', internalType: 'uint112', type: 'uint112' },
      { name: '_reserve1', internalType: 'uint112', type: 'uint112' },
      { name: '_blockTimestampLast', internalType: 'uint32', type: 'uint32' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'index0',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'index1',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lastObservation',
    outputs: [
      {
        name: '',
        internalType: 'struct BaseV1Pair.Observation',
        type: 'tuple',
        components: [
          { name: 'timestamp', internalType: 'uint32', type: 'uint32' },
          {
            name: 'price0Cumulative',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'price1Cumulative',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'mint',
    outputs: [{ name: 'liquidity', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'observationLength',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'observations',
    outputs: [
      { name: 'timestamp', internalType: 'uint32', type: 'uint32' },
      { name: 'price0Cumulative', internalType: 'uint256', type: 'uint256' },
      { name: 'price1Cumulative', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'periodSize',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'price0CumulativeLast',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'price1CumulativeLast',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenIn', internalType: 'address', type: 'address' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'points', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'prices',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenIn', internalType: 'address', type: 'address' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'granularity', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'quote',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'reserve0',
    outputs: [{ name: '', internalType: 'uint112', type: 'uint112' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'reserve0Last',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'reserve1',
    outputs: [{ name: '', internalType: 'uint112', type: 'uint112' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'reserve1Last',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenIn', internalType: 'address', type: 'address' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'points', internalType: 'uint256', type: 'uint256' },
      { name: 'window', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'sample',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'skim',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stable',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'supplyIndex0',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'supplyIndex1',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount0Out', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1Out', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'swap',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'sync',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token0',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token1',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'dst', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'src', internalType: 'address', type: 'address' },
      { name: 'dst', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PairFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const pairFactoryAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token0',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'token1',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'stable', internalType: 'bool', type: 'bool', indexed: false },
      {
        name: 'pair',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'PairCreated',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_FEE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'acceptFeeManager',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'acceptPauser',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'allPairs',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'allPairsLength',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'stable', internalType: 'bool', type: 'bool' },
    ],
    name: 'createPair',
    outputs: [{ name: 'pair', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'feeManager',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_stable', internalType: 'bool', type: 'bool' }],
    name: 'getFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getInitializable',
    outputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bool', type: 'bool' },
    ],
    name: 'getPair',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'isPair',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'isPaused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pairCodeHash',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pauser',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pendingFeeManager',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pendingPauser',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_stable', internalType: 'bool', type: 'bool' },
      { name: '_fee', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setFee',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_feeManager', internalType: 'address', type: 'address' }],
    name: 'setFeeManager',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_state', internalType: 'bool', type: 'bool' }],
    name: 'setPause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_pauser', internalType: 'address', type: 'address' }],
    name: 'setPauser',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stableFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'volatileFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

export const pairFactoryAddress =
  '0x8909Dc15e40173Ff4699343b6eB8132c65e18eC6' as const

export const pairFactoryConfig = {
  address: pairFactoryAddress,
  abi: pairFactoryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Router
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const routerAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_factory', internalType: 'address', type: 'address' },
      { name: '_weth', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
      {
        name: 'routes',
        internalType: 'struct Router.route[]',
        type: 'tuple[]',
        components: [
          { name: 'from', internalType: 'address', type: 'address' },
          { name: 'to', internalType: 'address', type: 'address' },
          { name: 'stable', internalType: 'bool', type: 'bool' },
        ],
      },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'UNSAFE_swapExactTokensForTokens',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'stable', internalType: 'bool', type: 'bool' },
      { name: 'amountADesired', internalType: 'uint256', type: 'uint256' },
      { name: 'amountBDesired', internalType: 'uint256', type: 'uint256' },
      { name: 'amountAMin', internalType: 'uint256', type: 'uint256' },
      { name: 'amountBMin', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addLiquidity',
    outputs: [
      { name: 'amountA', internalType: 'uint256', type: 'uint256' },
      { name: 'amountB', internalType: 'uint256', type: 'uint256' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'stable', internalType: 'bool', type: 'bool' },
      { name: 'amountTokenDesired', internalType: 'uint256', type: 'uint256' },
      { name: 'amountTokenMin', internalType: 'uint256', type: 'uint256' },
      { name: 'amountETHMin', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addLiquidityETH',
    outputs: [
      { name: 'amountToken', internalType: 'uint256', type: 'uint256' },
      { name: 'amountETH', internalType: 'uint256', type: 'uint256' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenIn', internalType: 'address', type: 'address' },
      { name: 'tokenOut', internalType: 'address', type: 'address' },
    ],
    name: 'getAmountOut',
    outputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'stable', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      {
        name: 'routes',
        internalType: 'struct Router.route[]',
        type: 'tuple[]',
        components: [
          { name: 'from', internalType: 'address', type: 'address' },
          { name: 'to', internalType: 'address', type: 'address' },
          { name: 'stable', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    name: 'getAmountsOut',
    outputs: [
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'stable', internalType: 'bool', type: 'bool' },
    ],
    name: 'getReserves',
    outputs: [
      { name: 'reserveA', internalType: 'uint256', type: 'uint256' },
      { name: 'reserveB', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'pair', internalType: 'address', type: 'address' }],
    name: 'isPair',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'stable', internalType: 'bool', type: 'bool' },
    ],
    name: 'pairFor',
    outputs: [{ name: 'pair', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'stable', internalType: 'bool', type: 'bool' },
      { name: 'amountADesired', internalType: 'uint256', type: 'uint256' },
      { name: 'amountBDesired', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'quoteAddLiquidity',
    outputs: [
      { name: 'amountA', internalType: 'uint256', type: 'uint256' },
      { name: 'amountB', internalType: 'uint256', type: 'uint256' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'stable', internalType: 'bool', type: 'bool' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'quoteRemoveLiquidity',
    outputs: [
      { name: 'amountA', internalType: 'uint256', type: 'uint256' },
      { name: 'amountB', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'stable', internalType: 'bool', type: 'bool' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
      { name: 'amountAMin', internalType: 'uint256', type: 'uint256' },
      { name: 'amountBMin', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'removeLiquidity',
    outputs: [
      { name: 'amountA', internalType: 'uint256', type: 'uint256' },
      { name: 'amountB', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'stable', internalType: 'bool', type: 'bool' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
      { name: 'amountTokenMin', internalType: 'uint256', type: 'uint256' },
      { name: 'amountETHMin', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'removeLiquidityETH',
    outputs: [
      { name: 'amountToken', internalType: 'uint256', type: 'uint256' },
      { name: 'amountETH', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'stable', internalType: 'bool', type: 'bool' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
      { name: 'amountTokenMin', internalType: 'uint256', type: 'uint256' },
      { name: 'amountETHMin', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'removeLiquidityETHSupportingFeeOnTransferTokens',
    outputs: [
      { name: 'amountToken', internalType: 'uint256', type: 'uint256' },
      { name: 'amountETH', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'stable', internalType: 'bool', type: 'bool' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
      { name: 'amountTokenMin', internalType: 'uint256', type: 'uint256' },
      { name: 'amountETHMin', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'approveMax', internalType: 'bool', type: 'bool' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'removeLiquidityETHWithPermit',
    outputs: [
      { name: 'amountToken', internalType: 'uint256', type: 'uint256' },
      { name: 'amountETH', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'stable', internalType: 'bool', type: 'bool' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
      { name: 'amountTokenMin', internalType: 'uint256', type: 'uint256' },
      { name: 'amountETHMin', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'approveMax', internalType: 'bool', type: 'bool' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',
    outputs: [
      { name: 'amountToken', internalType: 'uint256', type: 'uint256' },
      { name: 'amountETH', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'stable', internalType: 'bool', type: 'bool' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
      { name: 'amountAMin', internalType: 'uint256', type: 'uint256' },
      { name: 'amountBMin', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'approveMax', internalType: 'bool', type: 'bool' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'removeLiquidityWithPermit',
    outputs: [
      { name: 'amountA', internalType: 'uint256', type: 'uint256' },
      { name: 'amountB', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
    ],
    name: 'sortTokens',
    outputs: [
      { name: 'token0', internalType: 'address', type: 'address' },
      { name: 'token1', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountOutMin', internalType: 'uint256', type: 'uint256' },
      {
        name: 'routes',
        internalType: 'struct Router.route[]',
        type: 'tuple[]',
        components: [
          { name: 'from', internalType: 'address', type: 'address' },
          { name: 'to', internalType: 'address', type: 'address' },
          { name: 'stable', internalType: 'bool', type: 'bool' },
        ],
      },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapExactETHForTokens',
    outputs: [
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountOutMin', internalType: 'uint256', type: 'uint256' },
      {
        name: 'routes',
        internalType: 'struct Router.route[]',
        type: 'tuple[]',
        components: [
          { name: 'from', internalType: 'address', type: 'address' },
          { name: 'to', internalType: 'address', type: 'address' },
          { name: 'stable', internalType: 'bool', type: 'bool' },
        ],
      },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapExactETHForTokensSupportingFeeOnTransferTokens',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOutMin', internalType: 'uint256', type: 'uint256' },
      {
        name: 'routes',
        internalType: 'struct Router.route[]',
        type: 'tuple[]',
        components: [
          { name: 'from', internalType: 'address', type: 'address' },
          { name: 'to', internalType: 'address', type: 'address' },
          { name: 'stable', internalType: 'bool', type: 'bool' },
        ],
      },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapExactTokensForETH',
    outputs: [
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOutMin', internalType: 'uint256', type: 'uint256' },
      {
        name: 'routes',
        internalType: 'struct Router.route[]',
        type: 'tuple[]',
        components: [
          { name: 'from', internalType: 'address', type: 'address' },
          { name: 'to', internalType: 'address', type: 'address' },
          { name: 'stable', internalType: 'bool', type: 'bool' },
        ],
      },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapExactTokensForETHSupportingFeeOnTransferTokens',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOutMin', internalType: 'uint256', type: 'uint256' },
      {
        name: 'routes',
        internalType: 'struct Router.route[]',
        type: 'tuple[]',
        components: [
          { name: 'from', internalType: 'address', type: 'address' },
          { name: 'to', internalType: 'address', type: 'address' },
          { name: 'stable', internalType: 'bool', type: 'bool' },
        ],
      },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapExactTokensForTokens',
    outputs: [
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOutMin', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenFrom', internalType: 'address', type: 'address' },
      { name: 'tokenTo', internalType: 'address', type: 'address' },
      { name: 'stable', internalType: 'bool', type: 'bool' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapExactTokensForTokensSimple',
    outputs: [
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOutMin', internalType: 'uint256', type: 'uint256' },
      {
        name: 'routes',
        internalType: 'struct Router.route[]',
        type: 'tuple[]',
        components: [
          { name: 'from', internalType: 'address', type: 'address' },
          { name: 'to', internalType: 'address', type: 'address' },
          { name: 'stable', internalType: 'bool', type: 'bool' },
        ],
      },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapExactTokensForTokensSupportingFeeOnTransferTokens',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'weth',
    outputs: [{ name: '', internalType: 'contract IWETH', type: 'address' }],
    stateMutability: 'view',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

export const routerAddress =
  '0x4752ba5DBc23f44D87826276BF6Fd6b1C372aD24' as const

export const routerConfig = { address: routerAddress, abi: routerAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const readErc20 = /*#__PURE__*/ createReadContract({ abi: erc20Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const readErc20Allowance = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readErc20BalanceOf = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const readErc20Decimals = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const readErc20Name = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const readErc20Symbol = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const readErc20TotalSupply = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const writeErc20 = /*#__PURE__*/ createWriteContract({ abi: erc20Abi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const writeErc20Approve = /*#__PURE__*/ createWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"showMeTheMoney"`
 */
export const writeErc20ShowMeTheMoney = /*#__PURE__*/ createWriteContract({
  abi: erc20Abi,
  functionName: 'showMeTheMoney',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const writeErc20Transfer = /*#__PURE__*/ createWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeErc20TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const simulateErc20 = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const simulateErc20Approve = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"showMeTheMoney"`
 */
export const simulateErc20ShowMeTheMoney = /*#__PURE__*/ createSimulateContract(
  { abi: erc20Abi, functionName: 'showMeTheMoney' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const simulateErc20Transfer = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateErc20TransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const watchErc20Event = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchErc20TransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20Abi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const watchErc20ApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20Abi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__
 */
export const readPair = /*#__PURE__*/ createReadContract({ abi: pairAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const readPairDomainSeparator = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'DOMAIN_SEPARATOR',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"MINIMUM_LIQUIDITY"`
 */
export const readPairMinimumLiquidity = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'MINIMUM_LIQUIDITY',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"PERMIT_TYPEHASH"`
 */
export const readPairPermitTypehash = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'PERMIT_TYPEHASH',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"allowance"`
 */
export const readPairAllowance = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readPairBalanceOf = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"blockTimestampLast"`
 */
export const readPairBlockTimestampLast = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'blockTimestampLast',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"claimable0"`
 */
export const readPairClaimable0 = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'claimable0',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"claimable1"`
 */
export const readPairClaimable1 = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'claimable1',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"computeAmountOut"`
 */
export const readPairComputeAmountOut = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'computeAmountOut',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"current"`
 */
export const readPairCurrent = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'current',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"currentBlockTimestamp"`
 */
export const readPairCurrentBlockTimestamp = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'currentBlockTimestamp',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"currentCumulativePrices"`
 */
export const readPairCurrentCumulativePrices = /*#__PURE__*/ createReadContract(
  { abi: pairAbi, functionName: 'currentCumulativePrices' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"decimals"`
 */
export const readPairDecimals = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"fees"`
 */
export const readPairFees = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'fees',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"getAmountOut"`
 */
export const readPairGetAmountOut = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'getAmountOut',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"getReserves"`
 */
export const readPairGetReserves = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'getReserves',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"index0"`
 */
export const readPairIndex0 = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'index0',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"index1"`
 */
export const readPairIndex1 = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'index1',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"lastObservation"`
 */
export const readPairLastObservation = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'lastObservation',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"name"`
 */
export const readPairName = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"nonces"`
 */
export const readPairNonces = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"observationLength"`
 */
export const readPairObservationLength = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'observationLength',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"observations"`
 */
export const readPairObservations = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'observations',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"periodSize"`
 */
export const readPairPeriodSize = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'periodSize',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"price0CumulativeLast"`
 */
export const readPairPrice0CumulativeLast = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'price0CumulativeLast',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"price1CumulativeLast"`
 */
export const readPairPrice1CumulativeLast = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'price1CumulativeLast',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"prices"`
 */
export const readPairPrices = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'prices',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"quote"`
 */
export const readPairQuote = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'quote',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"reserve0"`
 */
export const readPairReserve0 = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'reserve0',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"reserve0Last"`
 */
export const readPairReserve0Last = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'reserve0Last',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"reserve1"`
 */
export const readPairReserve1 = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'reserve1',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"reserve1Last"`
 */
export const readPairReserve1Last = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'reserve1Last',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"sample"`
 */
export const readPairSample = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'sample',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"stable"`
 */
export const readPairStable = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'stable',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"supplyIndex0"`
 */
export const readPairSupplyIndex0 = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'supplyIndex0',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"supplyIndex1"`
 */
export const readPairSupplyIndex1 = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'supplyIndex1',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"symbol"`
 */
export const readPairSymbol = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"token0"`
 */
export const readPairToken0 = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'token0',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"token1"`
 */
export const readPairToken1 = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'token1',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readPairTotalSupply = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairAbi}__
 */
export const writePair = /*#__PURE__*/ createWriteContract({ abi: pairAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"approve"`
 */
export const writePairApprove = /*#__PURE__*/ createWriteContract({
  abi: pairAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"burn"`
 */
export const writePairBurn = /*#__PURE__*/ createWriteContract({
  abi: pairAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"claimFees"`
 */
export const writePairClaimFees = /*#__PURE__*/ createWriteContract({
  abi: pairAbi,
  functionName: 'claimFees',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"claimFeesFor"`
 */
export const writePairClaimFeesFor = /*#__PURE__*/ createWriteContract({
  abi: pairAbi,
  functionName: 'claimFeesFor',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"mint"`
 */
export const writePairMint = /*#__PURE__*/ createWriteContract({
  abi: pairAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"permit"`
 */
export const writePairPermit = /*#__PURE__*/ createWriteContract({
  abi: pairAbi,
  functionName: 'permit',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"skim"`
 */
export const writePairSkim = /*#__PURE__*/ createWriteContract({
  abi: pairAbi,
  functionName: 'skim',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"swap"`
 */
export const writePairSwap = /*#__PURE__*/ createWriteContract({
  abi: pairAbi,
  functionName: 'swap',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"sync"`
 */
export const writePairSync = /*#__PURE__*/ createWriteContract({
  abi: pairAbi,
  functionName: 'sync',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"transfer"`
 */
export const writePairTransfer = /*#__PURE__*/ createWriteContract({
  abi: pairAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writePairTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: pairAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairAbi}__
 */
export const simulatePair = /*#__PURE__*/ createSimulateContract({
  abi: pairAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"approve"`
 */
export const simulatePairApprove = /*#__PURE__*/ createSimulateContract({
  abi: pairAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"burn"`
 */
export const simulatePairBurn = /*#__PURE__*/ createSimulateContract({
  abi: pairAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"claimFees"`
 */
export const simulatePairClaimFees = /*#__PURE__*/ createSimulateContract({
  abi: pairAbi,
  functionName: 'claimFees',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"claimFeesFor"`
 */
export const simulatePairClaimFeesFor = /*#__PURE__*/ createSimulateContract({
  abi: pairAbi,
  functionName: 'claimFeesFor',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"mint"`
 */
export const simulatePairMint = /*#__PURE__*/ createSimulateContract({
  abi: pairAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"permit"`
 */
export const simulatePairPermit = /*#__PURE__*/ createSimulateContract({
  abi: pairAbi,
  functionName: 'permit',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"skim"`
 */
export const simulatePairSkim = /*#__PURE__*/ createSimulateContract({
  abi: pairAbi,
  functionName: 'skim',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"swap"`
 */
export const simulatePairSwap = /*#__PURE__*/ createSimulateContract({
  abi: pairAbi,
  functionName: 'swap',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"sync"`
 */
export const simulatePairSync = /*#__PURE__*/ createSimulateContract({
  abi: pairAbi,
  functionName: 'sync',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"transfer"`
 */
export const simulatePairTransfer = /*#__PURE__*/ createSimulateContract({
  abi: pairAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulatePairTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: pairAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link pairAbi}__
 */
export const watchPairEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: pairAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link pairAbi}__ and `eventName` set to `"Approval"`
 */
export const watchPairApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: pairAbi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link pairAbi}__ and `eventName` set to `"Burn"`
 */
export const watchPairBurnEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: pairAbi,
  eventName: 'Burn',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link pairAbi}__ and `eventName` set to `"Fees"`
 */
export const watchPairFeesEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: pairAbi,
  eventName: 'Fees',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link pairAbi}__ and `eventName` set to `"Mint"`
 */
export const watchPairMintEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: pairAbi,
  eventName: 'Mint',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link pairAbi}__ and `eventName` set to `"Swap"`
 */
export const watchPairSwapEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: pairAbi,
  eventName: 'Swap',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link pairAbi}__ and `eventName` set to `"Sync"`
 */
export const watchPairSyncEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: pairAbi,
  eventName: 'Sync',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link pairAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchPairTransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: pairAbi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairFactoryAbi}__
 */
export const readPairFactory = /*#__PURE__*/ createReadContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"MAX_FEE"`
 */
export const readPairFactoryMaxFee = /*#__PURE__*/ createReadContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
  functionName: 'MAX_FEE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"allPairs"`
 */
export const readPairFactoryAllPairs = /*#__PURE__*/ createReadContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
  functionName: 'allPairs',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"allPairsLength"`
 */
export const readPairFactoryAllPairsLength = /*#__PURE__*/ createReadContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
  functionName: 'allPairsLength',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"feeManager"`
 */
export const readPairFactoryFeeManager = /*#__PURE__*/ createReadContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
  functionName: 'feeManager',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"getFee"`
 */
export const readPairFactoryGetFee = /*#__PURE__*/ createReadContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
  functionName: 'getFee',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"getInitializable"`
 */
export const readPairFactoryGetInitializable = /*#__PURE__*/ createReadContract(
  {
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    functionName: 'getInitializable',
  },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"getPair"`
 */
export const readPairFactoryGetPair = /*#__PURE__*/ createReadContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
  functionName: 'getPair',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"isPair"`
 */
export const readPairFactoryIsPair = /*#__PURE__*/ createReadContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
  functionName: 'isPair',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"isPaused"`
 */
export const readPairFactoryIsPaused = /*#__PURE__*/ createReadContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
  functionName: 'isPaused',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"pairCodeHash"`
 */
export const readPairFactoryPairCodeHash = /*#__PURE__*/ createReadContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
  functionName: 'pairCodeHash',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"pauser"`
 */
export const readPairFactoryPauser = /*#__PURE__*/ createReadContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
  functionName: 'pauser',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"pendingFeeManager"`
 */
export const readPairFactoryPendingFeeManager =
  /*#__PURE__*/ createReadContract({
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    functionName: 'pendingFeeManager',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"pendingPauser"`
 */
export const readPairFactoryPendingPauser = /*#__PURE__*/ createReadContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
  functionName: 'pendingPauser',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"stableFee"`
 */
export const readPairFactoryStableFee = /*#__PURE__*/ createReadContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
  functionName: 'stableFee',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"volatileFee"`
 */
export const readPairFactoryVolatileFee = /*#__PURE__*/ createReadContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
  functionName: 'volatileFee',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairFactoryAbi}__
 */
export const writePairFactory = /*#__PURE__*/ createWriteContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"acceptFeeManager"`
 */
export const writePairFactoryAcceptFeeManager =
  /*#__PURE__*/ createWriteContract({
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    functionName: 'acceptFeeManager',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"acceptPauser"`
 */
export const writePairFactoryAcceptPauser = /*#__PURE__*/ createWriteContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
  functionName: 'acceptPauser',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"createPair"`
 */
export const writePairFactoryCreatePair = /*#__PURE__*/ createWriteContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
  functionName: 'createPair',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"setFee"`
 */
export const writePairFactorySetFee = /*#__PURE__*/ createWriteContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
  functionName: 'setFee',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"setFeeManager"`
 */
export const writePairFactorySetFeeManager = /*#__PURE__*/ createWriteContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
  functionName: 'setFeeManager',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"setPause"`
 */
export const writePairFactorySetPause = /*#__PURE__*/ createWriteContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
  functionName: 'setPause',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"setPauser"`
 */
export const writePairFactorySetPauser = /*#__PURE__*/ createWriteContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
  functionName: 'setPauser',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairFactoryAbi}__
 */
export const simulatePairFactory = /*#__PURE__*/ createSimulateContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"acceptFeeManager"`
 */
export const simulatePairFactoryAcceptFeeManager =
  /*#__PURE__*/ createSimulateContract({
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    functionName: 'acceptFeeManager',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"acceptPauser"`
 */
export const simulatePairFactoryAcceptPauser =
  /*#__PURE__*/ createSimulateContract({
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    functionName: 'acceptPauser',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"createPair"`
 */
export const simulatePairFactoryCreatePair =
  /*#__PURE__*/ createSimulateContract({
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    functionName: 'createPair',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"setFee"`
 */
export const simulatePairFactorySetFee = /*#__PURE__*/ createSimulateContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
  functionName: 'setFee',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"setFeeManager"`
 */
export const simulatePairFactorySetFeeManager =
  /*#__PURE__*/ createSimulateContract({
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    functionName: 'setFeeManager',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"setPause"`
 */
export const simulatePairFactorySetPause = /*#__PURE__*/ createSimulateContract(
  {
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    functionName: 'setPause',
  },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"setPauser"`
 */
export const simulatePairFactorySetPauser =
  /*#__PURE__*/ createSimulateContract({
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    functionName: 'setPauser',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link pairFactoryAbi}__
 */
export const watchPairFactoryEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link pairFactoryAbi}__ and `eventName` set to `"PairCreated"`
 */
export const watchPairFactoryPairCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    eventName: 'PairCreated',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link routerAbi}__
 */
export const readRouter = /*#__PURE__*/ createReadContract({
  abi: routerAbi,
  address: routerAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"factory"`
 */
export const readRouterFactory = /*#__PURE__*/ createReadContract({
  abi: routerAbi,
  address: routerAddress,
  functionName: 'factory',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"getAmountOut"`
 */
export const readRouterGetAmountOut = /*#__PURE__*/ createReadContract({
  abi: routerAbi,
  address: routerAddress,
  functionName: 'getAmountOut',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"getAmountsOut"`
 */
export const readRouterGetAmountsOut = /*#__PURE__*/ createReadContract({
  abi: routerAbi,
  address: routerAddress,
  functionName: 'getAmountsOut',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"getReserves"`
 */
export const readRouterGetReserves = /*#__PURE__*/ createReadContract({
  abi: routerAbi,
  address: routerAddress,
  functionName: 'getReserves',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"isPair"`
 */
export const readRouterIsPair = /*#__PURE__*/ createReadContract({
  abi: routerAbi,
  address: routerAddress,
  functionName: 'isPair',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"pairFor"`
 */
export const readRouterPairFor = /*#__PURE__*/ createReadContract({
  abi: routerAbi,
  address: routerAddress,
  functionName: 'pairFor',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"quoteAddLiquidity"`
 */
export const readRouterQuoteAddLiquidity = /*#__PURE__*/ createReadContract({
  abi: routerAbi,
  address: routerAddress,
  functionName: 'quoteAddLiquidity',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"quoteRemoveLiquidity"`
 */
export const readRouterQuoteRemoveLiquidity = /*#__PURE__*/ createReadContract({
  abi: routerAbi,
  address: routerAddress,
  functionName: 'quoteRemoveLiquidity',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"sortTokens"`
 */
export const readRouterSortTokens = /*#__PURE__*/ createReadContract({
  abi: routerAbi,
  address: routerAddress,
  functionName: 'sortTokens',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"weth"`
 */
export const readRouterWeth = /*#__PURE__*/ createReadContract({
  abi: routerAbi,
  address: routerAddress,
  functionName: 'weth',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link routerAbi}__
 */
export const writeRouter = /*#__PURE__*/ createWriteContract({
  abi: routerAbi,
  address: routerAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"UNSAFE_swapExactTokensForTokens"`
 */
export const writeRouterUnsafeSwapExactTokensForTokens =
  /*#__PURE__*/ createWriteContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'UNSAFE_swapExactTokensForTokens',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"addLiquidity"`
 */
export const writeRouterAddLiquidity = /*#__PURE__*/ createWriteContract({
  abi: routerAbi,
  address: routerAddress,
  functionName: 'addLiquidity',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"addLiquidityETH"`
 */
export const writeRouterAddLiquidityEth = /*#__PURE__*/ createWriteContract({
  abi: routerAbi,
  address: routerAddress,
  functionName: 'addLiquidityETH',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"removeLiquidity"`
 */
export const writeRouterRemoveLiquidity = /*#__PURE__*/ createWriteContract({
  abi: routerAbi,
  address: routerAddress,
  functionName: 'removeLiquidity',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"removeLiquidityETH"`
 */
export const writeRouterRemoveLiquidityEth = /*#__PURE__*/ createWriteContract({
  abi: routerAbi,
  address: routerAddress,
  functionName: 'removeLiquidityETH',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"removeLiquidityETHSupportingFeeOnTransferTokens"`
 */
export const writeRouterRemoveLiquidityEthSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createWriteContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'removeLiquidityETHSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"removeLiquidityETHWithPermit"`
 */
export const writeRouterRemoveLiquidityEthWithPermit =
  /*#__PURE__*/ createWriteContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'removeLiquidityETHWithPermit',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"`
 */
export const writeRouterRemoveLiquidityEthWithPermitSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createWriteContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"removeLiquidityWithPermit"`
 */
export const writeRouterRemoveLiquidityWithPermit =
  /*#__PURE__*/ createWriteContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'removeLiquidityWithPermit',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapExactETHForTokens"`
 */
export const writeRouterSwapExactEthForTokens =
  /*#__PURE__*/ createWriteContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'swapExactETHForTokens',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapExactETHForTokensSupportingFeeOnTransferTokens"`
 */
export const writeRouterSwapExactEthForTokensSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createWriteContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'swapExactETHForTokensSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapExactTokensForETH"`
 */
export const writeRouterSwapExactTokensForEth =
  /*#__PURE__*/ createWriteContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'swapExactTokensForETH',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapExactTokensForETHSupportingFeeOnTransferTokens"`
 */
export const writeRouterSwapExactTokensForEthSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createWriteContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'swapExactTokensForETHSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapExactTokensForTokens"`
 */
export const writeRouterSwapExactTokensForTokens =
  /*#__PURE__*/ createWriteContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'swapExactTokensForTokens',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapExactTokensForTokensSimple"`
 */
export const writeRouterSwapExactTokensForTokensSimple =
  /*#__PURE__*/ createWriteContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'swapExactTokensForTokensSimple',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapExactTokensForTokensSupportingFeeOnTransferTokens"`
 */
export const writeRouterSwapExactTokensForTokensSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createWriteContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'swapExactTokensForTokensSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link routerAbi}__
 */
export const simulateRouter = /*#__PURE__*/ createSimulateContract({
  abi: routerAbi,
  address: routerAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"UNSAFE_swapExactTokensForTokens"`
 */
export const simulateRouterUnsafeSwapExactTokensForTokens =
  /*#__PURE__*/ createSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'UNSAFE_swapExactTokensForTokens',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"addLiquidity"`
 */
export const simulateRouterAddLiquidity = /*#__PURE__*/ createSimulateContract({
  abi: routerAbi,
  address: routerAddress,
  functionName: 'addLiquidity',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"addLiquidityETH"`
 */
export const simulateRouterAddLiquidityEth =
  /*#__PURE__*/ createSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'addLiquidityETH',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"removeLiquidity"`
 */
export const simulateRouterRemoveLiquidity =
  /*#__PURE__*/ createSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'removeLiquidity',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"removeLiquidityETH"`
 */
export const simulateRouterRemoveLiquidityEth =
  /*#__PURE__*/ createSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'removeLiquidityETH',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"removeLiquidityETHSupportingFeeOnTransferTokens"`
 */
export const simulateRouterRemoveLiquidityEthSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'removeLiquidityETHSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"removeLiquidityETHWithPermit"`
 */
export const simulateRouterRemoveLiquidityEthWithPermit =
  /*#__PURE__*/ createSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'removeLiquidityETHWithPermit',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"`
 */
export const simulateRouterRemoveLiquidityEthWithPermitSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"removeLiquidityWithPermit"`
 */
export const simulateRouterRemoveLiquidityWithPermit =
  /*#__PURE__*/ createSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'removeLiquidityWithPermit',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapExactETHForTokens"`
 */
export const simulateRouterSwapExactEthForTokens =
  /*#__PURE__*/ createSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'swapExactETHForTokens',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapExactETHForTokensSupportingFeeOnTransferTokens"`
 */
export const simulateRouterSwapExactEthForTokensSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'swapExactETHForTokensSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapExactTokensForETH"`
 */
export const simulateRouterSwapExactTokensForEth =
  /*#__PURE__*/ createSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'swapExactTokensForETH',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapExactTokensForETHSupportingFeeOnTransferTokens"`
 */
export const simulateRouterSwapExactTokensForEthSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'swapExactTokensForETHSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapExactTokensForTokens"`
 */
export const simulateRouterSwapExactTokensForTokens =
  /*#__PURE__*/ createSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'swapExactTokensForTokens',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapExactTokensForTokensSimple"`
 */
export const simulateRouterSwapExactTokensForTokensSimple =
  /*#__PURE__*/ createSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'swapExactTokensForTokensSimple',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapExactTokensForTokensSupportingFeeOnTransferTokens"`
 */
export const simulateRouterSwapExactTokensForTokensSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'swapExactTokensForTokensSupportingFeeOnTransferTokens',
  })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20 = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"showMeTheMoney"`
 */
export const useWriteErc20ShowMeTheMoney = /*#__PURE__*/ createUseWriteContract(
  { abi: erc20Abi, functionName: 'showMeTheMoney' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"showMeTheMoney"`
 */
export const useSimulateErc20ShowMeTheMoney =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'showMeTheMoney',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20Transfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20Abi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__
 */
export const useReadPair = /*#__PURE__*/ createUseReadContract({ abi: pairAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const useReadPairDomainSeparator = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'DOMAIN_SEPARATOR',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"MINIMUM_LIQUIDITY"`
 */
export const useReadPairMinimumLiquidity = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'MINIMUM_LIQUIDITY',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"PERMIT_TYPEHASH"`
 */
export const useReadPairPermitTypehash = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'PERMIT_TYPEHASH',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadPairAllowance = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadPairBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"blockTimestampLast"`
 */
export const useReadPairBlockTimestampLast =
  /*#__PURE__*/ createUseReadContract({
    abi: pairAbi,
    functionName: 'blockTimestampLast',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"claimable0"`
 */
export const useReadPairClaimable0 = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'claimable0',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"claimable1"`
 */
export const useReadPairClaimable1 = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'claimable1',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"computeAmountOut"`
 */
export const useReadPairComputeAmountOut = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'computeAmountOut',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"current"`
 */
export const useReadPairCurrent = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'current',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"currentBlockTimestamp"`
 */
export const useReadPairCurrentBlockTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: pairAbi,
    functionName: 'currentBlockTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"currentCumulativePrices"`
 */
export const useReadPairCurrentCumulativePrices =
  /*#__PURE__*/ createUseReadContract({
    abi: pairAbi,
    functionName: 'currentCumulativePrices',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadPairDecimals = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"fees"`
 */
export const useReadPairFees = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'fees',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"getAmountOut"`
 */
export const useReadPairGetAmountOut = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'getAmountOut',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"getReserves"`
 */
export const useReadPairGetReserves = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'getReserves',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"index0"`
 */
export const useReadPairIndex0 = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'index0',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"index1"`
 */
export const useReadPairIndex1 = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'index1',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"lastObservation"`
 */
export const useReadPairLastObservation = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'lastObservation',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"name"`
 */
export const useReadPairName = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadPairNonces = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"observationLength"`
 */
export const useReadPairObservationLength = /*#__PURE__*/ createUseReadContract(
  { abi: pairAbi, functionName: 'observationLength' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"observations"`
 */
export const useReadPairObservations = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'observations',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"periodSize"`
 */
export const useReadPairPeriodSize = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'periodSize',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"price0CumulativeLast"`
 */
export const useReadPairPrice0CumulativeLast =
  /*#__PURE__*/ createUseReadContract({
    abi: pairAbi,
    functionName: 'price0CumulativeLast',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"price1CumulativeLast"`
 */
export const useReadPairPrice1CumulativeLast =
  /*#__PURE__*/ createUseReadContract({
    abi: pairAbi,
    functionName: 'price1CumulativeLast',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"prices"`
 */
export const useReadPairPrices = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'prices',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"quote"`
 */
export const useReadPairQuote = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'quote',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"reserve0"`
 */
export const useReadPairReserve0 = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'reserve0',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"reserve0Last"`
 */
export const useReadPairReserve0Last = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'reserve0Last',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"reserve1"`
 */
export const useReadPairReserve1 = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'reserve1',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"reserve1Last"`
 */
export const useReadPairReserve1Last = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'reserve1Last',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"sample"`
 */
export const useReadPairSample = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'sample',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"stable"`
 */
export const useReadPairStable = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'stable',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"supplyIndex0"`
 */
export const useReadPairSupplyIndex0 = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'supplyIndex0',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"supplyIndex1"`
 */
export const useReadPairSupplyIndex1 = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'supplyIndex1',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadPairSymbol = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"token0"`
 */
export const useReadPairToken0 = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'token0',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"token1"`
 */
export const useReadPairToken1 = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'token1',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadPairTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: pairAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pairAbi}__
 */
export const useWritePair = /*#__PURE__*/ createUseWriteContract({
  abi: pairAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"approve"`
 */
export const useWritePairApprove = /*#__PURE__*/ createUseWriteContract({
  abi: pairAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"burn"`
 */
export const useWritePairBurn = /*#__PURE__*/ createUseWriteContract({
  abi: pairAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"claimFees"`
 */
export const useWritePairClaimFees = /*#__PURE__*/ createUseWriteContract({
  abi: pairAbi,
  functionName: 'claimFees',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"claimFeesFor"`
 */
export const useWritePairClaimFeesFor = /*#__PURE__*/ createUseWriteContract({
  abi: pairAbi,
  functionName: 'claimFeesFor',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"mint"`
 */
export const useWritePairMint = /*#__PURE__*/ createUseWriteContract({
  abi: pairAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"permit"`
 */
export const useWritePairPermit = /*#__PURE__*/ createUseWriteContract({
  abi: pairAbi,
  functionName: 'permit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"skim"`
 */
export const useWritePairSkim = /*#__PURE__*/ createUseWriteContract({
  abi: pairAbi,
  functionName: 'skim',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"swap"`
 */
export const useWritePairSwap = /*#__PURE__*/ createUseWriteContract({
  abi: pairAbi,
  functionName: 'swap',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"sync"`
 */
export const useWritePairSync = /*#__PURE__*/ createUseWriteContract({
  abi: pairAbi,
  functionName: 'sync',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"transfer"`
 */
export const useWritePairTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: pairAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWritePairTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: pairAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pairAbi}__
 */
export const useSimulatePair = /*#__PURE__*/ createUseSimulateContract({
  abi: pairAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulatePairApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: pairAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulatePairBurn = /*#__PURE__*/ createUseSimulateContract({
  abi: pairAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"claimFees"`
 */
export const useSimulatePairClaimFees = /*#__PURE__*/ createUseSimulateContract(
  { abi: pairAbi, functionName: 'claimFees' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"claimFeesFor"`
 */
export const useSimulatePairClaimFeesFor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pairAbi,
    functionName: 'claimFeesFor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulatePairMint = /*#__PURE__*/ createUseSimulateContract({
  abi: pairAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"permit"`
 */
export const useSimulatePairPermit = /*#__PURE__*/ createUseSimulateContract({
  abi: pairAbi,
  functionName: 'permit',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"skim"`
 */
export const useSimulatePairSkim = /*#__PURE__*/ createUseSimulateContract({
  abi: pairAbi,
  functionName: 'skim',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"swap"`
 */
export const useSimulatePairSwap = /*#__PURE__*/ createUseSimulateContract({
  abi: pairAbi,
  functionName: 'swap',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"sync"`
 */
export const useSimulatePairSync = /*#__PURE__*/ createUseSimulateContract({
  abi: pairAbi,
  functionName: 'sync',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulatePairTransfer = /*#__PURE__*/ createUseSimulateContract({
  abi: pairAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulatePairTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pairAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pairAbi}__
 */
export const useWatchPairEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: pairAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pairAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchPairApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pairAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pairAbi}__ and `eventName` set to `"Burn"`
 */
export const useWatchPairBurnEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: pairAbi,
  eventName: 'Burn',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pairAbi}__ and `eventName` set to `"Fees"`
 */
export const useWatchPairFeesEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: pairAbi,
  eventName: 'Fees',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pairAbi}__ and `eventName` set to `"Mint"`
 */
export const useWatchPairMintEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: pairAbi,
  eventName: 'Mint',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pairAbi}__ and `eventName` set to `"Swap"`
 */
export const useWatchPairSwapEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: pairAbi,
  eventName: 'Swap',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pairAbi}__ and `eventName` set to `"Sync"`
 */
export const useWatchPairSyncEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: pairAbi,
  eventName: 'Sync',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pairAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchPairTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pairAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairFactoryAbi}__
 */
export const useReadPairFactory = /*#__PURE__*/ createUseReadContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"MAX_FEE"`
 */
export const useReadPairFactoryMaxFee = /*#__PURE__*/ createUseReadContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
  functionName: 'MAX_FEE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"allPairs"`
 */
export const useReadPairFactoryAllPairs = /*#__PURE__*/ createUseReadContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
  functionName: 'allPairs',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"allPairsLength"`
 */
export const useReadPairFactoryAllPairsLength =
  /*#__PURE__*/ createUseReadContract({
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    functionName: 'allPairsLength',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"feeManager"`
 */
export const useReadPairFactoryFeeManager = /*#__PURE__*/ createUseReadContract(
  {
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    functionName: 'feeManager',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"getFee"`
 */
export const useReadPairFactoryGetFee = /*#__PURE__*/ createUseReadContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
  functionName: 'getFee',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"getInitializable"`
 */
export const useReadPairFactoryGetInitializable =
  /*#__PURE__*/ createUseReadContract({
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    functionName: 'getInitializable',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"getPair"`
 */
export const useReadPairFactoryGetPair = /*#__PURE__*/ createUseReadContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
  functionName: 'getPair',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"isPair"`
 */
export const useReadPairFactoryIsPair = /*#__PURE__*/ createUseReadContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
  functionName: 'isPair',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"isPaused"`
 */
export const useReadPairFactoryIsPaused = /*#__PURE__*/ createUseReadContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
  functionName: 'isPaused',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"pairCodeHash"`
 */
export const useReadPairFactoryPairCodeHash =
  /*#__PURE__*/ createUseReadContract({
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    functionName: 'pairCodeHash',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"pauser"`
 */
export const useReadPairFactoryPauser = /*#__PURE__*/ createUseReadContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
  functionName: 'pauser',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"pendingFeeManager"`
 */
export const useReadPairFactoryPendingFeeManager =
  /*#__PURE__*/ createUseReadContract({
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    functionName: 'pendingFeeManager',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"pendingPauser"`
 */
export const useReadPairFactoryPendingPauser =
  /*#__PURE__*/ createUseReadContract({
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    functionName: 'pendingPauser',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"stableFee"`
 */
export const useReadPairFactoryStableFee = /*#__PURE__*/ createUseReadContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
  functionName: 'stableFee',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"volatileFee"`
 */
export const useReadPairFactoryVolatileFee =
  /*#__PURE__*/ createUseReadContract({
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    functionName: 'volatileFee',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pairFactoryAbi}__
 */
export const useWritePairFactory = /*#__PURE__*/ createUseWriteContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"acceptFeeManager"`
 */
export const useWritePairFactoryAcceptFeeManager =
  /*#__PURE__*/ createUseWriteContract({
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    functionName: 'acceptFeeManager',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"acceptPauser"`
 */
export const useWritePairFactoryAcceptPauser =
  /*#__PURE__*/ createUseWriteContract({
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    functionName: 'acceptPauser',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"createPair"`
 */
export const useWritePairFactoryCreatePair =
  /*#__PURE__*/ createUseWriteContract({
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    functionName: 'createPair',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"setFee"`
 */
export const useWritePairFactorySetFee = /*#__PURE__*/ createUseWriteContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
  functionName: 'setFee',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"setFeeManager"`
 */
export const useWritePairFactorySetFeeManager =
  /*#__PURE__*/ createUseWriteContract({
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    functionName: 'setFeeManager',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"setPause"`
 */
export const useWritePairFactorySetPause = /*#__PURE__*/ createUseWriteContract(
  {
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    functionName: 'setPause',
  },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"setPauser"`
 */
export const useWritePairFactorySetPauser =
  /*#__PURE__*/ createUseWriteContract({
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    functionName: 'setPauser',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pairFactoryAbi}__
 */
export const useSimulatePairFactory = /*#__PURE__*/ createUseSimulateContract({
  abi: pairFactoryAbi,
  address: pairFactoryAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"acceptFeeManager"`
 */
export const useSimulatePairFactoryAcceptFeeManager =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    functionName: 'acceptFeeManager',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"acceptPauser"`
 */
export const useSimulatePairFactoryAcceptPauser =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    functionName: 'acceptPauser',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"createPair"`
 */
export const useSimulatePairFactoryCreatePair =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    functionName: 'createPair',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"setFee"`
 */
export const useSimulatePairFactorySetFee =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    functionName: 'setFee',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"setFeeManager"`
 */
export const useSimulatePairFactorySetFeeManager =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    functionName: 'setFeeManager',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"setPause"`
 */
export const useSimulatePairFactorySetPause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    functionName: 'setPause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pairFactoryAbi}__ and `functionName` set to `"setPauser"`
 */
export const useSimulatePairFactorySetPauser =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    functionName: 'setPauser',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pairFactoryAbi}__
 */
export const useWatchPairFactoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pairFactoryAbi}__ and `eventName` set to `"PairCreated"`
 */
export const useWatchPairFactoryPairCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pairFactoryAbi,
    address: pairFactoryAddress,
    eventName: 'PairCreated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link routerAbi}__
 */
export const useReadRouter = /*#__PURE__*/ createUseReadContract({
  abi: routerAbi,
  address: routerAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"factory"`
 */
export const useReadRouterFactory = /*#__PURE__*/ createUseReadContract({
  abi: routerAbi,
  address: routerAddress,
  functionName: 'factory',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"getAmountOut"`
 */
export const useReadRouterGetAmountOut = /*#__PURE__*/ createUseReadContract({
  abi: routerAbi,
  address: routerAddress,
  functionName: 'getAmountOut',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"getAmountsOut"`
 */
export const useReadRouterGetAmountsOut = /*#__PURE__*/ createUseReadContract({
  abi: routerAbi,
  address: routerAddress,
  functionName: 'getAmountsOut',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"getReserves"`
 */
export const useReadRouterGetReserves = /*#__PURE__*/ createUseReadContract({
  abi: routerAbi,
  address: routerAddress,
  functionName: 'getReserves',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"isPair"`
 */
export const useReadRouterIsPair = /*#__PURE__*/ createUseReadContract({
  abi: routerAbi,
  address: routerAddress,
  functionName: 'isPair',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"pairFor"`
 */
export const useReadRouterPairFor = /*#__PURE__*/ createUseReadContract({
  abi: routerAbi,
  address: routerAddress,
  functionName: 'pairFor',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"quoteAddLiquidity"`
 */
export const useReadRouterQuoteAddLiquidity =
  /*#__PURE__*/ createUseReadContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'quoteAddLiquidity',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"quoteRemoveLiquidity"`
 */
export const useReadRouterQuoteRemoveLiquidity =
  /*#__PURE__*/ createUseReadContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'quoteRemoveLiquidity',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"sortTokens"`
 */
export const useReadRouterSortTokens = /*#__PURE__*/ createUseReadContract({
  abi: routerAbi,
  address: routerAddress,
  functionName: 'sortTokens',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"weth"`
 */
export const useReadRouterWeth = /*#__PURE__*/ createUseReadContract({
  abi: routerAbi,
  address: routerAddress,
  functionName: 'weth',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link routerAbi}__
 */
export const useWriteRouter = /*#__PURE__*/ createUseWriteContract({
  abi: routerAbi,
  address: routerAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"UNSAFE_swapExactTokensForTokens"`
 */
export const useWriteRouterUnsafeSwapExactTokensForTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'UNSAFE_swapExactTokensForTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"addLiquidity"`
 */
export const useWriteRouterAddLiquidity = /*#__PURE__*/ createUseWriteContract({
  abi: routerAbi,
  address: routerAddress,
  functionName: 'addLiquidity',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"addLiquidityETH"`
 */
export const useWriteRouterAddLiquidityEth =
  /*#__PURE__*/ createUseWriteContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'addLiquidityETH',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"removeLiquidity"`
 */
export const useWriteRouterRemoveLiquidity =
  /*#__PURE__*/ createUseWriteContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'removeLiquidity',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"removeLiquidityETH"`
 */
export const useWriteRouterRemoveLiquidityEth =
  /*#__PURE__*/ createUseWriteContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'removeLiquidityETH',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"removeLiquidityETHSupportingFeeOnTransferTokens"`
 */
export const useWriteRouterRemoveLiquidityEthSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'removeLiquidityETHSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"removeLiquidityETHWithPermit"`
 */
export const useWriteRouterRemoveLiquidityEthWithPermit =
  /*#__PURE__*/ createUseWriteContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'removeLiquidityETHWithPermit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"`
 */
export const useWriteRouterRemoveLiquidityEthWithPermitSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"removeLiquidityWithPermit"`
 */
export const useWriteRouterRemoveLiquidityWithPermit =
  /*#__PURE__*/ createUseWriteContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'removeLiquidityWithPermit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapExactETHForTokens"`
 */
export const useWriteRouterSwapExactEthForTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'swapExactETHForTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapExactETHForTokensSupportingFeeOnTransferTokens"`
 */
export const useWriteRouterSwapExactEthForTokensSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'swapExactETHForTokensSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapExactTokensForETH"`
 */
export const useWriteRouterSwapExactTokensForEth =
  /*#__PURE__*/ createUseWriteContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'swapExactTokensForETH',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapExactTokensForETHSupportingFeeOnTransferTokens"`
 */
export const useWriteRouterSwapExactTokensForEthSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'swapExactTokensForETHSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapExactTokensForTokens"`
 */
export const useWriteRouterSwapExactTokensForTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'swapExactTokensForTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapExactTokensForTokensSimple"`
 */
export const useWriteRouterSwapExactTokensForTokensSimple =
  /*#__PURE__*/ createUseWriteContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'swapExactTokensForTokensSimple',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapExactTokensForTokensSupportingFeeOnTransferTokens"`
 */
export const useWriteRouterSwapExactTokensForTokensSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'swapExactTokensForTokensSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link routerAbi}__
 */
export const useSimulateRouter = /*#__PURE__*/ createUseSimulateContract({
  abi: routerAbi,
  address: routerAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"UNSAFE_swapExactTokensForTokens"`
 */
export const useSimulateRouterUnsafeSwapExactTokensForTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'UNSAFE_swapExactTokensForTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"addLiquidity"`
 */
export const useSimulateRouterAddLiquidity =
  /*#__PURE__*/ createUseSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'addLiquidity',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"addLiquidityETH"`
 */
export const useSimulateRouterAddLiquidityEth =
  /*#__PURE__*/ createUseSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'addLiquidityETH',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"removeLiquidity"`
 */
export const useSimulateRouterRemoveLiquidity =
  /*#__PURE__*/ createUseSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'removeLiquidity',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"removeLiquidityETH"`
 */
export const useSimulateRouterRemoveLiquidityEth =
  /*#__PURE__*/ createUseSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'removeLiquidityETH',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"removeLiquidityETHSupportingFeeOnTransferTokens"`
 */
export const useSimulateRouterRemoveLiquidityEthSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'removeLiquidityETHSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"removeLiquidityETHWithPermit"`
 */
export const useSimulateRouterRemoveLiquidityEthWithPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'removeLiquidityETHWithPermit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"`
 */
export const useSimulateRouterRemoveLiquidityEthWithPermitSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"removeLiquidityWithPermit"`
 */
export const useSimulateRouterRemoveLiquidityWithPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'removeLiquidityWithPermit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapExactETHForTokens"`
 */
export const useSimulateRouterSwapExactEthForTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'swapExactETHForTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapExactETHForTokensSupportingFeeOnTransferTokens"`
 */
export const useSimulateRouterSwapExactEthForTokensSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'swapExactETHForTokensSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapExactTokensForETH"`
 */
export const useSimulateRouterSwapExactTokensForEth =
  /*#__PURE__*/ createUseSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'swapExactTokensForETH',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapExactTokensForETHSupportingFeeOnTransferTokens"`
 */
export const useSimulateRouterSwapExactTokensForEthSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'swapExactTokensForETHSupportingFeeOnTransferTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapExactTokensForTokens"`
 */
export const useSimulateRouterSwapExactTokensForTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'swapExactTokensForTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapExactTokensForTokensSimple"`
 */
export const useSimulateRouterSwapExactTokensForTokensSimple =
  /*#__PURE__*/ createUseSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'swapExactTokensForTokensSimple',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link routerAbi}__ and `functionName` set to `"swapExactTokensForTokensSupportingFeeOnTransferTokens"`
 */
export const useSimulateRouterSwapExactTokensForTokensSupportingFeeOnTransferTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: routerAbi,
    address: routerAddress,
    functionName: 'swapExactTokensForTokensSupportingFeeOnTransferTokens',
  })
