import styled from 'styled-components';
import bg from './img/bg.png';
import { MainLayout } from './styles/Layouts';
import Orb from './components/Orb/Orb';
import Navigation from './components/Navigation/Navigation';
import { useMemo, useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Expenses from './components/Expenses/Expenses';
import Income from './components/Incomes/Income';
import { useGlobalContext } from './context/globalContext';
const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  /* background-image: url(${bg}); */
  main {
    flex: 1;
    background-color: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;
function App() {
  const [active, setActive] = useState(1);
  const global = useGlobalContext();

  const OrbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };
  return (
    <AppStyled bg={bg} className='App'>
      {OrbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>{displayData(active)}</main>
      </MainLayout>
    </AppStyled>
  );
}

export default App;
