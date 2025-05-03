import React, { useEffect, useState, useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import profileImage from './assets/images/profile.jpg';
import HyroFinance from './pages/HyroFinance';
import Bisnis from './pages/Bisnis';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaSun, FaMoon } from 'react-icons/fa';
import { lightTheme, darkTheme } from './themes';
import GlobalStyles from './styles/GlobalStyles';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const gradientMove = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

const NavbarStyled = styled(Navbar)`
  background: rgba(35, 39, 47, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  .navbar-brand {
    color: #fff;
    font-weight: 700;
    font-size: 1.5rem;
  }
  .nav-link {
    color: #bfc6d1 !important;
    margin: 0 0.5rem;
    transition: color 0.3s;
    &:hover {
      color: #45b7d1 !important;
    }
  }
`;

const ProfileImage = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin-bottom: 2rem;
  border: 4px solid #45b7d1;
  object-fit: cover;
  background: #fff;
  opacity: 0;
  animation: ${fadeInUp} 1s 0.2s forwards;
  @media (max-width: 900px) {
    width: 90px;
    height: 90px;
  }
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: scale(1.08);
    box-shadow: 0 0 24px #45b7d1aa;
  }
`;

const DotsBackground = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #181c23;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url('data:image/svg+xml;utf8,<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="2" fill="%23365b6d" fill-opacity="0.18"/></svg>');
    opacity: 0.5;
    z-index: 1;
  }
`;

const MainCard = styled.div`
  position: relative;
  z-index: 2;
  background: rgba(30, 36, 50, 0.98);
  border-radius: 32px;
  box-shadow: 0 12px 48px 0 rgba(0,0,0,0.45);
  padding: 3.5rem 3rem 3rem 3rem;
  max-width: 1100px;
  width: 100%;
  display: flex;
  align-items: stretch;
  gap: 3rem;
  margin: 4rem auto 3rem auto;
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 2rem 1rem;
    gap: 2rem;
    margin: 2rem 0 2rem 0;
  }
  animation: ${fadeInUp} 1.2s 0.1s both;
`;

const LeftCard = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
  }
`;

const RightCard = styled.div`
  flex: 1.3;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

const CardVideoMockup = styled.video`
  width: 100%;
  max-width: 420px;
  height: auto;
  aspect-ratio: 16/10;
  border-radius: 18px;
  background: #23272f;
  object-fit: cover;
  box-shadow: 0 8px 40px 0 rgba(0,0,0,0.45);
  opacity: 0;
  animation: ${fadeInUp} 1s 1s forwards;
  @media (max-width: 900px) {
    max-width: 95vw;
    border-radius: 12px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #fff;
  letter-spacing: -2px;
  opacity: 0;
  animation: ${fadeInUp} 1s 0.4s forwards;
  span.gradient {
    background: linear-gradient(270deg, #45b7d1, #a084e8, #45b7d1);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-weight: 900;
    animation: ${gradientMove} 3s linear infinite alternate;
    display: inline-block;
  }
  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
`;

const HeroDesc = styled.p`
  font-size: 1.2rem;
  color: #bfc6d1;
  margin-bottom: 2.5rem;
  max-width: 500px;
  opacity: 0;
  animation: ${fadeInUp} 1s 0.6s forwards;
  @media (max-width: 900px) {
    margin: 0 auto 2rem auto;
  }
`;

const HeroButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  padding: 1.1rem 2.2rem;
  background: #fff;
  color: #23272f;
  border-radius: 32px;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 4px 24px rgba(160,132,232,0.13);
  transition: background 0.3s, color 0.3s, transform 0.2s, box-shadow 0.3s;
  margin-top: 0.5rem;
  border: none;
  cursor: pointer;
  opacity: 0;
  animation: ${fadeInUp} 1s 0.8s forwards;
  &:hover {
    background: #45b7d1;
    color: #fff;
    transform: scale(1.05);
    box-shadow: 0 0 24px #45b7d1aa;
  }
`;

const ThemeToggle = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  padding: 0.5rem;
  margin-left: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: scale(1.1);
    color: #45b7d1;
  }
`;

const HeroCard = styled(MainCard)`
  display: flex;
  align-items: stretch;
  gap: 3rem;
`;

const SectionCard = styled(MainCard)`
  display: block;
  padding: 3.5rem 3rem 3rem 3rem;
  @media (max-width: 900px) {
    padding: 2rem 1rem;
  }
`;

function Navigation({ theme, toggleTheme }) {
  const [clock, setClock] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setClock(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <NavbarStyled expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Deski Andriyanto</Navbar.Brand>
        <span style={{color:'#bfc6d1', fontSize:'1rem', marginLeft:'1rem'}}>{clock.toLocaleTimeString()}</span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <ThemeToggle onClick={toggleTheme}>
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </ThemeToggle>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavbarStyled>
  );
}

function Home({ theme, toggleTheme }) {
  useEffect(() => {
    document.title = "Deski Andriyanto - Web Developer";
  }, []);
  return (
    <>
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <DotsBackground>
        <HeroCard>
          <LeftCard>
            <ProfileImage src={profileImage} alt="Deski Andriyanto" />
            <HeroTitle>
              Hi, I'm <span className="gradient">Deski Andriyanto</span><br />
              <span style={{fontWeight: 600, fontSize: '2rem', color: '#bfc6d1'}}>Web Developer</span>
            </HeroTitle>
            <HeroDesc>
              I am a passionate web developer specializing in building modern, responsive, and user-friendly web applications. I love working with React, JavaScript, and full-stack technologies to bring ideas to life with clean and efficient code.
            </HeroDesc>
            <HeroButton href="#contact">
              Get in Touch <span style={{fontSize:'1.3em',marginLeft:'0.2em'}}>&rarr;</span>
            </HeroButton>
          </LeftCard>
          <RightCard>
            <CardVideoMockup autoPlay loop muted playsInline>
              <source src="/videoutama.mp4" type="video/mp4" />
            </CardVideoMockup>
          </RightCard>
        </HeroCard>
        <SectionCard>
          <div className="content-section" id="about"><About /></div>
        </SectionCard>
        <SectionCard>
          <div className="content-section" id="experience"><Experience /></div>
        </SectionCard>
        <SectionCard>
          <div className="content-section" id="projects"><Projects /></div>
        </SectionCard>
        <SectionCard>
          <div className="content-section" id="contact"><Contact /></div>
        </SectionCard>
      </DotsBackground>
    </>
  );
}

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/hyrofinance" element={<HyroFinance />} />
        <Route path="/bisnis" element={<Bisnis />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
