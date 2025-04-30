import React from 'react';
import Layout from './components/Layout';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
<<<<<<< HEAD
import {
  Hero,
  ProfileContainer,
  ProfileImageWrapper,
  ProfileImage,
  Title,
  Subtitle,
  Description
} from './styles/Hero.styles';
import profileImage from './assets/images/profile.jpg';

=======
import styled, { keyframes } from 'styled-components';
import profileImage from './assets/images/profile.jpg';

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

const Hero = styled.section`
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

const ProfileContainer = styled.div`
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

const ProfileImageWrapper = styled.div`
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

const ProfileImage = styled.div`
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

const Title = styled.h1`
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

const Subtitle = styled.h2`
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

const Description = styled.p`
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

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 2.5rem;
  animation: ${fadeIn} 0.6s ease forwards;
  animation-delay: 0.8s;
  opacity: 0;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: ${props => props.primary ? 'var(--color-primary)' : 'transparent'};
  color: ${props => props.primary ? 'white' : 'var(--color-primary)'};
  border: 2px solid var(--color-primary);
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0.8rem 1.6rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    padding: 0.7rem 1.4rem;
    font-size: 0.9rem;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px ${({ theme }) => `rgba(${theme.mode === 'dark' ? '0,0,0,0.3' : '0,0,0,0.1'})`};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  animation: ${fadeIn} 0.6s ease forwards;
  animation-delay: 1s;
  opacity: 0;

  @media (max-width: 480px) {
    gap: 1.2rem;
  }

  a {
    color: ${({ theme }) => theme.text};
    font-size: 1.8rem;
    transition: all 0.3s ease;
    
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
    
    &:hover {
      color: var(--color-primary);
      transform: translateY(-3px);
    }
  }
`;

>>>>>>> 5121011f7a7e7d29a7bfbd8cb9f1a66c824be1d5
function App() {
  return (
    <Layout>
      <Hero>
        <ProfileContainer>
          <ProfileImageWrapper>
            <ProfileImage>
              <img src={profileImage} alt="Profile" />
            </ProfileImage>
          </ProfileImageWrapper>
<<<<<<< HEAD
          <Title>Deski Andriya</Title>
          <Subtitle>Full Stack Developer</Subtitle>
          <Description>
            I'm a passionate developer focused on creating beautiful and functional web applications.
            With expertise in modern web technologies and a keen eye for design.
          </Description>
=======
          <Title>Deski Andriyanto</Title>
          <Subtitle>Web Developer</Subtitle>
          <Description>          
            I'm a web developer who focuses on developing modern applications with attractive appearance and high performance. 
            With expertise in React, Node.js, and various latest web technologies, I am committed to delivering innovative digital solutions and providing the best user experience.
          </Description>
          <ButtonContainer>
            <Button href="#projects" primary>
              View My Work <i className="fas fa-arrow-right"></i>
            </Button>
            <Button href="#contact">
              Get in Touch <i className="fas fa-envelope"></i>
            </Button>
          </ButtonContainer>
          <SocialLinks>
            <a href="https://github.com/deskiandriya" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/deski-andriyanto-b07996241/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/deski_andri" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </SocialLinks>
>>>>>>> 5121011f7a7e7d29a7bfbd8cb9f1a66c824be1d5
        </ProfileContainer>
      </Hero>
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
