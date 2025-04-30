import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
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
import HyroFinance from './pages/HyroFinance';
import Bisnis from './pages/Bisnis';
import styled from 'styled-components';

const CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.5rem auto 0 auto;
`;

const CenterText = styled.p`
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 1.2rem;
  text-align: center;
  max-width: 420px;
`;

const CenterButton = styled(Link)`
  display: inline-block;
  padding: 1.2rem 3rem;
  background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
  color: white;
  border-radius: 40px;
  font-size: 1.3rem;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 8px 32px rgba(106,130,251,0.13);
  transition: background 0.3s, transform 0.2s;
  text-align: center;
  &:hover {
    background: linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%);
    transform: scale(1.05);
  }
`;

function Home() {
  return (
    <Layout>
      <Hero>
        <ProfileContainer>
          <ProfileImageWrapper>
            <ProfileImage>
              <img src={profileImage} alt="Profile" />
            </ProfileImage>
          </ProfileImageWrapper>
          <Title>Deski Andriya</Title>
          <Subtitle>Full Stack Developer</Subtitle>
          <Description>
            I'm a passionate developer focused on creating beautiful and functional web applications.
            With expertise in modern web technologies and a keen eye for design.
          </Description>
        </ProfileContainer>
        <CenterBox>
          <CenterText>
            Silakan order pada bisnis saya sesuai kebutuhan Anda. Klik tombol di bawah untuk melihat layanan bisnis yang tersedia.
          </CenterText>
          <CenterButton to="/bisnis">Lihat Bisnis Saya</CenterButton>
        </CenterBox>
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
