import React, { useState } from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.background};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, var(--color-primary) 0%, transparent 70%);
    opacity: 0.1;
    transform: rotate(-45deg);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProjectCard = styled.div`
  background: ${({ theme }) => `rgba(${theme.mode === 'dark' ? '255,255,255,0.05' : '0,0,0,0.02'})`};
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => `rgba(${theme.mode === 'dark' ? '255,255,255,0.1' : '0,0,0,0.1'})`};
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 15px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px ${({ theme }) => `rgba(${theme.mode === 'dark' ? '0,0,0,0.3' : '0,0,0,0.1'})`};
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    height: 180px;
    border-radius: 8px;
    margin-bottom: 1rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
  }
`;

const ProjectTech = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    gap: 0.4rem;
    margin-bottom: 0.75rem;
  }
`;

const TechTag = styled.span`
  padding: 0.3rem 0.8rem;
  background: var(--color-primary);
  color: white;
  border-radius: 20px;
  font-size: 0.8rem;
  opacity: 0.9;

  @media (max-width: 480px) {
    padding: 0.25rem 0.6rem;
    font-size: 0.75rem;
  }
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.secondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

const ProjectLink = styled.a`
  color: var(--color-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
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
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Notification = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: ${({ theme }) => theme.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'};
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  border-radius: 10px;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.3s ease-out;
  z-index: 1000;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media (max-width: 480px) {
    top: 10px;
    right: 10px;
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const projects = [
  {
    title: "HyroFinance",
    image: "https://raw.githubusercontent.com/deskiandriya/portoYanto/main/src/assets/images/project1.png",
    tech: ["React", "Node.js", "Chart.js", "JSON"],
    description: "Advanced analysis platform that helps you to manage your finances and provides accurate information according to the data you provide.",
    link: "https://deski-porto.vercel.app/hyrofinance"
  },
  {
    title: "HyroTrade",
    image: "https://raw.githubusercontent.com/deskiandriya/portoYanto/main/src/assets/images/project2.jpg",
    tech: ["React", "Solidity", "Web3.js", "Firebase"],
    description: "Secure and efficient cryptocurrency trading platform with real-time market data.",
    maintenance: true
  },
  {
    title: "Smart Home System",
    image: "https://raw.githubusercontent.com/deskiandriya/portoYanto/main/src/assets/images/project2.jpg",
    tech: ["React Native", "Python", "MongoDB", "MQTT"],
    description: "Comprehensive smart home solution with AI-powered automation and energy management.",
    maintenance: true
  }
];

const Projects = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleProjectClick = (project) => {
    if (project.maintenance) {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
  };

  return (
    <ProjectsSection id="projects">
      <SectionTitle>Featured Projects</SectionTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            onClick={() => handleProjectClick(project)}
          >
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectTech>
              {project.tech.map((tech, i) => (
                <TechTag key={i}>{tech}</TechTag>
              ))}
            </ProjectTech>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
              View Project <i className="fas fa-arrow-right"></i>
            </ProjectLink>
          </ProjectCard>
        ))}
      </ProjectsGrid>
      {showNotification && (
        <Notification>
          Project ini sedang dalam maintenance
        </Notification>
      )}
    </ProjectsSection>
  );
};

export default Projects;
