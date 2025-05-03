import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Outlet } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    background: linear-gradient(135deg, #0a0a0a 0%, #181c2a 100%);
    color: #fff;
    font-family: 'Inter', 'Poppins', 'Sora', Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    letter-spacing: 0.01em;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: none;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Outlet />
      </AppContainer>
    </>
  );
}

export default App;
