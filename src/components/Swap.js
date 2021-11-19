import React, { useEffect, useState } from 'react';
import {
  ChainId,
  ETH,
  UniswapDappSharedLogicContext,
} from 'uniswap-dapp-integration-shared';
import UniswapReact from 'uniswap-react';

export const Swap = () => {
  const [uniswapDappSharedLogicContext, setUniswapDappSharedLogicContext] =
    useState(undefined);

  useEffect(() => {
    (async () => {
      // MetaMask
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      const uniswapDappSharedLogicContext = {
        supportedNetworkTokens: [
          {
            chainId: ChainId.MAINNET,
            defaultInputValue: '0.000001',
            defaultInputToken: ETH.MAINNET().contractAddress,
            defaultOutputToken: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
            supportedTokens: [],
          },
          {
            chainId: ChainId.RINKEBY,
            defaultInputToken: ETH.RINKEBY().contractAddress,
            defaultOutputToken: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
            supportedTokens: [],
          },
        ],
        ethereumAddress: accounts[0],
        ethereumProvider: window.ethereum,
        theming: {
          backgroundColor: '#009DAE',
          button: { textColor: 'black', backgroundColor: '#C2FFF9' },
          panel: { textColor: 'black', backgroundColor: '#C2FFF9' },
          textColor: 'black',
        },
      };

      setUniswapDappSharedLogicContext(uniswapDappSharedLogicContext);
    })();
  }, []);

  return (
    <div className='App'>
      <div className='uniswap-container'>
        {uniswapDappSharedLogicContext !== undefined && (
          <UniswapReact
            uniswapDappSharedLogicContext={uniswapDappSharedLogicContext}
          />
        )}
      </div>
    </div>
  );
};
