import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch, FaShieldAlt, FaCode, FaChartLine } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 5rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 2rem;
  letter-spacing: -2px;
  line-height: 1.1;
  background: linear-gradient(90deg, #fff 0%, #a0a0a0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.8rem;
  color: #a0a0a0;
  opacity: 0.9;
  margin-bottom: 3rem;
  max-width: 800px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const HeroButton = styled(motion.a)`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 1.2rem 3rem;
  background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
  color: #fff;
  border-radius: 50px;
  font-size: 1.3rem;
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

const Section = styled.section`
  padding: 8rem 1rem;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(90deg, #fff 0%, #a0a0a0 100%);
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    border-color: rgba(106, 130, 251, 0.3);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #6a82fb;
`;

const FeatureTitle = styled.h3`
  font-size: 1.8rem;
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
                {feature.items.map((item, i) => (
                  <FeatureItem key={i}>{item}</FeatureItem>
                ))}
              </FeatureList>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Section>
    </>
  );
} 