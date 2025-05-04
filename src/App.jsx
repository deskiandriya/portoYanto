import React, { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Particles from './components/Particles';
import ParallaxEffect from './components/ParallaxEffect';
import ThemeToggle from './components/ThemeToggle';
import { Outlet } from 'react-router-dom';
import AnimatedBlobsBackground from './components/AnimatedBlobsBackground';

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
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1 0 auto;
  width: 100%;
  margin-top: 70px;
`;

const themeLight = {
  mode: 'light',
  background: '#f8fafc',
  text: '#181c2a',
  secondary: '#6a82fb',
  cardBackground: '#fff',
  tagBackground: '#f1f5f9',
  toggleBackground: '#fff',
  toggleBorder: '#e2e8f0',
};
const themeDark = {
  mode: 'dark',
  background: '#0a0a0a',
  text: '#fff',
  secondary: '#fc5c7d',
  cardBackground: '#181c2a',
  tagBackground: '#23272f',
  toggleBackground: '#181c2a',
  toggleBorder: '#23272f',
};

function App({ children }) {
  const [theme, setTheme] = useState('dark');
  const [colorScheme, setColorScheme] = useState('blue');
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <ThemeProvider theme={{ ...(theme === 'dark' ? themeDark : themeLight), colorScheme }}>
      <GlobalStyle />
      <AppContainer>
        <AnimatedBlobsBackground />
        <Particles />
        <ParallaxEffect />
        <Navbar />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <MainContent><Outlet /></MainContent>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
