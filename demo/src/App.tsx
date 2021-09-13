import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import { Header, DisplayContainer, Sidebar, Footer } from './components';

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

const App: React.FC = () => {
  const [key, setKey] = useState('01dlineopenweathermap');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppWrapper>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <ContentWrapper>
        <Sidebar onClick={id => setKey(id)} isOpen={isOpen} setIsOpen={setIsOpen} />
        <DisplayContainer importKey={key} />
      </ContentWrapper>
      <Footer />
    </AppWrapper>
  );
}

export default App;
