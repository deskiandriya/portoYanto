import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const ParallaxContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

const ParallaxShape = styled.div`
  position: absolute;
  background: ${({ theme }) => `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`};
  border-radius: 50%;
  opacity: 0.1;
  animation: ${float} ${props => props.duration || '6s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  width: ${props => props.size || '100px'};
  height: ${props => props.size || '100px'};
  top: ${props => props.top || '0'};
  left: ${props => props.left || '0'};
  filter: blur(5px);
`;

const shapes = [
  { size: '200px', top: '10%', left: '5%', duration: '7s', delay: '0s' },
  { size: '150px', top: '60%', left: '10%', duration: '9s', delay: '1s' },
  { size: '100px', top: '20%', left: '80%', duration: '8s', delay: '2s' },
  { size: '180px', top: '70%', left: '70%', duration: '10s', delay: '3s' },
  { size: '120px', top: '40%', left: '50%', duration: '6s', delay: '4s' },
];

const ParallaxEffect = () => {
  return (
    <ParallaxContainer>
      {shapes.map((shape, index) => (
        <ParallaxShape
          key={index}
          size={shape.size}
          top={shape.top}
          left={shape.left}
          duration={shape.duration}
          delay={shape.delay}
        />
      ))}
    </ParallaxContainer>
  );
};

export default ParallaxEffect; 