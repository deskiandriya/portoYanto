import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #181c2a;
  color: white;
  padding: 20px 0;
  text-align: center;
  width: 100%;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>© 2024 Deski Andriyanto. All rights reserved.</p>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
