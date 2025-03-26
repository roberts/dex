'use client';

import Link from "next/link";
import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import BigNumber from 'bignumber.js';
import { add, getUnixTime } from 'date-fns';

import SwampAvatar from '@/components/core/SwampAvatar';
import SwapButton from './components/SwapButton';
import { CONTRACTS } from '@/config';
import {
  // prepareWriteErc20,
  // prepareWriteRouter,
  // prepareWriteWrappedKava,
  readErc20,
  simulateRouterSwapExactEthForTokensSupportingFeeOnTransferTokens,
  simulateRouterSwapExactTokensForEthSupportingFeeOnTransferTokens,
  simulateRouterSwapExactTokensForTokensSupportingFeeOnTransferTokens,
  simulateErc20Approve,
  writeRouterSwapExactEthForTokensSupportingFeeOnTransferTokens,
  writeRouterSwapExactTokensForEthSupportingFeeOnTransferTokens,
  writeRouterSwapExactTokensForTokensSupportingFeeOnTransferTokens,
  writeErc20Approve,
  // writeWrappedKava,
} from '@/lib/swamp';
import { getBalanceInWei, getBigNumberFromString } from '@/utils/formatBalance';
import { displayNumber } from '@/utils/formatNumbers';
import { wagmiConfig } from '@/config/wagmiConfig';
import { Token, TransactionText } from '@/interfaces';
import { callContractWait } from '@/lib/callContractWait';
import generateToast from '@/components/toast/generateToast';

import {
  Avatar,
  Box,
  Button,
  Flex,
  InputGroup,
  NumberInput,
  NumberInputField,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent
} from '@chakra-ui/react';
import { useState } from 'react';
import TokenSelector from '@/components/uis/TokenSelector';
import { useSwapStore } from '@/store/swap/swapStore';
import { shallow } from 'zustand/shallow';

