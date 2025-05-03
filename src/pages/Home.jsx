import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import profileImg from '../assets/images/profile.jpg';

// --- Hero Section ---
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: none;
  padding: 90px 1.5rem 0 1.5rem;
  overflow: hidden;
`;

const HeroContentWrap = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 3.5rem;
  max-width: 1100px;
  width: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2.2rem;
    text-align: center;
  }
`;

const ProfileImg = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #232946;
  box-shadow: 0 8px 32px rgba(106,130,251,0.13);
  background: #181c2a;
  @media (max-width: 600px) {
    width: 120px;
    height: 120px;
  }
`;

const HeroText = styled.div`
  flex: 1;
  text-align: left;
  max-width: 540px;
  @media (max-width: 900px) {
    text-align: center;
    max-width: 100%;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 1.2rem;
  background: linear-gradient(90deg, #fff 0%, #6a82fb 50%, #fc5c7d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -2px;
  line-height: 1.1;
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 700;
  color: #a0a0a0;
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroDesc = styled(motion.p)`
  font-size: 1.15rem;
  color: #bdbdbd;
  margin-bottom: 2rem;
  max-width: 700px;
  line-height: 1.7;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroButton = styled(motion.a)`
  display: inline-block;
  margin-top: 1rem;
  padding: 1.1rem 2.5rem;
  background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
  color: #fff;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 8px 32px rgba(106,130,251,0.2);
  transition: all 0.3s ease;
  &:hover {
    background: linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%);
    transform: scale(1.05);
    box-shadow: 0 16px 40px rgba(252,92,125,0.25);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 1.5rem;
  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  color: #6a82fb;
  font-size: 1.7rem;
  transition: color 0.3s;
  &:hover {
    color: #fc5c7d;
  }
`;

// --- Video Section ---
const VideoSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0 2rem 0;
  background: none;
`;
const VideoCard = styled.div`
  width: 90vw;
  max-width: 900px;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  background: rgba(255,255,255,0.06);
  border: 1.5px solid rgba(255,255,255,0.10);
  backdrop-filter: blur(8px);
`;
const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  display: block;
`;

// --- Projects Section ---
const Section = styled.section`
  padding: 6rem 1rem 4rem 1rem;
  background: none;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(90deg, #fff 0%, #6a82fb 50%, #fc5c7d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.5rem;
  max-width: 1100px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255,255,255,0.06);
  border-radius: 22px;
  padding: 2.2rem 1.7rem;
  backdrop-filter: blur(12px);
  border: 1.5px solid rgba(255,255,255,0.10);
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  color: #fff;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:hover {
    transform: translateY(-10px) scale(1.04);
    box-shadow: 0 16px 40px rgba(106,130,251,0.13);
    border-color: #6a82fb;
    background: rgba(106,130,251,0.08);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProjectDesc = styled.p`
  color: #bdbdbd;
  font-size: 1.05rem;
  margin-bottom: 1.2rem;
`;

const ProjectButton = styled.a`
  margin-top: auto;
  display: inline-block;
  padding: 0.7rem 1.5rem;
  background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
  color: #fff;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;
  box-shadow: 0 4px 16px rgba(106,130,251,0.13);
  transition: background 0.3s;
  &:hover {
    background: linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%);
  }
`;

// --- About Section ---
const AboutGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  max-width: 1100px;
  margin: 0 auto;
  align-items: flex-start;
  justify-content: center;
`;

const AboutCard = styled(motion.div)`
  flex: 1 1 320px;
  min-width: 320px;
  background: rgba(255,255,255,0.06);
  border-radius: 22px;
  padding: 2.5rem 2rem;
  backdrop-filter: blur(12px);
  border: 1.5px solid rgba(255,255,255,0.10);
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  color: #fff;
  margin-bottom: 2rem;
`;

const AboutTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const AboutText = styled.p`
  color: #bdbdbd;
  font-size: 1.05rem;
  margin-bottom: 1.2rem;
`;

const Timeline = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TimelineItem = styled.li`
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 1.5rem;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 10px;
    height: 10px;
    background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
    border-radius: 50%;
  }
`;

const TimelineTitle = styled.span`
  font-weight: 600;
  color: #fff;
`;

const TimelinePeriod = styled.span`
  color: #6a82fb;
  font-size: 0.95rem;
  margin-left: 0.5rem;
`;

const TimelineDesc = styled.div`
  color: #bdbdbd;
  font-size: 1rem;
`;

// --- Contact Section (single card) ---
const ContactSection = styled.section`
  padding: 6rem 1rem 4rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
`;
const ContactCard = styled(motion.div)`
  width: 100%;
  max-width: 600px;
  background: rgba(255,255,255,0.06);
  border-radius: 22px;
  padding: 2.5rem 2rem;
  backdrop-filter: blur(12px);
  border: 1.5px solid rgba(255,255,255,0.10);
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  color: #fff;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContactTitle = styled.h3`
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const ContactInfo = styled.p`
  color: #bdbdbd;
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
  word-break: break-all;
`;
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
`;
const Input = styled.input`
  padding: 0.9rem 1.2rem;
  border-radius: 12px;
  border: none;
  background: rgba(255,255,255,0.08);
  color: #fff;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  outline: none;
`;
const Textarea = styled.textarea`
  padding: 0.9rem 1.2rem;
  border-radius: 12px;
  border: none;
  background: rgba(255,255,255,0.08);
  color: #fff;
  font-size: 1rem;
  min-height: 120px;
  outline: none;
`;
const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
  color: #fff;
  border-radius: 30px;
  font-weight: 700;
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: all 0.3s;
  &:hover {
    background: linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%);
    transform: scale(1.04);
  }
`;

// --- Data ---
const projects = [
  {
    title: 'HyroFinance',
    desc: 'Advanced analysis platform to manage your finances and provide accurate information according to your data.',
    link: '#',
  },
  {
    title: 'HyroTrade',
    desc: 'Secure and efficient cryptocurrency trading platform with real-time market data.',
    link: '#',
  },
  {
    title: 'Hyro IoT Home System',
    desc: 'Comprehensive smart home solution with AI-powered automation and energy management.',
    link: '#',
  },
];

const experiences = [
  {
    title: 'Assembling Technician',
    company: 'PT Manunggal Kabel Indonesia',
    period: '2021 – 2022',
    desc: 'Responsible for assembling cables with high accuracy to ensure product quality and prevent assembly errors.'
  },
  {
    title: 'Kitchen Staff',
    company: 'Matjeo Korean Grill',
    period: '2022 – 2023',
    desc: 'Handled food preparation and assisted in maintaining taste consistency and kitchen hygiene in a fast-paced environment.'
  },
  {
    title: 'Founder & Web Developer',
    company: 'Juman Photocopy & Web Development',
    period: '2023 – Present',
    desc: 'Established and operate a photocopy business while also providing web development services. Responsible for building and managing websites for small businesses and individuals, as well as overseeing daily business operations.'
  },
];

export default function Home() {
  function handleContactSubmit(e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
  }
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection id="home">
        <HeroContentWrap>
          <ProfileImg
            src={profileImg}
            alt="Deski Andriyanto"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <HeroText>
            <HeroTitle
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Hi, I'm Deski Andriyanto
            </HeroTitle>
            <HeroSubtitle
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Web Developer
            </HeroSubtitle>
            <HeroDesc
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              I am a modern web developer specializing in building elegant, responsive applications designed to deliver exceptional user experiences. With a strong attention to detail and a commitment to quality, I consistently strive to create innovative solutions that align with business goals and add real value to users. I believe that the synergy between the right technology and thoughtful design is the key to building truly impactful digital products.
            </HeroDesc>
            <HeroButton
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </HeroButton>
            <SocialLinks>
              <SocialIcon href="http://www.instagram.com/deski_andri" target="_blank" rel="noopener noreferrer"><FaInstagram /></SocialIcon>
              <SocialIcon href="https://github.com/deskiandriya" target="_blank" rel="noopener noreferrer"><FaGithub /></SocialIcon>
              <SocialIcon href="https://www.linkedin.com/in/deski-andriyanto-b07996241/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></SocialIcon>
            </SocialLinks>
          </HeroText>
        </HeroContentWrap>
      </HeroSection>

      {/* Video Section */}
      <VideoSection>
        <VideoCard>
          <StyledVideo src="/videobg.mp4" autoPlay loop muted playsInline />
        </VideoCard>
      </VideoSection>

      {/* Projects Section */}
      <Section id="projects">
        <SectionTitle
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </SectionTitle>
        <ProjectsGrid>
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.title}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDesc>{project.desc}</ProjectDesc>
              <ProjectButton href={project.link} target="_blank" rel="noopener noreferrer">
                View
              </ProjectButton>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Section>

      {/* About Section */}
      <Section id="about">
        <SectionTitle
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </SectionTitle>
        <AboutGrid>
          <AboutCard
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <AboutTitle>Bio</AboutTitle>
            <AboutText>
              I am a modern web developer specializing in building elegant, responsive applications designed to deliver exceptional user experiences. With a strong attention to detail and a commitment to quality, I consistently strive to create innovative solutions that align with business goals and add real value to users. I believe that the synergy between the right technology and thoughtful design is the key to building truly impactful digital products.
            </AboutText>
          </AboutCard>
          <AboutCard
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <AboutTitle>Work Experience</AboutTitle>
            <Timeline>
              {experiences.map((exp, idx) => (
                <TimelineItem key={exp.title + idx}>
                  <TimelineTitle>{exp.title}</TimelineTitle>
                  <TimelinePeriod>@ {exp.company} ({exp.period})</TimelinePeriod>
                  <TimelineDesc>{exp.desc}</TimelineDesc>
                </TimelineItem>
              ))}
            </Timeline>
          </AboutCard>
        </AboutGrid>
      </Section>

      {/* Contact Section (single card) */}
      <ContactSection id="contact">
        <ContactCard
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ContactTitle>Contact</ContactTitle>
          <ContactInfo><FaEnvelope style={{marginRight:8}}/> deskiandriyanto123@gmail.com</ContactInfo>
          <ContactInfo><FaWhatsapp style={{marginRight:8}}/> 0895377286377</ContactInfo>
          <SocialLinks style={{marginBottom:'1.5rem'}}>
            <SocialIcon href="http://www.instagram.com/deski_andri" target="_blank" rel="noopener noreferrer"><FaInstagram /></SocialIcon>
            <SocialIcon href="https://github.com/deskiandriya" target="_blank" rel="noopener noreferrer"><FaGithub /></SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/deski-andriyanto-b07996241/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></SocialIcon>
          </SocialLinks>
          <ContactForm onSubmit={handleContactSubmit} autoComplete="off">
            <Input type="text" name="name" placeholder="Your Name" required />
            <Input type="email" name="email" placeholder="Your Email" required />
            <Textarea name="message" placeholder="Your Message" required />
            <SubmitButton type="submit">Send Message</SubmitButton>
          </ContactForm>
        </ContactCard>
      </ContactSection>
    </>
  );
} 