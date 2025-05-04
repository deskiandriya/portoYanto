import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.2rem 2rem;
  transition: all 0.3s ease;
  background: ${({ $scrolled }) =>
    $scrolled ? 'rgba(10, 10, 10, 0.92)' : 'rgba(10, 10, 10, 0.7)'};
  backdrop-filter: blur(16px);
  box-shadow: 0 2px 24px rgba(0,0,0,0.08);
`;

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 2rem;
  font-weight: 900;
  color: #fff;
  text-decoration: none;
  letter-spacing: -1px;
  background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.2rem;
  align-items: center;
  @media (max-width: 900px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #bdbdbd;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.2rem 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    color: #fff;
    background: rgba(106,130,251,0.08);
  }
`;

const HireButton = styled(motion.a)`
  padding: 0.8rem 1.7rem;
  background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
  color: #fff;
  border-radius: 30px;
  font-weight: 700;
  text-decoration: none;
  font-size: 1.1rem;
  margin-left: 1.5rem;
  box-shadow: 0 4px 15px rgba(106, 130, 251, 0.13);
  transition: all 0.3s ease;
  border: none;
  outline: none;
  display: inline-block;
  &:hover {
    background: linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%);
    transform: translateY(-2px) scale(1.04);
    box-shadow: 0 8px 25px rgba(106, 130, 251, 0.18);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.7rem;
  cursor: pointer;
  padding: 0.5rem;
  @media (max-width: 900px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: rgba(10, 10, 10, 0.98);
  backdrop-filter: blur(16px);
  padding: 2rem;
  z-index: 1001;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  // Smooth scroll handler
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Nav $scrolled={scrolled}>
        <NavContainer>
          <Logo href="#home" onClick={e => handleNavClick(e, 'home')}>Deski</Logo>
          <NavLinks>
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                onClick={e => handleNavClick(e, link.href.replace('#', ''))}
              >
                {link.label}
              </NavLink>
            ))}
            <HireButton
              href="mailto:deskiandriyanto123@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </HireButton>
          </NavLinks>
          <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? '✕' : '☰'}
          </MobileMenuButton>
        </NavContainer>
      </Nav>
      <MobileMenu
        initial={{ x: '100%' }}
        animate={{ x: mobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.href}
            href={link.href}
            onClick={e => handleNavClick(e, link.href.replace('#', ''))}
          >
            {link.label}
          </NavLink>
        ))}
        <HireButton
          href="mailto:deskiandriyanto123@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hire Me
        </HireButton>
      </MobileMenu>
    </>
  );
};

export default Navbar; 