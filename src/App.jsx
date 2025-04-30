import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import styled, { keyframes } from 'styled-components';
import profileImage from './assets/images/profile.jpg';
import HyroFinance from './pages/HyroFinance';
import Bisnis from './pages/Bisnis';

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

const floatAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const gradientFlow = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Hero = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 2rem;
  background: #0a0a0a;
  color: white;
  gap: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(106,130,251,0.1) 0%, transparent 50%);
    animation: ${gradientFlow} 15s ease infinite;
    background-size: 200% 200%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  animation: ${fadeIn} 1s ease-out;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 1s ease-out 0.3s backwards;
`;

const ProfileImage = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 2rem;
  border: 4px solid transparent;
  background: linear-gradient(45deg, #6a82fb, #fc5c7d) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  animation: ${floatAnimation} 6s ease-in-out infinite;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientFlow} 8s linear infinite;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #fc5c7d;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, #6a82fb, #fc5c7d);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100px;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #e0e0e0;
  max-width: 500px;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out 0.6s forwards;
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 300px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(106,130,251,0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(106,130,251,0.3);
  }
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const CenterButton = styled(Link)`
  display: inline-block;
  padding: 1.2rem 3rem;
  background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
  background-size: 200% auto;
  color: white;
  border-radius: 40px;
  font-size: 1.3rem;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 8px 32px rgba(106,130,251,0.13);
  transition: all 0.3s ease;
  text-align: center;
  width: fit-content;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }
  
  &:hover {
    background-position: right center;
    transform: scale(1.05);
    box-shadow: 0 12px 40px rgba(106,130,251,0.2);
    
    &::before {
      left: 100%;
    }
  }
`;

function Home() {
  useEffect(() => {
    document.title = "Deski Andriya - Full Stack Developer";
  }, []);

  return (
    <Layout>
      <Hero>
        <LeftSection>
          <ProfileImage>
            <img src={profileImage} alt="Profile" />
          </ProfileImage>
          <Title>Deski Andriyanto</Title>
          <Subtitle>Web Developer</Subtitle>
          <Description>
            Saya adalah seorang pengembang yang bersemangat dalam menciptakan aplikasi web yang indah dan fungsional.
            Dengan keahlian dalam teknologi web modern dan kepekaan terhadap desain.
          </Description>
          <CenterButton to="/bisnis">Lihat Bisnis Saya</CenterButton>
        </LeftSection>
        <RightSection>
          <VideoContainer>
            <video autoPlay loop muted playsInline>
              <source src="/videobg.mp4" type="video/mp4" />
              Browser Anda tidak mendukung tag video.
            </video>
          </VideoContainer>
        </RightSection>
      </Hero>
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hyrofinance" element={<HyroFinance />} />
      <Route path="/bisnis" element={<Bisnis />} />
    </Routes>
  );
}

export default App;
