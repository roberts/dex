import { ethers } from 'ethers';
import { BigNumber } from '@ethersproject/bignumber';

export const getBalanceInEther = (balance: BigNumber | BigInt | undefined, decimals = 18): number | string => {
  if (!balance) return 0;
  const displayBalance = ethers.formatUnits(balance.toString(), decimals);
  return displayBalance;
};

export const getBalanceInWei = (balance: string, decimals = 18): BigNumber => {
  if (balance == "") return BigNumber.from(0);
  return BigNumber.from(ethers.parseUnits(balance, decimals).toString());
}

export const getBigNumberFromString = (number: string): BigNumber => {
  return BigNumber.from(number);
}
