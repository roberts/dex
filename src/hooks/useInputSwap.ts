
import { MouseEvent, useState, useEffect } from 'react';

const useInputSwap = () => {
    const [inputBalance, setInputBalance] = useState('');
    const [inputFiat, setInputFiat] = useState('$0.00');
    const [percentage, setPercentage] = useState(0);
    const [timer, setTimer] = useState<NodeJS.Timeout>();
  
    useEffect(() => {
    }, []);
    return {
      inputBalance,
      inputFiat,
      percentage
    };
  };
  
  export default useInputSwap;
  