import BigNumber from 'bignumber.js';

export function displayNumber(
    number: number | string,
    compact?: boolean,
    fractionDigits: number = 2
  ) {
    if (isNaN(number as any)) {
      const value = new Intl.NumberFormat(undefined, {
        minimumFractionDigits: fractionDigits,
        maximumFractionDigits: fractionDigits,
        ...(compact ? { notation: 'compact', compactDisplay: 'short' } : {}),
      }).format(0 as number);
      return value;
    }
    if (
      BigNumber(number).gt(0) &&
      BigNumber(number).lt(0.1 * 10 ** -fractionDigits)
    ) {
      return '< 0.01';
    }
  
    const value = new Intl.NumberFormat(undefined, {
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
      ...(compact ? { notation: 'compact', compactDisplay: 'short' } : {}),
    }).format(number as number);
  
    return value;
  }