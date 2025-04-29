import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainContent = styled.main`
  min-height: calc(100vh - 120px); // Adjust based on your navbar and footer height
  padding-top: 80px; // Adjust based on your navbar height
`;

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <MainContent>
        {children}
      </MainContent>
      <Footer />
    </>
  );
};

export default MainLayout;
