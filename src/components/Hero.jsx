import React, { useEffect, useRef, useState } from 'react';
import { FadeIn, FadeUp, SlideIn, ZoomIn, HoverScale } from './animations';
import '../styles/animations.css';

const Hero = () => {
  const buttonRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState([]);

  const createParticle = (e) => {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.width = Math.random() * 10 + 5 + 'px';
    particle.style.height = particle.style.width;
    particle.style.left = e.clientX + 'px';
    particle.style.top = e.clientY + 'px';
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
  };

  const createSparkle = (e) => {
    const sparkle = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };
    setSparkles(prev => [...prev, sparkle]);
    setTimeout(() => {
      setSparkles(prev => prev.filter(s => s.id !== sparkle.id));
    }, 1000);
  };

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;
      
      buttonRef.current.style.transform = `perspective(1000px) rotateX(${deltaY * -10}deg) rotateY(${deltaX * 10}deg) scale3d(1.05, 1.05, 1.05)`;
    }
  };

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden animate-gradient"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animate-morph" style={{ top: '-10%', left: '-10%' }}></div>
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 animate-morph" style={{ top: '-5%', right: '-5%' }}></div>
        <div className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 animate-morph" style={{ bottom: '-10%', left: '50%' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-text-gradient animate-neon hover:animate-glitch">
              Welcome to My Portfolio
            </h1>
          </FadeIn>
          
          <FadeUp delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-float hover-lift">
              I'm a passionate developer crafting innovative digital experiences that make a difference
            </p>
          </FadeUp>
          
          <SlideIn direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <HoverScale>
                <button 
                  ref={buttonRef}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:shadow-lg animate-glow tilt-effect magnetic-button"
                  onClick={(e) => {
                    createParticle(e);
                    createSparkle(e);
                  }}
                >
                  View Projects
                </button>
              </HoverScale>
              <HoverScale>
                <button 
                  className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:shadow-lg relative overflow-hidden animate-wave hover-lift"
                  onClick={(e) => {
                    createParticle(e);
                    createSparkle(e);
                  }}
                >
                  <span className="relative z-10">Contact Me</span>
                  <div className="absolute inset-0 animate-shimmer"></div>
                </button>
              </HoverScale>
            </div>
          </SlideIn>

          <ZoomIn delay={0.6}>
            <div className="flex justify-center items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">Available for work</span>
              </div>
              <div className="h-4 w-px bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Based in Indonesia</span>
              </div>
            </div>
          </ZoomIn>
        </div>
      </div>

      {/* Sparkles */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: Math.random() * 10 + 5 + 'px',
            height: Math.random() * 10 + 5 + 'px',
          }}
        />
      ))}

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <FadeIn delay={1}>
          <div className="flex flex-col items-center animate-float hover-lift">
            <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero; 