import React from 'react';
import ParallaxEffect from './ParallaxEffect';

const Layout = ({ children }) => {
  return (
    <>
      <ParallaxEffect />
      <div className="layout">
        {children}
      </div>
    </>
  );
};

export default Layout; 