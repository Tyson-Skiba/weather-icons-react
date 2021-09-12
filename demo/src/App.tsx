import React from 'react';
import styled from 'styled-components';
import './App.css';
import { Header, DisplayContainer, Sidebar, Footer } from './components';

/*
import { repositories } from 'weather-icons-react';

const Icon: React.FC = () => {
  const svg = repositories.fill.darksky.read('clear-night');
  return <img src={svg} alt="weather icon" />;
}

export const Temperature: React.FC = () => (
  <React.Suspense fallback={<div>Loading</div>}>
    <Icon />
  </React.Suspense>
)
*/

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;

  * {
    box-sizing: border-box;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <ContentWrapper>
        <Sidebar />
        <DisplayContainer />
      </ ContentWrapper>
      <Footer />
    </AppWrapper>
  );
}

export default App;
