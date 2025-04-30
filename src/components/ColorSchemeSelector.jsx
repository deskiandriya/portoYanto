import React from 'react';
import styled from 'styled-components';

const ColorSchemeWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  background: ${({ theme }) => theme.background};
  border-radius: 2rem;
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ColorOption = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 2px solid ${({ isSelected }) => isSelected ? '#fff' : 'transparent'};
  background-color: ${({ color }) => color};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const colorOptions = [
  { name: 'coral', color: '#FF6B6B' },
  { name: 'mint', color: '#4ECDC4' },
  { name: 'blue', color: '#45B7D1' },
  { name: 'pink', color: '#FF69B4' },
  { name: 'yellow', color: '#FFD93D' },
  { name: 'orange', color: '#FF8C42' },
  { name: 'cyan', color: '#00BCD4' },
  { name: 'purple', color: '#9B59B6' }
];

const ColorSchemeSelector = ({ currentScheme, onChange }) => {
  return (
    <ColorSchemeWrapper>
      {colorOptions.map((option) => (
        <ColorOption
          key={option.name}
          color={option.color}
          isSelected={currentScheme === option.name}
          onClick={() => onChange(option.name)}
          aria-label={`Select ${option.name} color scheme`}
        />
      ))}
    </ColorSchemeWrapper>
  );
};

export default ColorSchemeSelector; 