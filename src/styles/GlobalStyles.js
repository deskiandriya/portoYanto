import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: ${({ colorScheme }) => {
      const colors = {
        coral: '#FF6B6B',
        mint: '#4ECDC4',
        blue: '#45B7D1',
        pink: '#FF69B4',
        yellow: '#FFD93D',
        orange: '#FF8C42',
        cyan: '#00BCD4',
        purple: '#9B59B6'
      };
      return colors[colorScheme] || colors.blue;
    }};
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    transition: all 0.3s ease-in-out;
    overflow-x: hidden;
    position: relative;
    
    &::-webkit-scrollbar {
      width: 10px;
    }
    
    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.background};
    }
    
    &::-webkit-scrollbar-thumb {
      background: var(--color-primary);
      border-radius: 5px;
      
      &:hover {
        background: ${({ theme }) => theme.secondary};
      }
    }
  }

  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 20%, rgba(97, 218, 251, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(97, 218, 251, 0.1) 0%, transparent 50%);
    z-index: -1;
    animation: backgroundPulse 15s ease-in-out infinite;
  }

  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(45deg, transparent 48%, rgba(97, 218, 251, 0.05) 49%, rgba(97, 218, 251, 0.05) 51%, transparent 52%),
      linear-gradient(-45deg, transparent 48%, rgba(97, 218, 251, 0.05) 49%, rgba(97, 218, 251, 0.05) 51%, transparent 52%);
    background-size: 50px 50px;
    z-index: -1;
    animation: backgroundMove 20s linear infinite;
  }

  @keyframes backgroundPulse {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 0.5;
    }
  }

  @keyframes backgroundMove {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 50px 50px;
    }
  }

  /* Particle Animation */
  .particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
  }

  .particle {
    position: absolute;
    width: 2px;
    height: 2px;
    background: var(--color-primary);
    border-radius: 50%;
    opacity: 0.5;
    animation: particleFloat 15s infinite;
  }

  @keyframes particleFloat {
    0% {
      transform: translateY(0) translateX(0);
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      transform: translateY(-100vh) translateX(100px);
      opacity: 0;
    }
  }

  /* Section Background Animation */
  section {
    position: relative;
    overflow: hidden;
  }

  section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent 0%, rgba(97, 218, 251, 0.05) 100%);
    z-index: -1;
    animation: sectionBackground 10s ease-in-out infinite;
  }

  @keyframes sectionBackground {
    0% {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;
    line-height: 1.2;
    
    @media (max-width: 768px) {
      font-size: 90%;
    }
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    
    &:hover {
      color: ${({ theme }) => theme.text};
    }
    
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -2px;
      left: 0;
      background-color: var(--color-primary);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
    }
    
    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  button {
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
    cursor: pointer;
  }

  .layout {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    position: relative;
  }

  .theme-controls {
    position: fixed;
    top: 2rem;
    right: 2rem;
    display: flex;
    gap: 1rem;
    z-index: 1000;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 1rem;
    border-radius: 20px;
    
    .color-scheme-selector {
      transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .theme-toggle {
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    &.scrolled {
      .theme-toggle {
        position: fixed;
        top: 1rem;
        left: 1rem;
        background: ${({ theme }) => `rgba(${theme.mode === 'dark' ? '0,0,0,0.8' : '255,255,255,0.8'})`};
        backdrop-filter: blur(10px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        padding: 0.75rem;
        border-radius: 15px;
        
        &::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 15px;
          padding: 2px;
          background: linear-gradient(45deg, var(--color-primary), transparent);
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      }
    }
  }

  .content-section {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    
    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    .layout {
      padding: 1rem;
    }

    section {
      padding: 4rem 1.5rem;
      min-height: auto;
    }

    h1 {
      font-size: 2rem;
      line-height: 1.2;
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.95rem;
      line-height: 1.6;
    }

    .theme-controls {
      top: 0.5rem;
      right: 0.5rem;
      gap: 0.5rem;
      padding: 0.5rem;
      
      .color-scheme-selector {
        transform: scale(0.85);
      }
      
      .theme-toggle {
        transform: scale(0.85);
      }
      
      &.scrolled {
        .theme-toggle {
          top: auto;
          bottom: 1rem;
          left: 1rem;
          padding: 0.5rem;
          transform: scale(0.8);
          background: ${({ theme }) => `rgba(${theme.mode === 'dark' ? '0,0,0,0.9' : '255,255,255,0.9'})`};
        }
      }
    }
  }

  @media (max-width: 480px) {
    section {
      padding: 3rem 1rem;
    }

    .profile-section {
      img {
        width: 150px;
        height: 150px;
      }
    }

    .projects-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .project-card {
      padding: 1.25rem;
      
      h3 {
        font-size: 1.25rem;
      }
      
      .tech-stack {
        gap: 0.5rem;
        flex-wrap: wrap;
        
        span {
          font-size: 0.8rem;
          padding: 0.35rem 0.75rem;
        }
      }
    }

    .experience-timeline {
      padding-left: 1.5rem;
      
      &::before {
        left: 0;
      }
      
      .timeline-item {
        margin-bottom: 2rem;
        
        &::before {
          left: -1.5rem;
        }
      }
    }

    .skills-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .contact-section {
      form {
        gap: 1rem;
      }
    }

    .theme-controls {
      gap: 0.4rem;
      padding: 0.4rem;
      
      .color-scheme-selector {
        transform: scale(0.8);
      }
      
      .theme-toggle {
        transform: scale(0.8);
      }
      
      &.scrolled {
        .theme-toggle {
          bottom: 0.75rem;
          left: 0.75rem;
          padding: 0.4rem;
          transform: scale(0.75);
        }
      }
    }

    body {
      font-size: 14px;
    }

    h1 {
      font-size: 1.75rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.9rem;
      line-height: 1.5;
    }
    
    .container {
      padding: 0 1rem;
    }
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    
    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .delay-1 { transition-delay: 0.1s; }
  .delay-2 { transition-delay: 0.2s; }
  .delay-3 { transition-delay: 0.3s; }

  .experience-timeline {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    padding-left: 0;
    
    .timeline-item {
      position: relative;
      margin-bottom: 2.5rem;
      padding: 1.5rem;
      background: ${({ theme }) => theme.cardBackground};
      border-radius: 12px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      
      &:last-child {
        margin-bottom: 0;
      }
      
      .timeline-date {
        color: var(--color-primary);
        font-size: 0.9rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
        display: inline-block;
        padding: 0.25rem 0.75rem;
        background: ${({ theme }) => theme.tagBackground};
        border-radius: 20px;
      }
      
      .timeline-title {
        font-size: 1.1rem;
        font-weight: 600;
        color: ${({ theme }) => theme.text};
        margin-bottom: 0.5rem;
      }
      
      .timeline-company {
        color: ${({ theme }) => theme.textSecondary};
        font-size: 1rem;
        margin-bottom: 1rem;
      }
      
      .timeline-description {
        color: ${({ theme }) => theme.textSecondary};
        font-size: 0.95rem;
        line-height: 1.6;
      }
      
      @media (max-width: 768px) {
        padding: 1.25rem;
        margin-bottom: 1.5rem;
        
        .timeline-title {
          font-size: 1rem;
        }
        
        .timeline-company {
          font-size: 0.95rem;
        }
        
        .timeline-description {
          font-size: 0.9rem;
          line-height: 1.5;
        }
      }
      
      @media (max-width: 480px) {
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 8px;
        
        .timeline-date {
          font-size: 0.85rem;
          padding: 0.2rem 0.6rem;
        }
        
        .timeline-title {
          font-size: 0.95rem;
        }
        
        .timeline-company {
          font-size: 0.9rem;
          margin-bottom: 0.75rem;
        }
        
        .timeline-description {
          font-size: 0.85rem;
        }
      }
    }
  }

  section {
    min-height: auto;
    padding: 6rem 2rem;
    width: 100%;
    position: relative;
    overflow: visible;
    
    @media (max-width: 768px) {
      padding: 4rem 1.5rem;
      overflow: visible;
    }
    
    @media (max-width: 480px) {
      padding: 3rem 1rem;
      overflow: visible;
    }
  }

  .section-content {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      max-width: 100%;
    }
  }

  .technical-expertise {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    width: 100%;
    max-width: 900px;
    margin: 2rem auto;
    overflow: visible;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      margin: 1.5rem auto;
    }

    @media (max-width: 480px) {
      gap: 1rem;
      margin: 1rem auto;
    }
    
    .expertise-column {
      width: 100%;
      
      h3 {
        color: var(--color-primary);
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
        
        @media (max-width: 480px) {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }
      }
      
      .skill-list {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        
        .skill-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1rem;
          color: ${({ theme }) => theme.textSecondary};
          
          &::before {
            content: '';
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: var(--color-primary);
            flex-shrink: 0;
          }
          
          @media (max-width: 480px) {
            font-size: 0.9rem;
            gap: 0.4rem;
            
            &::before {
              width: 4px;
              height: 4px;
            }
          }
        }
      }
    }
  }

  .projects-section {
    width: 100%;
    overflow: visible;
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      width: 100%;
      max-width: 1200px;
      margin: 2rem auto;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        margin: 1.5rem auto;
      }
      
      @media (max-width: 480px) {
        gap: 1rem;
        margin: 1rem auto;
      }
    }
    
    .project-card {
      background: ${({ theme }) => theme.cardBackground};
      border-radius: 12px;
      padding: 1.5rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      
      @media (max-width: 480px) {
        padding: 1.25rem;
        border-radius: 8px;
      }
      
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 8px;
        
        @media (max-width: 480px) {
          height: 160px;
        }
      }
      
      h3 {
        font-size: 1.25rem;
        color: ${({ theme }) => theme.text};
        margin: 0;
        
        @media (max-width: 480px) {
          font-size: 1.1rem;
        }
      }
      
      p {
        color: ${({ theme }) => theme.textSecondary};
        font-size: 0.95rem;
        line-height: 1.6;
        margin: 0;
        flex-grow: 1;
        
        @media (max-width: 480px) {
          font-size: 0.9rem;
          line-height: 1.5;
        }
      }
      
      .tech-stack {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: auto;
        
        span {
          background: ${({ theme }) => theme.tagBackground};
          color: var(--color-primary);
          padding: 0.35rem 0.75rem;
          border-radius: 20px;
          font-size: 0.85rem;
          
          @media (max-width: 480px) {
            font-size: 0.8rem;
            padding: 0.25rem 0.6rem;
          }
        }
      }
    }
  }

  .experience-card {
    background: ${({ theme }) => theme.cardBackground};
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    
    @media (max-width: 480px) {
      padding: 1.25rem;
      margin-bottom: 1rem;
      border-radius: 8px;
    }
    
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
      
      @media (max-width: 480px) {
        flex-direction: column;
        gap: 0.5rem;
      }
      
      .position {
        font-size: 1.1rem;
        font-weight: 600;
        color: ${({ theme }) => theme.text};
        
        @media (max-width: 480px) {
          font-size: 1rem;
        }
      }
      
      .company {
        color: var(--color-primary);
        font-weight: 500;
      }
      
      .date {
        color: ${({ theme }) => theme.textSecondary};
        font-size: 0.9rem;
      }
    }
    
    .card-content {
      color: ${({ theme }) => theme.textSecondary};
      font-size: 0.95rem;
      line-height: 1.6;
      
      @media (max-width: 480px) {
        font-size: 0.9rem;
        line-height: 1.5;
      }
    }
  }

  .social-icons a {
    color: #fff;
    font-size: 1.5rem;
    margin: 0 10px;
    transition: all 0.3s ease;
  }

  .social-icons a:hover {
    transform: translateY(-5px);
    color: #61dafb;
  }

  .project-card {
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    transition: all 0.3s ease;
  }

  .project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }

  .project-links a {
    color: #333;
    font-size: 1.2rem;
    margin: 0 10px;
    transition: all 0.3s ease;
  }

  .project-links a:hover {
    color: #61dafb;
    transform: scale(1.2);
  }

  button {
    background: #61dafb;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background: #4fa8d1;
    transform: translateY(-2px);
  }

  input, textarea {
    transition: all 0.3s ease;
  }

  input:focus, textarea:focus {
    transform: scale(1.02);
    box-shadow: 0 0 10px rgba(97, 218, 251, 0.2);
  }

  /* Typing Animation */
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  @keyframes blink {
    50% { border-color: transparent }
  }

  .typing-text {
    overflow: hidden;
    border-right: 2px solid var(--color-primary);
    white-space: nowrap;
    animation: 
      typing 1.5s steps(40, end),
      blink .75s step-end infinite;
  }

  .typing-text-delay {
    overflow: hidden;
    border-right: 2px solid var(--color-primary);
    white-space: nowrap;
    animation: 
      typing 1.5s steps(40, end) 1.5s,
      blink .75s step-end infinite;
    animation-fill-mode: both;
  }

  .fade-in-text {
    opacity: 0;
    animation: fadeIn 1s ease-in forwards 3s;
  }

  /* Floating Animation */
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }

  .floating {
    animation: float 6s ease-in-out infinite;
  }

  /* Enhanced Hover Effects */
  .project-card {
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .project-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, var(--color-primary), transparent);
    opacity: 0;
    transition: all 0.5s ease;
    z-index: 1;
  }

  .project-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }

  .project-card:hover::before {
    opacity: 0.1;
  }

  .project-card img {
    transition: all 0.5s ease;
  }

  .project-card:hover img {
    transform: scale(1.1);
  }

  /* Enhanced Button Animation */
  button {
    background: var(--color-primary);
    color: #fff;
    border: none;
    padding: 12px 24px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.1);
    transform: translateX(-100%);
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  button:hover {
    background: var(--color-primary);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }

  button:hover::before {
    transform: translateX(100%);
  }

  /* Enhanced Input Animation */
  input, textarea {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid transparent;
  }

  input:focus, textarea:focus {
    transform: scale(1.02);
    border-color: var(--color-primary);
    box-shadow: 0 0 15px rgba(97, 218, 251, 0.2);
  }

  /* Social Icons Animation */
  .social-icons a {
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .social-icons a::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--color-primary);
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: -1;
  }

  .social-icons a:hover {
    transform: translateY(-5px) scale(1.1);
    color: #fff;
  }

  .social-icons a:hover::before {
    transform: scale(1);
  }
`;

export default GlobalStyles; 