export default function Home() {
  const { address, status, isConnected } = useAccount();
  const [inputBalance, setInputBalance] = useState('');
  const {
    inputAsset,
    outputAsset,
  } = useSwapStore(
    state => ({
      inputAsset: state.inputAsset,
      outputAsset: state.outputAsset,
    }),
    shallow
  );

  const {
    initAssets,
  } = useSwapStore(
    state => ({
      initAssets: state.actions.initAssets,
    }),
    shallow
  );
  const handleChange = (valueAsString: string, valueAsNumber: number) => {
    setInputBalance(valueAsString);
  };
  useEffect(() => {
    initAssets();
  }, [address, isConnected]);
  
  const onSwapClick = async () => {
    // try {
        //* 1st step: check allowance
        if(inputAsset?.address === undefined || outputAsset?.address === undefined) {
          generateToast("Invalid tokens", "Please select in & out tokens", 'error');
          return;
        }
        const allowance = await checkAllowanceAndApprove(
          CONTRACTS.ROUTER_ADDRESS
        );
        if (!allowance) return;
        //* 2nd step: swap
        let slippage = 5;   // set slippage tolerance as 5% as temporary
        const sendSlippage = BigNumber(100).minus(slippage).div(100);
        const inAmountBigInt = getBalanceInWei(
          inputBalance!,
          inputAsset?.decimals! as number
        ).toBigInt();

        // const minAmountOutBigInt = getBalanceInWei(
        //   BigNumber(swapQuote?.outAmount!)
        //     .times(sendSlippage)
        //     .toFixed(outputAsset?.decimals! as number),
        //   outputAsset?.decimals! as number
        // ).toBigInt();
        const minAmountOutBigInt = 0;


        const deadline = BigInt(
          getUnixTime(add(Date.now(), { seconds: Number(100) }))
        );

        console.log(inputAsset);
        console.log(outputAsset);
        const rawRoutes: {
          from: `0x${string}`;
          to: `0x${string}`;
          stable: boolean;
        }[] = [{
          from: inputAsset?.address! === CONTRACTS.COIN_ADDRESS ? CONTRACTS.WETH_ADDRESS : inputAsset?.address!,
          to: outputAsset?.address! === CONTRACTS.COIN_ADDRESS ? CONTRACTS.WETH_ADDRESS : outputAsset?.address!,
          stable: false,
        }]
        // const rawRoutes = [inputAsset?.address!, outputAsset?.address!];

        const transactionToast: TransactionText = {
          title: 'Swap has been successful!',
          description: `Swapped ${inputBalance!} ${
            inputAsset?.symbol
          } to ${displayNumber("0xaaaaaaaaaa")} ${outputAsset?.symbol}`,
        };

        if (
          inputAsset?.address.toLowerCase() ===
          CONTRACTS.COIN_ADDRESS.toLowerCase()
        ) {
          console.log("Mike 7", rawRoutes);   
          console.log("Mike 7", address);   
          // const { request } = 
          await writeRouterSwapExactEthForTokensSupportingFeeOnTransferTokens(wagmiConfig, {
            ///@ts-expect-error
            args: [minAmountOutBigInt, rawRoutes, address!, deadline],
            value: inAmountBigInt,
          });
          console.log("Mike 77");   
          // await callContractWait(request, transactionToast);
        } else if (
          outputAsset?.address.toLowerCase() ===
          CONTRACTS.COIN_ADDRESS.toLowerCase()
        ) {
          console.log("Mike 8");   
          // const { request } = 
          await writeRouterSwapExactTokensForEthSupportingFeeOnTransferTokens(wagmiConfig, {
            args: [
              //@ts-ignore
              inAmountBigInt,
              //@ts-ignore
              minAmountOutBigInt,
              rawRoutes,
              address!,
              deadline,
            ],
          });
          // await callContractWait(request, transactionToast);
        } else {
          console.log("Mike 9");   
          // const { request } = 
          await writeRouterSwapExactTokensForTokensSupportingFeeOnTransferTokens(wagmiConfig, {
            args: [
                //@ts-ignore
                inAmountBigInt,
                //@ts-ignore
                minAmountOutBigInt,
                rawRoutes,
                address!,
                deadline,
            ],
          });
          // await callContractWait(request, transactionToast);
        }
      
    // } catch (err) {
    //   console.log(err);
    //   generateToast(
    //     'Swap has failed!',
    //     'Please try again later, if the problem persists contact support.',
    //     'error'
    //   );
    //   // updateAssets();
    // }

    alert("swap done");    
  }

  const checkAllowanceAndApprove = async (routerAddress: `0x${string}`) => {
    if (
      inputAsset?.address.toLowerCase() !== CONTRACTS.COIN_ADDRESS.toLowerCase()
    ) {
      let allowance: bigint | BigNumber = await readErc20(wagmiConfig, {
        address: inputAsset?.address!,
        functionName: 'allowance',
        args: [address!, routerAddress],
      });
      allowance = BigNumber(Number(allowance)).div(
        10 ** Number(inputAsset?.decimals!)
      );
      console.log(inputBalance);
      if (allowance.gt(inputBalance)) {
        console.log('allowance is enough');
        return true;
      } else {
        console.log('allowance is not enough');
        const inAmountBigInt = getBalanceInWei(
          inputBalance,
          inputAsset?.decimals! as number
        ).toBigInt();
        // const { request } = 
        await writeErc20Approve(wagmiConfig, {
          address: inputAsset?.address!,
          args: [routerAddress, inAmountBigInt],
        });

        // return await callContractWait(request, {
        //   title: 'Approve has been successful!',
        //   description: `Token ${inputAsset?.symbol} has been approved!`,
        // });
      }
    }
    return true;
  };
  return (
    <Box className="w-full flex flex-col" fontFamily={'Proto'}>
      <Box className="flex justify-center mt-4">
        <Box className='block p-4 bg-gray-500/10 rounded-2xl'>
          <Flex justifyContent='space-between'>
            <Link href="/swap" passHref>
              <Box className='p-2 px-4 m-2 bg-gray-200 dark:bg-gray-800 rounded-lg'> Swap </Box>
            </Link>
            {/* <Link href="/limit" passHref> */}
              <Box className='p-2 px-4 m-2 bg-gray-200 dark:bg-gray-800 rounded-lg'> Limit </Box>
            {/* </Link> */}
            {/* <Link href="/send" passHref> */}
              <Box className='p-2 px-4 m-2 bg-gray-200 dark:bg-gray-800 rounded-lg'> Send </Box>
            {/* </Link> */}
            {/* <Link href="/buy" passHref> */}
              <Box className='p-2 px-4 m-2 bg-gray-200 dark:bg-gray-800 rounded-lg'> Buy </Box>
            {/* </Link> */}
          </Flex>
          <Box className="mb-2">
            <Box className="box-border bg-gray-500/20 p-4 rounded-lg mb-2">
              <Box fontSize={'0.875rem'} className="mb-2">
                SELL
              </Box>
              <Flex justifyContent={'space-between'} className="mb-2">
                  <InputGroup flexDirection={'column'}>
                    <NumberInput
                      fontSize={'1.75rem'}
                      step={0.1}
                      clampValueOnBlur={false}
                      min={0}
                      value={inputBalance}
                      onChange={handleChange}
                      variant={'unstyled'}>
                      <NumberInputField
                        className="bg-transparent"
                        border={"none"}
                        _focus={{ border: "none", boxShadow: "none", outline: "none" }}
                        fontSize={'3xl'}
                        placeholder="0"
                        textAlign={'left'}
                      />
                    </NumberInput>
                    <Text fontFamily={'Righteous'} fontSize={'sm'}>
                      
                    </Text>
                  </InputGroup>
                  <TokenSelector type={"input"}>
                    <Button
                      borderRadius={'full'}
                      variant={'outline'}
                      colorScheme="yellow"
                      display={'inline-flex'}
                      justifyContent={'space-evenly'}>
                      <SwampAvatar
                        boxSize={24}
                        // name = {"ETH"}
                        // src = {""}
                        name={inputAsset?.name ?? "ETH"}
                        src={inputAsset?.logoURI ?? ""}
                        ml={1}
                      />
                      <Text ml={1} mr={1} fontSize={'0.875rem'}>
                        {/* ETH */}
                        {inputAsset?.symbol ?? "ETH"}
                      </Text>
                    </Button>
                  </TokenSelector>
              </Flex>
              <Box>
                $0
              </Box>
            </Box>
            <Box className="box-border bg-gray-500/20 p-4 rounded-lg ">
              <Box fontSize={'0.875rem'}>
                BUY
              </Box>
              <Box className='flex justify-between'>                  
                <Box fontSize={'1.75rem'} className={'text-gray-400'}>
                  0
                </Box>
                <TokenSelector type={"output"}>
                  <Button
                    borderRadius={'full'}
                    variant={'outline'}
                    colorScheme="yellow"
                    display={'inline-flex'}
                    justifyContent={'space-evenly'}>
                    <SwampAvatar
                      boxSize={24}
                      name={outputAsset?.name ?? "ETH"}
                      src={inputAsset?.logoURI ?? ""}
                      ml={1}
                    />
                    <Text ml={1} mr={1} fontSize={'0.875rem'} fontFamily={'Proto'}>
                      {outputAsset?.symbol ?? "Select Token"}
                    </Text>
                  </Button>
                </TokenSelector>
              </Box>
            </Box>
          </Box>
          <Box className='flex justify-center  bg-gray-500/20 p-4 rounded-lg '>
            <SwapButton onClick = {onSwapClick}/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
