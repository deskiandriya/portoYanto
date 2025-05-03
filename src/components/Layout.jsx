import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../themes';
import GlobalStyles from '../styles/GlobalStyles';
import ThemeToggle from './ThemeToggle';
import ColorSchemeSelector from './ColorSchemeSelector';
import ParallaxEffect from './ParallaxEffect';

const Layout = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [colorScheme, setColorScheme] = useState('blue');
  const [scrolled, setScrolled] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const changeColorScheme = (color) => {
    setColorScheme(color);
    localStorage.setItem('colorScheme', color);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedColorScheme = localStorage.getItem('colorScheme');
    
    if (savedTheme) {
      setTheme(savedTheme);
    }
    if (savedColorScheme) {
      setColorScheme(savedColorScheme);
    }

    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles colorScheme={colorScheme} />
      <ParallaxEffect />
      <div className="layout">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Layout; 