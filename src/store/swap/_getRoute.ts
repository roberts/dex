
import BigNumber from 'bignumber.js';
import { parseUnits } from 'viem';
import {
  readContracts,
} from '@wagmi/core';

import { Pair, Route, SubRoute, SwapQuote, Token } from '@/interfaces';
import { useSwapStore } from './swapStore';
import { useBaseAssetStore } from '@/store/baseAssetsStore';
import { usePairStore } from '@/store/pairsStore';
import { CONTRACTS } from '@/config';
import { wagmiConfig } from '@/config/wagmiConfig';

import generateToast from '@/components/toast/generateToast';

const quoteForWETH = (from: Token, to: Token, amount: string) => {
  return {
    from: from,
    to: to,
    inAmount: amount,
    outAmount: amount,
    routes: [
      {
        percentage: 100,
        subRoutes: [
          {
            from: from,
            to: to,
            pairAddress: '',
            percentage: 100,
          },
        ],
      },
    ],
    priceImpact: '0',
    type: 'internal',
  } as SwapQuote;
};
const _internalRouting = async () => {
  try {
    const { inputAsset, outputAsset, amountRaw, slippage } =
      useSwapStore.getState();
    if (Number(amountRaw) > 0) {
      const { getBaseAsset } = useBaseAssetStore.getState().actions;
      const { pairs } = usePairStore.getState();

      console.log("Mike inputAsset : ", inputAsset);
      console.log("Mike outputAsset : ", outputAsset);
      // If we swap from WETH to ETH or ETH to WETH
      if (isWETHSwap(inputAsset as Token, outputAsset as Token)) {
        return quoteForWETH(
          inputAsset as Token,
          outputAsset as Token,
          amountRaw
        );
      }
      let inputAux = inputAsset as Token;
      let outputAux = outputAsset as Token;

      console.log("Mike inputAux : ", inputAux.address);
      console.log("Mike outputAux : ", outputAux.address);
      console.log("Mike CONTRACTS.ETH_ADDRESS : ", CONTRACTS.ETH_ADDRESS);
      console.log("Mike CONTRACTS.WETH_ADDRESS : ", CONTRACTS.WETH_ADDRESS);
      // Check if routing is from ETH in order to use WETH
      if (inputAux.address === CONTRACTS.ETH_ADDRESS) {
        console.log("Mike CONTRACTS.ETH_ADDRESS : ", CONTRACTS.ETH_ADDRESS);
        inputAux = getBaseAsset(CONTRACTS.WETH_ADDRESS) as Token;
      } else if (outputAux.address === CONTRACTS.ETH_ADDRESS) {
        console.log("Mike CONTRACTS.WETH_ADDRESS : ", CONTRACTS.WETH_ADDRESS);
        outputAux = getBaseAsset(CONTRACTS.WETH_ADDRESS) as Token;
      }
      console.log("Mike pairs : ", pairs);
      const routes: Route[] = discoverRoutesForTokens(
        pairs,
        inputAux,
        outputAux
      );
      console.log("Mike 1 : ");

      const from = inputAsset as Token;
      const to = outputAsset as Token;
      const inAmount = amountRaw;
      console.log("Mike 2 : ", amountRaw);
      const { route, outAmount, } =
        await _calcBestAmountOutAndPriceImpact(inAmount, routes);

      console.log("Mike 3 : ");
      const swapQuote: SwapQuote = {
        from: from,
        to: to,
        inAmount: inAmount,
        outAmount: outAmount,
        routes: [route],
        type: 'internal',
      };

      console.log("Mike 4 swapQuote: ", swapQuote);
      return swapQuote;
    }
  } catch (error) {
    console.log(error);
    generateToast(
      'Valid route not found',
      'Cannot find a valid route for the given tokens',
      'error'
    );
    return {} as SwapQuote;
  }
};
// Prepares routes objects (internal routing)
const discoverRoutesForTokens = (pairs: Pair[], from: Token, to: Token) => {
  const paths: Array<Array<Pair>> = [];
  // TODO: MOVE TO ENV
  const ROUTE_MAX_LENGTH = 3;
  console.log("Mike 11 : from : ", from);
  console.log("Mike 11 : to : ", to);
  console.log("Mike 11 : ", ROUTE_MAX_LENGTH);
  _computeRoutesForToken(
    from.address,
    to.address,
    pairs,
    ROUTE_MAX_LENGTH,
    [],
    paths
  );
  const routes: Route[] = [];
  let fromAsset: Token, toAsset: Token, subRoutes: SubRoute[];

  console.log("Mike 12 : ");
  for (let path of paths) {
    fromAsset = from;
    subRoutes = [];
    for (let subRoute of path) {
      toAsset =
        subRoute.token0.address === fromAsset.address
          ? subRoute.token1
          : subRoute.token0;
      subRoutes.push({
        from: fromAsset,
        to: toAsset,
        pairAddress: subRoute.address,
        percentage: 100,
      });

      fromAsset = toAsset;
    }
    routes.push({ percentage: 100, subRoutes: subRoutes });
  }
  console.log("Mike 13 : routes : ", routes);
  return routes;
};
// Searches all possible routes given from and to tokens (internal routing)
const _computeRoutesForToken = (
    fromAddress: string,
    toAddress: string,
    pairs: Pair[],
    maxLength: number,
    currentPath: Array<Pair>,
    allPaths: Array<Array<Pair>>
  ) => {
    console.log("Mike 111 : ");
    for (let pair of pairs) {
      console.log("Mike 111 _1 : ");
      if (
        currentPath.indexOf(pair) !== -1 ||
        !(
          pair.token0?.address === fromAddress ||
          pair.token1?.address === fromAddress
        ) ||
        pair.tvl === 0 ||
        pair.reserve0 < 0.005 ||
        pair.reserve1 < 0.005
      )
        continue;
  
        console.log("Mike 111 _2 : ");
      const newFromAddress =
        pair.token0.address === fromAddress
          ? pair.token1.address
          : pair.token0.address;
  
          console.log("Mike 111 _3 : ");
      if (newFromAddress === toAddress) {
        allPaths.push([...currentPath, pair]);
      } else if (maxLength > 1) {
        _computeRoutesForToken(
          newFromAddress,
          toAddress,
          pairs,
          maxLength - 1,
          [...currentPath, pair],
          allPaths
        );
      }
    }
  };
  
