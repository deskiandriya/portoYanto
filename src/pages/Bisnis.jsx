import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch, FaShieldAlt, FaCode, FaChartLine } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  position: relative;
  overflow: hidden;
  padding: 0;

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
  gap: 6rem;
  padding: 0 4rem;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 4rem 2rem;
    gap: 4rem;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  transform: perspective(1000px) rotateY(-5deg) translateX(-20px);
  transition: all 0.5s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(106, 130, 251, 0.2), rgba(252, 92, 125, 0.2));
    z-index: 1;
    pointer-events: none;
  }

  &:hover {
    transform: perspective(1000px) rotateY(0deg) translateX(0);
  }

  @media (max-width: 1024px) {
    max-width: 600px;
    margin: 0 auto;
    transform: none;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 32px;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 600px;
  text-align: left;

  @media (max-width: 1024px) {
    max-width: 100%;
    align-items: center;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 5rem;
  font-weight: 900;
  color: #fff;
  margin: 0;
  letter-spacing: -2px;
  line-height: 1.1;
  background: linear-gradient(90deg, #fff 0%, #6a82fb 50%, #fc5c7d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #a0a0a0;
  opacity: 0.9;
  margin: 0;
  line-height: 1.6;
  max-width: 540px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
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

const Section = styled.section`
  padding: 8rem 4rem;
  background: #000;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(106, 130, 251, 0.05) 0%, rgba(0, 0, 0, 0) 70%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 6rem 2rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 4rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(90deg, #fff 0%, #6a82fb 50%, #fc5c7d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 32px;
  padding: 3rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    border-color: rgba(106, 130, 251, 0.3);
    background: rgba(255, 255, 255, 0.05);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FeatureTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #fff;
`;

const FeatureDescription = styled.p`
  color: #a0a0a0;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  color: #a0a0a0;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;

  &::before {
    content: "•";
    color: #6a82fb;
    font-size: 1.5rem;
  }
`;

const features = [
  {
    icon: <FaSearch />,
    title: "Search AI",
    description: "Instant answers to complex blockchain questions",
    items: [
      "Web Search - Explore trusted blockchain sources",
      "Transaction Search - No blockchain experience needed",
      "Code search - Uncover structured insights in seconds"
    ]
  },
  {
    icon: <FaShieldAlt />,
    title: "Security AI",
    description: "AI deployed for real-time transaction prevention",
    items: [
      "dApp & Smart Contract Security",
      "Biometric & Multiparty Authentication",
      "Transaction Security & Fraud Detection"
    ]
  },
  {
    icon: <FaCode />,
    title: "Developer AI",
    description: "No code dApps created in an instant on any chain",
    items: [
      "Build and deploy faster without manual coding",
      "Eliminate errors with AI-driven debugging",
      "Ensure security with AI-audited contracts"
    ]
  },
  {
    icon: <FaChartLine />,
    title: "Data AI",
    description: "Data and institutional-grade blockchain intelligence",
    items: [
      "Hedge Funds & Quant Traders Analytics",
      "Retail Investors & Speculators Insights",
      "Market Movers & Liquidity Monitoring"
    ]
  }
];

export default function Bisnis() {
  return (
    <>
      <Navbar />
      <HeroSection>
        <HeroContent>
          <VideoContainer
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Video src="/src/assets/images/videobg.mp4" autoPlay loop muted playsInline />
          </VideoContainer>
          <TextContent>
            <HeroTitle initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
              The first Foundation AI for Blockchain
            </HeroTitle>
            <HeroSubtitle initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
              Built to redefine the realm of possibility for blockchains. Zark AI is engineered exclusively for blockchain applications, enabling smarter decisions, secure transactions, real-time intelligence and effortless automation.
            </HeroSubtitle>
            <HeroButton 
              href="#features" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Waitlist
            </HeroButton>
          </TextContent>
        </HeroContent>
      </HeroSection>

      <Section id="features">
        <SectionTitle
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Core Capabilities
        </SectionTitle>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <FeatureList>
                {feature.items.map((item, idx) => (
                  <FeatureItem key={idx}>{item}</FeatureItem>
                ))}
              </FeatureList>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Section>
    </>
  );
} 