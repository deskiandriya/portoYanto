import React from 'react';
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
          <Title>Deski Andriyanto</Title>
          <Subtitle>Web Developer</Subtitle>
          <Description>
            I am a passionate developer focused on creating beautiful and functional web applications. 
            With expertise in modern web technologies and an eye for design.
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

export default App;
