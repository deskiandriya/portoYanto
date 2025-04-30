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
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const Hero = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  padding: 2rem;
  background: #263142;
  color: white;
  gap: 2.5rem;
  align-items: center;
  overflow: hidden;
  z-index: 1;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 1.5rem;
  }
`;

const VideoSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  @media (max-width: 900px) {
    width: 100%;
    justify-content: center;
  }
`;

const VideoPortrait = styled.video`
  width: 220px;
  height: 330px;
  object-fit: cover;
  border-radius: 18px;
  background: #263142;
  box-shadow: none;
  border: none;
  @media (max-width: 600px) {
    width: 120px;
    height: 180px;
  }
`;

const ContentSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 1rem 2rem 2rem;
  animation: ${fadeIn} 1s ease-out;
  @media (max-width: 900px) {
    align-items: center;
    padding: 1rem;
  }
`;

const ProfileImage = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 2rem;
  border: 4px solid #a084e8;
  background: #263142;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${floatAnimation} 6s ease-in-out infinite;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  @media (max-width: 600px) {
    width: 120px;
    height: 120px;
    margin-bottom: 1.2rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #c084fc;
  font-weight: 700;
`;

const Subtitle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 1.2rem;
  color: #ff6bcb;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #e0e0e0;
  max-width: 420px;
`;

const VideoContainer = styled.div`
  width: 260px;
  height: 420px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(106,130,251,0.18);
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    width: 90vw;
    height: 60vw;
    max-width: 320px;
    max-height: 480px;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    background: #111;
  }
`;

const CenterButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2.2rem;
  background: linear-gradient(90deg, #a084e8 0%, #ff6bcb 100%);
  color: white;
  border-radius: 32px;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 4px 24px rgba(160,132,232,0.13);
  transition: background 0.3s, transform 0.2s;
  text-align: center;
  margin-top: 0.5rem;
  &:hover {
    background: linear-gradient(90deg, #ff6bcb 0%, #a084e8 100%);
    transform: scale(1.05);
  }
`;

function Home() {
  useEffect(() => {
    document.title = "Deski Andriyanto - Web Developer";
  }, []);
  return (
    <>
      <Hero>
        <VideoSide>
          <VideoPortrait autoPlay loop muted playsInline>
            <source src="/videoutama.mp4" type="video/mp4" />
          </VideoPortrait>
        </VideoSide>
        <ContentSide>
          <ProfileImage>
            <img src={profileImage} alt="Profile" />
          </ProfileImage>
          <Title>Deski Andriyanto</Title>
          <Subtitle>Web Developer</Subtitle>
          <Description>
            Saya adalah seorang pengembang yang bersemangat dalam menciptakan aplikasi web yang indah dan fungsional. Dengan keahlian dalam teknologi web modern dan kepekaan terhadap desain.
          </Description>
          <CenterButton to="/bisnis">Lihat Bisnis Saya</CenterButton>
        </ContentSide>
      </Hero>
      <Layout>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
    </>
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
