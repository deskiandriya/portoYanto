import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutSection = styled.section`
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      ${({ theme }) => theme.text}33,
      transparent
    );
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  opacity: 1;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutContent = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60%;
      height: 4px;
      background: var(--color-primary);
      border-radius: 2px;
    }

    @media (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.secondary};
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.6;
    }
  }
`;

const SkillsContainer = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    color: var(--color-primary);

    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const SkillCategory = styled.div`
  h4 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.text};

    @media (max-width: 768px) {
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }
  }
`;

const SkillItem = styled.div`
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const SkillName = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 4px;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${props => props.$progress}%;
    background: var(--color-primary);
    border-radius: 4px;
    animation: progressAnimation 1.5s ease-out forwards;
    transform-origin: left;
  }

  @keyframes progressAnimation {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    height: 6px;
    margin-bottom: 0.75rem;
  }
`;

const Skill = ({ name, progress }) => (
  <SkillItem>
    <SkillName>{name}</SkillName>
    <ProgressBar $progress={progress} />
  </SkillItem>
);

const About = () => {
  const frontendSkills = [
    { name: 'React/Next.js', progress: 90 },
    { name: 'JavaScript/TypeScript', progress: 85 },
    { name: 'HTML5/CSS3', progress: 95 },
    { name: 'Tailwind/Styled Components', progress: 88 }
  ];

  const backendSkills = [
    { name: 'Node.js/Express', progress: 85 },
    { name: 'Python/Django', progress: 80 },
    { name: 'SQL/NoSQL', progress: 82 },
    { name: 'REST/GraphQL', progress: 85 }
  ];

  return (
    <AboutSection id="about">
      <Container>
        <AboutContent>
          <h2>About Me</h2>
          <p>      
            As an enthusiastic Full Stack Developer, I enjoy the challenge of turning complex problems into simple and elegant solutions. 
            With expertise in both front-end and back-end, I focus on building seamless, user experience-oriented applications.
          </p>
          <p>
            During my journey in software development, I have gone through various technologies and frameworks, while keeping up to date with industry trends and best practices.
            I believe that writing clean and maintainable code is the key to building applications that can continue to evolve over time.
          </p>
        </AboutContent>
        <SkillsContainer>
          <h3>Technical Expertise</h3>
          <SkillGrid>
            <SkillCategory>
              <h4>Frontend Development</h4>
              {frontendSkills.map((skill, index) => (
                <Skill key={index} name={skill.name} progress={skill.progress} />
              ))}
            </SkillCategory>
            <SkillCategory>
              <h4>Backend Development</h4>
              {backendSkills.map((skill, index) => (
                <Skill key={index} name={skill.name} progress={skill.progress} />
              ))}
            </SkillCategory>
          </SkillGrid>
        </SkillsContainer>
      </Container>
    </AboutSection>
  );
};

export default About;
