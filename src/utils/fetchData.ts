
import {client} from '@/config/apolloConfig/apollo';

import { GET_PAIRS, GET_TOKENS } from '@/config/apolloConfig/queries';


export async function fetchPairData() {
    try {
      const result = await client.query({
        query: GET_PAIRS,
      });
      return result;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  export async function fetchTokenData() {
    try {
      console.log("Mike fetchTokenData 1:");
      const result = await client.query({
        query: GET_TOKENS,
      });
      console.log("Mike fetchTokenData 2:", result);
      return result;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  export async function fetchAggregatedTokenData() {
    return fetch('/api/tokens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: ""
    })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => { 
      console.error('Error:', error);
      throw error;
    });
  }