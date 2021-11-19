import { useEtherBalance, useEthers } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';
import { Button, Box, Typography } from '@mui/material';

export const WalletCard = () => {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  return (
    <Box
      sx={{
        p: 4,
        width: '180px',
        borderRadius: '20px',
        height: '80px',
        marginTop: '20px',
        marginLeft: '55px',
        backgroundColor: '#009DAE',
      }}
    >
      <div>
        <Button
          style={{
            marginLeft: '5px',
            color: '#181D31',
            fontWeight: 'normal',
            backgroundColor: '#C2FFF9',
            borderRadius: '10px',
            height: '50px',
          }}
          disabled={account}
          variant='outlined'
          onClick={() => {
            activateBrowserWallet();
          }}
        >
          {account ? `MetaMask Wallet` : ` Connect MetaMask`}
        </Button>
      </div>
      {account && (
        <Typography
          style={{ color: 'black', fontWeight: 'lighter', marginLeft: '15px' }}
          variant='body1'
        >{`Account: ${account.slice(0, 5)}...${account.slice(-3)}`}</Typography>
      )}
      {etherBalance && (
        <Typography
          style={{ color: 'black', fontWeight: 'lighter', marginLeft: '15px' }}
          variant='body1'
        >
          ETH: {formatEther(etherBalance).slice(0, 5)}
        </Typography>
      )}
    </Box>
  );
};
