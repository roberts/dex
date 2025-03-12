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

export default function Home() {
  const { address, isConnected } = useAccount();

  useEffect(() => {
    if (isConnected) {
      console.log('Wallet address: ', address);
    } else {
      console.log('Not connected');
    }
  }, [address, isConnected]);
  
  const onSwapClick = () => {
    alert("swap");
  }

  return (
    <Box className="w-full flex flex-col">
      <Box className="flex justify-center mt-4">
        <Box className='block'>
          <Flex justifyContent='space-between'>
            <Link href="/swap" passHref>
              <Box className='p-1 m-2 bg-gray-200 dark:bg-gray-800 rounded-lg'> Swap </Box>
            </Link>
            {/* <Link href="/limit" passHref> */}
              <Box className='p-1 m-2 bg-gray-200 dark:bg-gray-800 rounded-lg'> Limit </Box>
            {/* </Link> */}
            {/* <Link href="/send" passHref> */}
              <Box className='p-1 m-2 bg-gray-200 dark:bg-gray-800 rounded-lg'> Send </Box>
            {/* </Link> */}
            {/* <Link href="/buy" passHref> */}
              <Box className='p-1 m-2 bg-gray-200 dark:bg-gray-800 rounded-lg'> Buy </Box>
            {/* </Link> */}
          </Flex>
          <Box>
            <Box className="box-border border-2 p-4 rounded-md ">
              <Box>
                Sell
              </Box>
              <Box>
              <Flex justifyContent={'space-between'}>
                <InputGroup flexDirection={'column'}>
                  <NumberInput
                    step={0.1}
                    clampValueOnBlur={false}
                    min={0}
                    variant={'unstyled'}>
                    <NumberInputField
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
                    <Text ml={1} mr={1}>
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
            </Box>
            <Box className="box-border border-2 p-4 rounded-md ">
              <Box>Buy</Box>
              <Box className='flex justify-between'>                  
                <Box>
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
                    <Text ml={1} mr={1}>
                      Select Token
                      {/* {token?.symbol} */}
                    </Text>
                  </Button>
                </TokenSelector>
              </Box>
            </Box>
          </Box>
          <Box className='flex justify-center p-2'>
            <SwapButton onClick = {onSwapClick}/>
          </Box>
        </Box>
            
        {/* <Modal isOpen={true} onClose={()=>{}}>
          <ModalOverlay backdropFilter="blur(4px)" />
          <ModalContent py={'3'} maxW={'496px'}>
                  Michael 
          </ModalContent>
        </Modal> */}
      </Box>
    </Box>
  );
}
