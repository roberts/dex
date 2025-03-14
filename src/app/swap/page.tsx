'use client';

import Link from "next/link";
import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import SwampAvatar from '@/components/core/SwampAvatar';
import SwapButton from './components/SwapButton';

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
import TokenSelector from '@/components/uis/TokenSelector';
import { useSwapStore } from '@/store/swap/swapStore';
import { shallow } from 'zustand/shallow';

export default function Home() {
  const { address, status, isConnected } = useAccount();

  const {
    initAssets,
  } = useSwapStore(
    state => ({
      initAssets: state.actions.initAssets,
    }),
    shallow
  );
  useEffect(() => {
    initAssets();
  }, [address, isConnected]);
  
  const onSwapClick = () => {
    alert("swap");
  }

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
                        name = {"ETH"}
                        src = {null}
                        // name={token?.name}
                        // src={token?.logoURI!}
                        // ml={1}
                      />
                      <Text ml={1} mr={1} fontSize={'0.875rem'}>
                        ETH
                        {/* {token?.symbol} */}
                      </Text>
                    </Button>
                  </TokenSelector>
              </Flex>
              <Box>
                $0
              </Box>
            </Box>
            <Box className="box-border bg-gray-500/20 p-4 rounded-lg ">
              <Box fontSize={'0.875rem'}>BUY</Box>
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
                      name = {"ETH"}
                      src = {null}
                      // name={token?.name}
                      // src={token?.logoURI!}
                      // ml={1}
                    />
                    <Text ml={1} mr={1} fontSize={'0.875rem'} fontFamily={'Proto'}>
                      Select Token
                      {/* {token?.symbol} */}
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
