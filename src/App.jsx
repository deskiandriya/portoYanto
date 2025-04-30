import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
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

function Home() {
  return (
    <Layout>
      <nav style={{ padding: '1rem', textAlign: 'right' }}>
        <Link to="/hyrofinance" style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>
          HyroFinance
        </Link>
      </nav>
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
    </Routes>
  );
}

export default App;
