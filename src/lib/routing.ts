import {
    AlphaRouter,
    SwapOptionsSwapRouter02,
    SwapRoute,
    SwapType,
  } from '@uniswap/smart-order-router'
  import { ChainId } from '@uniswap/sdk-core';
  import { TradeType, CurrencyAmount, Percent, Token } from '@uniswap/sdk-core'
  import { CurrentConfig } from './config'
  import {
    getBaseProvider,
  } from './providers'
  import { fromReadableAmount } from './conversion'
  
  // export async function generateRoute(): Promise<SwapRoute | null> {
  //   const router = new AlphaRouter({
  //     chainId: ChainId.BASE,
  //     provider: getBaseProvider(),
  //   })
  
  //   const options: SwapOptionsSwapRouter02 = {
  //     recipient: "",
  //     slippageTolerance: new Percent(50, 10_000),
  //     deadline: Math.floor(Date.now() / 1000 + 1800),
  //     type: SwapType.SWAP_ROUTER_02,
  //   }
  
  //   const route = await router.route(
  //     CurrencyAmount.fromRawAmount(
  //       CurrentConfig.tokens.in,
  //       fromReadableAmount(
  //         CurrentConfig.tokens.amountIn,
  //         CurrentConfig.tokens.in.decimals
  //       ).toString()
  //     ),
  //     CurrentConfig.tokens.out,
  //     TradeType.EXACT_INPUT,
  //     options
  //   )
  
  //   return route
  // }
  
  