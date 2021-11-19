import './App.css';
import { WalletCard } from './components/WalletCard';
import Container from '@mui/material/Container';
import { Swap } from './components/Swap';

function App() {
  return (
    <Container
      maxWidth='lg'
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '400px',
      }}
    >
      <WalletCard />
      <div style={{ margin: '1rem' }} />
      <Swap />
    </Container>
  );
}

export default App;
