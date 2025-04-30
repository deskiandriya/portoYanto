import React from 'react';
import styled from 'styled-components';

const ToggleWrapper = styled.button`
  background: ${({ theme }) => theme.toggleBackground};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 4rem;
  height: 2rem;
  
  svg {
    height: auto;
    width: 1.2rem;
    transition: all 0.3s linear;
    
    &:first-child {
      transform: ${({ theme }) => theme.mode === 'dark' ? 'translateY(100px)' : 'translateY(0)'};
    }
    
    &:nth-child(2) {
      transform: ${({ theme }) => theme.mode === 'light' ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <ToggleWrapper onClick={toggleTheme}>
      {/* Sun icon */}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
      {/* Moon icon */}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    </ToggleWrapper>
  );
};

export default ThemeToggle;