const isWETHSwap = (from: Token, to: Token) => {
  const addresses = [CONTRACTS.WETH_ADDRESS, CONTRACTS.ETH_ADDRESS].map(
    addr => addr.toLowerCase()
  );

  return (
    addresses.includes(to.address.toLowerCase()) &&
    addresses.includes(from.address.toLowerCase())
  );
};

// Function to get the amounts out
const _getAmountsOut = async (
  inAmount: string,
  paths: Route[],
  internalRouting: boolean
) => {
  const routerContract = {
    address: CONTRACTS.ROUTER_ADDRESS as `0x${string}`,
    abi: CONTRACTS.ROUTER_ABI,
    functionName: 'getAmountsOut',
  };

  let getAmountsOutMulticall = [];
  for (let path of paths) {
    const partialAmount = internalRouting
      ? parseUnits(
          `${Number(inAmount)}`,
          path.subRoutes[0].from.decimals as number
        )
      : parseUnits(
          `${(Number(inAmount) * path.percentage) / 100}`,
          path.subRoutes[0].from.decimals as number
        );

    const routes: {
      from: `0x${string}`;
      to: `0x${string}`;
    }[] = path.subRoutes.map((subRoute: SubRoute) => {
      return {
        from: subRoute.from.address,
        to: subRoute.to.address,
      };
    });
    const argsFromSubRoutes = [partialAmount, routes];

    getAmountsOutMulticall.push({
      ...routerContract,
      args: argsFromSubRoutes,
    });
  }
  if (getAmountsOutMulticall.length === 0) return '0';
  let amountsOut: any = await readContracts(wagmiConfig, {
    contracts: getAmountsOutMulticall,
  })
    .then(res => {
      return res.map((amounts: any) => ({
        amounts: amounts.result as number,
      }));
    })
    .catch(err => {
      console.log(err);
      return [];
    });
  return amountsOut;
};

// Gets the best route and calcs the price impact
const _calcBestAmountOutAndPriceImpact = async (
  inAmount: string,
  paths: Route[]
) => {
  const amountsOut = await _getAmountsOut(inAmount, paths, true);

  const to = useSwapStore.getState().outputAsset as Token;
  let newAmountsOut = [];
  for (let i = 0; i < amountsOut.length; i++) {
    if (amountsOut[i].amounts === undefined) {
      continue;
    }
    newAmountsOut.push({
      receiveAmounts: amountsOut[i],
      finalValue: BigNumber(
        amountsOut[i].amounts[amountsOut[i].amounts.length - 1]
      )
        .div(10 ** Number(to.decimals))
        .toFixed(Number(to.decimals)),
      route: paths[i],
    });
  }
  const bestAmountOut = newAmountsOut
    .filter((ret: any) => {
      return ret != null;
    })
    .reduce((best: any, current) => {
      if (!best) {
        return current;
      }
      return BigNumber(best.finalValue).gt(current.finalValue) ? best : current;
    }, 0);

  return {
    route: bestAmountOut.route,
    outAmount: bestAmountOut.finalValue,
  };
};
/*********************************************************************************************/

const _getRoute = async () => {
  const { amountRaw } =
    useSwapStore.getState();

  console.log("Mike amountRaw : ", amountRaw);
  if (Number(amountRaw) > 0) {
    return await _internalRouting();
  }
};

export default _getRoute;
