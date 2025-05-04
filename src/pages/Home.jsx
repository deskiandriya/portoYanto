import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaExclamationTriangle } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.jpg";
import profileNoBg from '../assets/images/profile.png';

// --- Hero Section ---
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  position: relative;
  overflow: hidden;
  padding: 90px 0 0 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(106, 130, 251, 0.1) 0%, rgba(0, 0, 0, 0) 70%);
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  padding: 0 4rem;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 4rem 2rem;
    gap: 2rem;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 9/16;
  min-height: 100vh;
  height: 100%;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  transform: perspective(1000px) rotateY(-5deg) translateX(-20px);
  transition: all 0.5s ease;

  &:hover {
    transform: perspective(1000px) rotateY(0deg) translateX(0);
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    margin: 0 auto 2rem auto;
    transform: none;
    min-height: 60vh;
    height: 100%;
    aspect-ratio: 9/16;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 32px;
  opacity: 0.25;
  filter: contrast(2);
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 600px;
  text-align: left;
  align-items: flex-start;

  @media (max-width: 1024px) {
    max-width: 100%;
    align-items: center;
    text-align: center;
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 3rem;
  background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
  color: #fff;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 8px 32px rgba(106,130,251,0.2);
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  width: fit-content;

  &:hover {
    background: linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%);
    transform: scale(1.05);
    box-shadow: 0 16px 40px rgba(252,92,125,0.25);
  }
`;

// --- Projects Section ---
const Section = styled.section`
  padding: 6rem 0 4rem 0;
  background: #0a0a0a;
  position: relative;
  min-height: 100px;
  @media (max-width: 900px) {
    padding: 3rem 0 2rem 0;
  }
  @media (max-width: 600px) {
    padding: 2rem 0 1.2rem 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.1rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 2.7rem;
  color: #fff;
  letter-spacing: -1px;
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  @media (max-width: 600px) {
    font-size: 1.05rem;
    margin-bottom: 1.2rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  max-width: 950px;
  margin: 0 auto;
  padding: 0 1rem;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 0.3rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(20,20,24,0.85);
  border-radius: 24px;
  padding: 2.2rem 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.06);
  box-shadow: 0 2px 16px rgba(0,0,0,0.12);
  color: #fff;
  transition: all 0.2s cubic-bezier(.4,2,.6,1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  &:hover {
    transform: translateY(-4px) scale(1.01);
    box-shadow: 0 6px 24px rgba(106,130,251,0.13);
    border-color: #6a82fb;
    background: rgba(20,20,24,0.93);
  }
  @media (max-width: 600px) {
    padding: 1.1rem 0.5rem;
    border-radius: 14px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 1.2rem;
  box-shadow: 0 2px 12px rgba(106,130,251,0.10);
  @media (max-width: 600px) {
    height: 120px;
    border-radius: 10px;
    margin-bottom: 0.7rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 800;
  margin-bottom: 0.7rem;
  color: #fff;
  @media (max-width: 600px) {
    font-size: 1.05rem;
    margin-bottom: 0.4rem;
  }
`;

const ProjectDesc = styled.p`
  color: #bdbdbd;
  font-size: 1rem;
  margin-bottom: 1.2rem;
  @media (max-width: 600px) {
    font-size: 0.93rem;
    margin-bottom: 0.7rem;
  }
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

// Glassmorphism reusable card (softer)
const GlassCard = styled(motion.div)`
  background: rgba(20,20,24,0.85);
  border-radius: 24px;
  padding: 2.2rem 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.06);
  box-shadow: 0 2px 16px rgba(0,0,0,0.12);
  color: #fff;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: all 0.2s cubic-bezier(.4,2,.6,1);
  &:hover {
    transform: translateY(-4px) scale(1.01);
    box-shadow: 0 6px 24px rgba(106,130,251,0.13);
    border-color: #6a82fb;
    background: rgba(20,20,24,0.93);
  }
  @media (max-width: 600px) {
    padding: 1.1rem 0.5rem;
    border-radius: 14px;
  }
`;

const MapsFrame = styled.iframe`
  width: 100%;
  min-height: 300px;
  border: none;
  border-radius: 24px;
  margin: 2rem 0 1.2rem 0;
  box-shadow: 0 4px 24px rgba(106,130,251,0.13);
`;

const AddressLink = styled.a`
  color: #fff;
  background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
  font-size: 1.08rem;
  text-decoration: none;
  margin-top: 0.7rem;
  display: inline-block;
  padding: 0.7rem 1.5rem;
  border-radius: 18px;
  font-weight: 600;
  box-shadow: 0 2px 12px rgba(106,130,251,0.10);
  transition: background 0.2s, color 0.2s, transform 0.2s;
  &:hover {
    color: #fff;
    background: linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%);
    transform: scale(1.04);
  }
`;

const ClockBox = styled.div`
  margin-top: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

const ClockDigital = styled.span`
  font-size: 2.1rem;
  font-family: 'Share Tech Mono', monospace;
  color: #fff;
  background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  letter-spacing: 2px;
  min-width: 140px;
  text-align: left;
  transition: all 0.4s cubic-bezier(.4,2,.6,1);
`;

// --- About Section ---
const AboutSection = styled(Section)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 3rem;
  background: none;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 4rem;
  padding-bottom: 4rem;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  @media (max-width: 600px) {
    gap: 1.2rem;
    padding: 1.2rem 0.5rem 2rem 0.5rem;
  }
  @media (max-width: 500px) {
    padding: 1.2rem 0.2rem 2rem 0.2rem;
    gap: 0.7rem;
  }
`;
const AboutTextCol = styled.div`
  flex: 1 1 0;
  min-width: 0;
  max-width: 700px;
  margin-right: 2rem;
  @media (max-width: 900px) {
    margin-right: 0;
    max-width: 100%;
  }
  @media (max-width: 600px) {
    margin-right: 0;
    max-width: 100%;
    text-align: center;
  }
  @media (max-width: 500px) {
    padding: 0 0.2rem;
  }
`;
const AboutPhotoCol = styled.div`
  flex: 0 0 260px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  position: relative;
  @media (max-width: 900px) {
    justify-content: center;
    margin-bottom: 2rem;
  }
  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 500px) {
    margin-bottom: 2.2rem;
  }
`;
const AboutPhotoGlow = styled.div`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: radial-gradient(circle, #6a82fb55 0%, #fc5c7d22 80%, transparent 100%);
  filter: blur(32px);
  z-index: 0;
  @media (max-width: 600px) {
    width: 140px;
    height: 140px;
    top: 10px;
  }
  @media (max-width: 500px) {
    width: 110px;
    height: 110px;
    top: 0;
  }
`;
const AboutPhoto = styled(motion.img)`
  width: 220px;
  max-width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 18px;
  box-shadow: 0 8px 40px rgba(106,130,251,0.18);
  position: relative;
  z-index: 1;
  background: none;
  border: none;
  @media (max-width: 600px) {
    width: 140px;
    margin-bottom: 1.2rem;
  }
  @media (max-width: 500px) {
    width: 90px;
    margin-bottom: 1.7rem;
  }
`;
const GradientTitle = styled(SectionTitle)`
  background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 2.2rem;
  text-align: left;
  @media (max-width: 900px) {
    text-align: center;
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
  }
`;
const AboutText = styled.p`
  color: #bdbdbd;
  font-size: 1.13rem;
  margin-bottom: 2.2rem;
  line-height: 1.7;
  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 1.2rem;
  }
`;
const EducationTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 2.5rem 0 1.2rem 0;
  color: #fff;
  @media (max-width: 600px) {
    margin: 1.5rem 0 0.7rem 0;
    font-size: 1.05rem;
  }
`;
const EducationList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
  @media (max-width: 500px) {
    gap: 0.5rem;
  }
`;
const EducationCard = styled(motion.div)`
  background: rgba(20,20,24,0.65);
  border-radius: 18px;
  padding: 1.2rem 1.5rem;
  box-shadow: 0 2px 12px rgba(106,130,251,0.10);
  color: #fff;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1.5px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(8px);
  transition: box-shadow 0.3s, transform 0.3s;
  width: 100%;
  &:hover {
    box-shadow: 0 8px 32px #6a82fb33;
    transform: translateY(-4px) scale(1.03);
    border-color: #6a82fb;
  }
  @media (max-width: 600px) {
    padding: 0.8rem 0.7rem;
    border-radius: 10px;
    font-size: 0.97rem;
  }
  @media (max-width: 500px) {
    padding: 0.7rem 0.3rem;
    font-size: 0.93rem;
  }
`;
const EducationPeriod = styled.span`
  font-weight: 700;
  color: #6a82fb;
  margin-right: 0.7rem;
`;

// --- Contact Section (split) ---
const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  max-width: 950px;
  margin: 0 auto;
  padding: 0 1rem;
  align-items: stretch;
  justify-content: center;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  @media (max-width: 600px) {
    padding: 0 0.3rem;
  }
`;

const ContactSection = styled.section`
  padding: 6rem 1rem 4rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
`;

const ContactTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 2rem;
  background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -1px;
  text-align: left;
`;

const ContactInfo = styled.p`
  color: #bdbdbd;
  font-size: 1.15rem;
  margin-bottom: 1.5rem;
  word-break: break-all;
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

const Input = styled.input`
  padding: 1.1rem 1.4rem;
  border-radius: 18px;
  border: none;
  background: rgba(255,255,255,0.13);
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  outline: none;
  transition: box-shadow 0.2s, background 0.2s;
  box-shadow: 0 2px 8px rgba(106,130,251,0.07);
  &::placeholder {
    color: #bdbdbd;
    opacity: 1;
  }
  &:focus {
    background: rgba(106,130,251,0.10);
    box-shadow: 0 0 0 2px #6a82fb44;
  }
`;

const Textarea = styled.textarea`
  padding: 1.1rem 1.4rem;
  border-radius: 18px;
  border: none;
  background: rgba(255,255,255,0.13);
  color: #fff;
  font-size: 1.1rem;
  min-height: 120px;
  outline: none;
  transition: box-shadow 0.2s, background 0.2s;
  box-shadow: 0 2px 8px rgba(106,130,251,0.07);
  &::placeholder {
    color: #bdbdbd;
    opacity: 1;
  }
  &:focus {
    background: rgba(106,130,251,0.10);
    box-shadow: 0 0 0 2px #6a82fb44;
  }
`;

const SubmitButton = styled.button`
  padding: 1.2rem 0;
  background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
  color: #fff;
  border-radius: 30px;
  font-weight: 700;
  font-size: 1.25rem;
  border: none;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: all 0.3s;
  width: 100%;
  box-shadow: 0 4px 16px rgba(106,130,251,0.13);
  &:hover {
    background: linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%);
    transform: scale(1.04);
    box-shadow: 0 8px 32px rgba(252,92,125,0.18);
  }
`;

// Add back SocialLinks and SocialIcon for Contact section
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

// --- Data ---
const projects = [
  {
    title: 'HyroFinance',
    desc: 'Advanced analysis platform to manage your finances and provide accurate information according to your data.',
    link: '#',
    image: project1,
    maintenance: false,
  },
  {
    title: 'HyroTrade',
    desc: 'Secure and efficient cryptocurrency trading platform with real-time market data.',
    link: '#',
    image: project2,
    maintenance: true,
  },
  {
    title: 'Hyro IoT Home System',
    desc: 'Comprehensive smart home solution with AI-powered automation and energy management.',
    link: '#',
    image: project2,
    maintenance: true,
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(10,10,20,0.45);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s;
  @keyframes fadeIn {
    from { opacity: 0; } to { opacity: 1; }
  }
`;
const ModalBox = styled.div`
  background: rgba(30,30,40,0.85);
  border-radius: 24px;
  padding: 2.5rem 2rem 2rem 2rem;
  min-width: 320px;
  max-width: 90vw;
  box-shadow: 0 8px 40px rgba(106,130,251,0.18);
  backdrop-filter: blur(18px);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: zoomIn 0.3s;
  @keyframes zoomIn {
    from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; }
  }
`;
const ModalIcon = styled.div`
  font-size: 3rem;
  color: #fc5c7d;
  margin-bottom: 1.2rem;
`;
const ModalTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.7rem;
`;
const ModalDesc = styled.div`
  color: #bdbdbd;
  font-size: 1.08rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;
const ModalClose = styled.button`
  padding: 0.7rem 2.2rem;
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

const WorkExpSection = styled.section`
  padding: 6rem 0 4rem 0;
  background: #0a0a0a;
  position: relative;
  min-height: 100px;
  @media (max-width: 900px) {
    padding: 3rem 0 2rem 0;
  }
  @media (max-width: 600px) {
    padding: 2rem 0 1.2rem 0;
  }
`;
const WorkExpTitle = styled(motion.h2)`
  font-size: 2.1rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 2.7rem;
  color: #fff;
  letter-spacing: -1px;
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  @media (max-width: 600px) {
    font-size: 1.05rem;
    margin-bottom: 1.2rem;
  }
`;
const WorkExpGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  max-width: 950px;
  margin: 0 auto;
  padding: 0 1rem;
`;
const WorkExpCard = styled(motion.div)`
  background: rgba(20,20,24,0.85);
  border-radius: 24px;
  padding: 2.2rem 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.06);
  box-shadow: 0 2px 16px rgba(0,0,0,0.12);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 500px;
  width: 100%;
  transition: all 0.2s cubic-bezier(.4,2,.6,1);
  &:hover {
    transform: translateY(-4px) scale(1.01);
    box-shadow: 0 6px 24px rgba(106,130,251,0.13);
    border-color: #6a82fb;
    background: rgba(20,20,24,0.93);
  }
  @media (max-width: 900px) {
    max-width: 100%;
    align-items: center;
    text-align: center;
  }
`;
const WorkExpRow = styled.div`
  display: flex;
  justify-content: ${props => props.align === 'right' ? 'flex-end' : 'flex-start'};
  width: 100%;
  @media (max-width: 900px) {
    justify-content: center;
  }
`;
const WorkExpCompany = styled.h3`
  font-size: 1.15rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: #fff;
`;
const WorkExpPeriod = styled.div`
  color: #6a82fb;
  font-size: 1rem;
  margin-bottom: 0.7rem;
`;
const WorkExpDesc = styled.p`
  color: #bdbdbd;
  font-size: 1rem;
  margin-bottom: 0;
`;

export default function Home() {
  function handleContactSubmit(e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
  }

  // Real-time clock for Contact section (no fade bug)
  const [clock, setClock] = useState('');
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setClock(now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Modal maintenance
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState('');
  const openModal = (project) => {
    setModalProject(project);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection id="home">
        <HeroContent>
          <VideoContainer>
            <Video src="/videobg.mp4" autoPlay loop muted playsInline />
          </VideoContainer>
          <TextContent>
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
          </TextContent>
        </HeroContent>
      </HeroSection>

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
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDesc>{project.desc}</ProjectDesc>
              <ProjectButton
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={project.maintenance ? (e) => { e.preventDefault(); openModal(project.title); } : undefined}
              >
                View
              </ProjectButton>
            </ProjectCard>
          ))}
        </ProjectsGrid>
        {modalOpen && (
          <ModalOverlay onClick={closeModal}>
            <ModalBox onClick={e => e.stopPropagation()}>
              <ModalIcon><FaExclamationTriangle /></ModalIcon>
              <ModalTitle>Project Under Maintenance</ModalTitle>
              <ModalDesc>
                {modalProject} is currently under maintenance.<br />Please check back later!
              </ModalDesc>
              <ModalClose onClick={closeModal}>Close</ModalClose>
            </ModalBox>
          </ModalOverlay>
        )}
      </Section>

      {/* About Section */}
      <AboutSection id="about">
        <AboutTextCol>
          <GradientTitle
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Me
          </GradientTitle>
          <AboutText>
            I am a modern web developer specializing in building elegant, responsive applications designed to deliver exceptional user experiences. With a strong attention to detail and a commitment to quality, I consistently strive to create innovative solutions that align with business goals and add real value to users. I believe that the synergy between the right technology and thoughtful design is the key to building truly impactful digital products.
          </AboutText>
          <EducationTitle>Educational Experience</EducationTitle>
          <EducationList>
            <EducationCard
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <EducationPeriod>2009–2015</EducationPeriod> SDN Kalisapu 01
            </EducationCard>
            <EducationCard
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <EducationPeriod>2015–2018</EducationPeriod> MTs N Slawi
            </EducationCard>
            <EducationCard
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <EducationPeriod>2018–2021</EducationPeriod> SMKN 03 Tegal
            </EducationCard>
          </EducationList>
        </AboutTextCol>
        <AboutPhotoCol>
          <AboutPhotoGlow />
          <AboutPhoto
            src={profileNoBg}
            alt="Profile"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </AboutPhotoCol>
      </AboutSection>

      {/* Work Experience Section */}
      <WorkExpSection id="workexp">
        <WorkExpTitle
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Work Experience
        </WorkExpTitle>
        <WorkExpGrid>
          <WorkExpRow align="left">
            <WorkExpCard
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <WorkExpCompany>PT Manunggal Kabel Indonesia</WorkExpCompany>
              <WorkExpPeriod>2021 – 2022</WorkExpPeriod>
              <WorkExpDesc>Responsible for assembling cables with high accuracy to ensure product quality and prevent assembly errors.</WorkExpDesc>
            </WorkExpCard>
          </WorkExpRow>
          <WorkExpRow align="right">
            <WorkExpCard
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <WorkExpCompany>Matjeo Korean Grill</WorkExpCompany>
              <WorkExpPeriod>2022 – 2023</WorkExpPeriod>
              <WorkExpDesc>Handled food preparation and assisted in maintaining taste consistency and kitchen hygiene in a fast-paced environment.</WorkExpDesc>
            </WorkExpCard>
          </WorkExpRow>
          <WorkExpRow align="left">
            <WorkExpCard
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <WorkExpCompany>Juman Photocopy & Web Development</WorkExpCompany>
              <WorkExpPeriod>2023 – Present</WorkExpPeriod>
              <WorkExpDesc>Established and operate a photocopy business while also providing web development services. Responsible for building and managing websites for small businesses and individuals, as well as overseeing daily business operations.</WorkExpDesc>
            </WorkExpCard>
          </WorkExpRow>
        </WorkExpGrid>
      </WorkExpSection>

      {/* Contact Section (split) */}
      <ContactSection id="contact">
        <ContactGrid>
          <GlassCard
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{alignItems:'flex-start', minWidth:300, flex:1}}
          >
            <ContactTitle>Contact</ContactTitle>
            <ContactInfo><FaEnvelope style={{marginRight:8}}/> deskiandriyanto123@gmail.com</ContactInfo>
            <ContactInfo><FaWhatsapp style={{marginRight:8}}/> 0895377286377</ContactInfo>
            <SocialLinks style={{marginBottom:'1.5rem'}}>
              <SocialIcon href="http://www.instagram.com/deski_andri" target="_blank" rel="noopener noreferrer"><FaInstagram /></SocialIcon>
              <SocialIcon href="https://github.com/deskiandriya" target="_blank" rel="noopener noreferrer"><FaGithub /></SocialIcon>
              <SocialIcon href="https://www.linkedin.com/in/deski-andriyanto-b07996241/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></SocialIcon>
            </SocialLinks>
            <MapsFrame
              src="https://www.google.com/maps?q=Jl.+Samadikun+RT+001+RW+003,+Kel.+Debong+lor,+Kec.+Tegal+Barat,+Kota+Tegal&output=embed"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Rumah"
            />
            <div style={{marginTop:'0.5rem'}}>
              <strong>Alamat:</strong> Jl. Samadikun RT 001 RW 003, Kel. Debong lor, Kec. Tegal Barat, Kota Tegal
              <br />
              <AddressLink href="https://maps.app.goo.gl/1NsdysgTHAv2GmDb7" target="_blank" rel="noopener noreferrer">
                Lihat di Google Maps
              </AddressLink>
              <ClockBox>
                <span>Waktu Lokal:</span>
                <ClockDigital>{clock} WIB</ClockDigital>
              </ClockBox>
            </div>
          </GlassCard>
          <GlassCard
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{minWidth:300, flex:1}}
          >
            <ContactTitle>Get in Touch</ContactTitle>
            <ContactForm onSubmit={handleContactSubmit} autoComplete="off">
              <Input type="text" name="name" placeholder="Your Name" required />
              <Input type="email" name="email" placeholder="Your Email" required />
              <Textarea name="message" placeholder="Your Message" required />
              <SubmitButton type="submit">Send Message</SubmitButton>
            </ContactForm>
          </GlassCard>
        </ContactGrid>
      </ContactSection>
    </>
  );
} 