import React, { useEffect, useState } from 'react';
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
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 2rem;
  border: 4px solid #45b7d1;
  object-fit: cover;
  @media (max-width: 900px) {
    width: 120px;
    height: 120px;
  }
`;

const HeroBackground = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #1B3B6F;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-top: 76px;
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  max-width: 1400px;
  padding: 0 2rem;
  gap: 2.5rem;
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 2rem 1rem;
    gap: 2rem;
  }
`;

const LeftHero = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 2;
  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #fff;
  letter-spacing: -2px;
  span.gradient {
    background: linear-gradient(90deg, #45b7d1 0%, #a084e8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const HeroDesc = styled.p`
  font-size: 1.15rem;
  color: #bfc6d1;
  margin-bottom: 2.5rem;
  max-width: 500px;
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
  transition: background 0.3s, color 0.3s, transform 0.2s;
  margin-top: 0.5rem;
  border: none;
  cursor: pointer;
  &:hover {
    background: #45b7d1;
    color: #fff;
    transform: scale(1.05);
  }
`;

const RightHero = styled.div`
  flex: 1.3;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  @media (max-width: 900px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

const VideoMockup = styled.video`
  width: 100%;
  max-width: 800px;
  height: auto;
  aspect-ratio: 16/10;
  border-radius: 0;
  background: #1B3B6F;
  object-fit: cover;
  @media (max-width: 900px) {
    max-width: 95vw;
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

function Navigation({ theme, toggleTheme }) {
  return (
    <NavbarStyled expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Deski Andriyanto</Navbar.Brand>
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
      <HeroBackground>
        <HeroContent>
          <LeftHero>
            <ProfileImage src={profileImage} alt="Deski Andriyanto" />
            <HeroTitle>
              Hi, I'm <span className="gradient">Deski Andriyanto</span><br />Web Developer
            </HeroTitle>
            <HeroDesc>
              A passionate web developer with expertise in creating modern and responsive web applications. 
              I specialize in React, JavaScript, and full-stack development, bringing ideas to life through clean and efficient code.
            </HeroDesc>
            <HeroButton href="#contact" >
              Get in Touch <span style={{fontSize:'1.3em',marginLeft:'0.2em'}}>&rarr;</span>
            </HeroButton>
          </LeftHero>
          <RightHero>
            <VideoMockup autoPlay loop muted playsInline>
              <source src="/videoutama.mp4" type="video/mp4" />
            </VideoMockup>
          </RightHero>
        </HeroContent>
      </HeroBackground>
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
