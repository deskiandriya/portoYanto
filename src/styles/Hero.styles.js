import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const Hero = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  position: relative;
  background: ${({ theme }) => theme.background};
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
    min-height: calc(100vh - 60px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, var(--color-primary) 0%, transparent 70%);
    opacity: 0.1;
    animation: ${float} 6s ease-in-out infinite;
  }
`;

export const ProfileContainer = styled.div`
  position: relative;
  z-index: 2;
  backdrop-filter: blur(10px);
  padding: 3rem;
  border-radius: 30px;
  background: ${({ theme }) => `rgba(${theme.mode === 'dark' ? '255,255,255,0.05' : '0,0,0,0.02'})`};
  border: 1px solid ${({ theme }) => `rgba(${theme.mode === 'dark' ? '255,255,255,0.1' : '0,0,0,0.1'})`};
  box-shadow: 0 20px 40px ${({ theme }) => `rgba(${theme.mode === 'dark' ? '0,0,0,0.3' : '0,0,0,0.1'})`};
  animation: ${fadeIn} 0.6s ease forwards;
  max-width: 800px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 15px;
  }
`;

export const ProfileImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto 2rem;
  position: relative;
  
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
    margin-bottom: 1rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    background: linear-gradient(45deg, var(--color-primary), transparent);
    animation: rotate 4s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const ProfileImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  z-index: 1;
  border: 4px solid ${({ theme }) => theme.background};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
  font-weight: 700;
  letter-spacing: -1px;
  animation: ${fadeIn} 0.6s ease forwards;
  animation-delay: 0.2s;
  opacity: 0;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.8rem;
  color: var(--color-primary);
  margin-bottom: 2rem;
  font-weight: 500;
  animation: ${fadeIn} 0.6s ease forwards;
  animation-delay: 0.4s;
  opacity: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

export const Description = styled.p`
  max-width: 600px;
  margin: 0 auto 2.5rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.secondary};
  font-size: 1.1rem;
  animation: ${fadeIn} 0.6s ease forwards;
  animation-delay: 0.6s;
  opacity: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`; 