import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ExperienceSection = styled.section`
  position: relative;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  opacity: 1;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.text};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: var(--color-primary);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: ${({ theme }) => theme.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'};
  }

  @media (max-width: 768px) {
    &::before {
      left: 15px;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: ${props => props.align === 'right' ? 'flex-end' : 'flex-start'};
  padding-bottom: 3rem;
  width: 100%;
  opacity: 0;
  animation: ${fadeInUp} 0.6s ease forwards;
  animation-delay: ${props => props.delay}s;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 30px;
    padding-bottom: 2rem;
  }
`;

const TimelineContent = styled.div`
  width: 45%;
  padding: 2rem;
  background: ${({ theme }) => `rgba(${theme.mode === 'dark' ? '255,255,255,0.05' : '0,0,0,0.02'})`};
  border-radius: 15px;
  position: relative;
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => `rgba(${theme.mode === 'dark' ? '255,255,255,0.1' : '0,0,0,0.1'})`};
  box-shadow: 0 10px 20px ${({ theme }) => `rgba(${theme.mode === 'dark' ? '0,0,0,0.2' : '0,0,0,0.1'})`};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    ${props => props.align === 'right' ? 'left: -15px;' : 'right: -15px;'};
    width: 30px;
    height: 30px;
    background: var(--color-primary);
    border-radius: 50%;
    
    @media (max-width: 768px) {
      left: -45px;
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const TimelinePeriod = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: var(--color-primary);
  color: white;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
`;

const TimelineTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const TimelineCompany = styled.h4`
  font-size: 1.1rem;
  color: var(--color-primary);
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const TimelineDescription = styled.p`
  color: ${({ theme }) => theme.secondary};
  line-height: 1.6;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const Experience = () => {
  const experiences = [
    {
      period: "2023 - Present",
      title: "Web Developer",
      company: "Juman Photocopy",
      description: "Responsible for Frontend and Backend web development using HTML, CSS Tailwind, React, Vite etc for Frontend. Then Node.js, PHP, Python, and Java. Implementing microservice architecture and improving system performance up to 40%.",
      align: "left"
    },
    {
      period: "2022-2023",
      title: "Kithcen Staff",
      company: "Matjeo Korean Grill",
      description: "cook various Korean foods with appropriate flavors. various Korean foods such as kimbab, kimchi, tomyam, and collagen.",
      align: "right"
    },
    {
      period: "2021-2022",
      title: "Operator Produksi",
      company: "PT Manunggal Kabel",
      description: "Assemble cables carefully according to company SOP and prioritize quality so that there are no technical errors during finishing.",
      align: "left"
    }
  ];

  return (
    <ExperienceSection id="experience">
      <Container>
        <SectionTitle>Work Experience</SectionTitle>
        <Timeline>
          {experiences.map((exp, index) => (
            <TimelineItem key={index} align={exp.align} delay={0.2 * (index + 1)}>
              <TimelineContent align={exp.align}>
                <TimelinePeriod>{exp.period}</TimelinePeriod>
                <TimelineTitle>{exp.title}</TimelineTitle>
                <TimelineCompany>{exp.company}</TimelineCompany>
                <TimelineDescription>{exp.description}</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
