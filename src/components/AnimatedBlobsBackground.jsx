import React from 'react';
import styled, { keyframes } from 'styled-components';

const blob1 = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(40vw, 10vh) scale(1.2); }
  66% { transform: translate(10vw, 30vh) scale(0.9); }
  100% { transform: translate(0, 0) scale(1); }
`;
const blob2 = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-30vw, 20vh) scale(1.1); }
  66% { transform: translate(-10vw, 40vh) scale(1.3); }
  100% { transform: translate(0, 0) scale(1); }
`;
const blob3 = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(20vw, 50vh) scale(1.3); }
  66% { transform: translate(-20vw, 60vh) scale(1.1); }
  100% { transform: translate(0, 0) scale(1); }
`;

const BlobsContainer = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

const Blob = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
  mix-blend-mode: lighten;
`;

const Glow = styled.div`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(120px);
  opacity: 0.3;
  z-index: 0;
`;

const Glow1 = styled(Glow)`
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, #fc5c7d 0%, transparent 80%);
  top: 10vh;
  left: 30vw;
`;
const Glow2 = styled(Glow)`
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, #4ECDC4 0%, transparent 80%);
  bottom: 10vh;
  right: 20vw;
`;
const Blob4 = styled(Blob)`
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #9B59B6 0%, #45B7D1 100%);
  top: 60vh;
  left: 10vw;
  animation: ${blob2} 30s ease-in-out infinite reverse;
`;
const Blob5 = styled(Blob)`
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #FF8C42 0%, #FFD93D 100%);
  bottom: 20vh;
  right: 40vw;
  animation: ${blob3} 34s ease-in-out infinite reverse;
`;

const Blob1 = styled(Blob)`
  width: 600px;
  height: 600px;
  background: linear-gradient(135deg, #6a82fb 0%, #fc5c7d 100%);
  top: -200px;
  left: -200px;
  animation: ${blob1} 18s ease-in-out infinite;
`;
const Blob2 = styled(Blob)`
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #45B7D1 0%, #4ECDC4 100%);
  bottom: -150px;
  right: -150px;
  animation: ${blob2} 22s ease-in-out infinite;
`;
const Blob3 = styled(Blob)`
  width: 700px;
  height: 700px;
  background: linear-gradient(135deg, #FFD93D 0%, #FF6B6B 100%);
  top: 40vh;
  left: 50vw;
  animation: ${blob3} 26s ease-in-out infinite;
`;

const AnimatedBlobsBackground = () => (
  <BlobsContainer>
    <Glow1 />
    <Glow2 />
    <Blob1 />
    <Blob2 />
    <Blob3 />
    <Blob4 />
    <Blob5 />
  </BlobsContainer>
);

export default AnimatedBlobsBackground; 