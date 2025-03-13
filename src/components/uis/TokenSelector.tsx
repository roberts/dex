import SwampAvatar from '@/components/core/SwampAvatar';
// import LocalTokenSupport from '@/components/core/tokenSelector/LocalTokenSupport';
import { useGetBalances, useSearchToken } from '@/hooks/swap';
import { Token } from '@/interfaces';
// import { useSwapStore } from '@/store/features/swap/swapStore';
import { SearchIcon } from '@chakra-ui/icons';
import {
  Button,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Box,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';

type TokenSelectorProps = {
  children: any;
  type: 'input' | 'output';
};

const TokenSelector = ({ children, type }: TokenSelectorProps) => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { tokenList, fixedTokens } = useGetBalances();

  const { filteredTokens, search, setSearch } = useSearchToken();

  // const handleOnClick = (token: Token): void => {
  //   // setAsset(token.address, type);
  //   onClose();
  // };
  const onSearchChanged = async (event: any) => {
    // setSearch(event.target.value);
  };
  useEffect(() => {
    // setSearch('');
  }, [isOpen]);

  return (
    <>
      {React.cloneElement(children, {
        onClick: () => onOpen(),
      })}
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
        <ModalOverlay backdropFilter="blur(4px)" />
        <ModalContent p={'1rem'} maxW={480} mx="auto" my={80}
          mt={{ base: "10%", md: "15%" }}
          borderRadius="12" 
          border="1px solid"
          className={'dark:bg-customDark bg-white'}
          >
          <ModalHeader>
            <Box fontSize={'1.25rem'} className='mb-2'>
              Select a token
            </Box>
            <InputGroup>
              <Input
                className="bg-transparent"
                placeholder={"ETH, USDT..."}
                _focus={{ border: "none", boxShadow: "none", outline: "none" }}
                py={'6'}
                pl={'40'}
                borderRadius={'12'}
                textAlign={'left'}
                w={'100vw'}
                onChange={onSearchChanged}
              />
              <InputLeftElement
                py={'6'}
                pl={'4'}
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children=<SearchIcon boxSize={20} color={'gray.500'} />
              />
            </InputGroup>
            <Stack direction={'row'} justifyContent={'space-around'} py={'8'}>
              {fixedTokens?.map((token: Token, index) => {
                return (
                  <Button
                    key={index}
                    px={'3'}
                    py={'7'}
                    borderRadius={'xl'}
                    _hover={{
                      bg: 'blue.500',
                      borderColor: 'yellow.500',
                      color: 'yellow.500',
                    }}
                    value={token.address}
                    // onClick={() => handleOnClick(token)}
                    >
                    <SwampAvatar
                      size={'sm'}
                      name={token.name}
                      src={token.logoURI}
                      mr={'3'}
                    />
                    <Text>{token.symbol}</Text>
                  </Button>
                );
              })}
            </Stack>
            <Divider />
          </ModalHeader>
          <ModalBody>
            <Stack
              h={'40vh'}
              scrollBehavior={'smooth'}
              overflowY={'scroll'}
              spacing={5}
              sx={{
                '::-webkit-scrollbar': {
                  display: 'none',
                },
              }}>
              {(search && search != '' ? filteredTokens : tokenList)?.map(
                (token: Token, index) => {
                  return (
                    <div>{token.name}</div>
                    // <TokenEntry
                    //   key={index}
                    //   token={token}
                    //   type={type}
                    //   onClose={onClose}
                    // />
                  );
                }
              )}
            </Stack>
          </ModalBody>

        </ModalContent>
      </Modal>
    </>
  );
};

export default TokenSelector;
