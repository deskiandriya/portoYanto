import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Bisnis from './pages/Bisnis';

const ParallaxSection = styled.section`
  background: linear-gradient(135deg, #6a82fb 0%, #fc5c7d 100%);
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const Card = styled(motion.div)`
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.15);
  padding: 2rem;
  max-width: 400px;
  margin: 2rem auto;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 16px 40px rgba(0,0,0,0.18);
  }
`;

const ZoomImage = styled(motion.img)`
  width: 100%;
  max-width: 320px;
  border-radius: 16px;
  margin: 1rem auto;
  display: block;
`;

const Section = styled.section`
  padding: 4rem 1rem;
  background: #f7f7f7;
`;

const Button = styled(motion.a)`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 2rem;
  background: #6a82fb;
  color: white;
  border-radius: 30px;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(106,130,251,0.15);
  transition: background 0.3s;
  &:hover {
    background: #fc5c7d;
  }
`;

const scrollToSection = ref => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function HyroFinance() {
  const detailRef = useRef(null);
  return (
    <>
      <ParallaxSection as={motion.section} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}>
          <h1 style={{ color: 'white', fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
            <motion.span initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 0.7 }}>
              HyroFinance
            </motion.span>
          </h1>
          <motion.p initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1, duration: 0.7 }} style={{ color: 'white', fontSize: '1.2rem' }}>
            Project keuangan digital dengan fitur modern dan UI interaktif.
          </motion.p>
          <Button whileHover={{ scale: 1.1 }} onClick={() => scrollToSection(detailRef)}>
            Lihat Detail
          </Button>
        </motion.div>
      </ParallaxSection>
      <Section ref={detailRef}>
        <Card initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <ZoomImage
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="HyroFinance Screenshot"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          />
          <h2 style={{ margin: '1rem 0 0.5rem 0' }}>Fitur Utama</h2>
          <ul style={{ textAlign: 'left', margin: '0 auto 1rem auto', maxWidth: 300 }}>
            <li><b>Fade-in & Fade-up:</b> Animasi smooth saat konten muncul</li>
            <li><b>Slide-in:</b> Teks dan ikon masuk dari samping</li>
            <li><b>Parallax:</b> Efek latar belakang dinamis</li>
            <li><b>Zoom-in:</b> Gambar project membesar saat muncul</li>
            <li><b>Hover effect:</b> Kartu interaktif saat mouse hover</li>
            <li><b>Smooth scroll:</b> Navigasi antar bagian halaman mulus</li>
          </ul>
          <Button href="/" whileHover={{ scale: 1.1 }}>
            Kembali ke Beranda
          </Button>
        </Card>
      </Section>
    </>
  );
} 