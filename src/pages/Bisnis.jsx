import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #6a82fb 0%, #fc5c7d 100%);
  padding: 3rem 1rem 2rem 1rem;
  position: relative;
  overflow: hidden;
  flex-wrap: wrap;
`;

const HeroContent = styled(motion.div)`
  flex: 1 1 350px;
  color: white;
  z-index: 2;
  max-width: 500px;
`;

const HeroImage = styled(motion.div)`
  flex: 1 1 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  min-width: 300px;
`;

const VideoFrame = styled(motion.iframe)`
  width: 350px;
  height: 200px;
  border-radius: 20px;
  border: none;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  background: #222;
  @media (max-width: 600px) {
    width: 100%;
    height: 180px;
  }
`;

const Section = styled.section`
  padding: 4rem 1rem 2rem 1rem;
  background: #f7f7f7;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #6a82fb;
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const Card = styled(motion.div)`
  background: rgba(255,255,255,0.85);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.13);
  padding: 2.2rem 1.7rem;
  max-width: 350px;
  min-width: 260px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  backdrop-filter: blur(8px);
  border: 1.5px solid #e0e0e0;
  &:hover {
    transform: translateY(-10px) scale(1.06);
    box-shadow: 0 16px 40px rgba(0,0,0,0.18);
    background: rgba(255,255,255,0.97);
  }
`;

const Button = styled(motion.a)`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.9rem 2.2rem;
  background: #6a82fb;
  color: white;
  border-radius: 30px;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.1rem;
  box-shadow: 0 4px 16px rgba(106,130,251,0.13);
  transition: background 0.3s;
  &:hover {
    background: #fc5c7d;
  }
`;

const FeaturesSection = styled.section`
  background: #fff;
  padding: 3rem 1rem 2rem 1rem;
`;

const FeaturesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const Feature = styled(motion.div)`
  background: #f7f7f7;
  border-radius: 18px;
  box-shadow: 0 4px 16px rgba(106,130,251,0.08);
  padding: 1.5rem 1.2rem;
  max-width: 300px;
  min-width: 200px;
  text-align: center;
`;

export default function Bisnis() {
  return (
    <>
      <HeroSection>
        <HeroContent
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 style={{ fontSize: '2.7rem', fontWeight: 800, marginBottom: '1rem' }}>Layanan Bisnis Digital</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'white', opacity: 0.95 }}>
            Solusi digital modern untuk kebutuhan bisnis dan personal Anda. Website undangan pernikahan, web full stack, dan layanan custom lainnya dengan desain premium dan animasi interaktif.
          </p>
          <Button href="#layanan" whileHover={{ scale: 1.1 }}>
            Lihat Layanan
          </Button>
        </HeroContent>
        <HeroImage
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.3 }}
        >
          <VideoFrame
            as={motion.iframe}
            src="https://www.youtube.com/embed/pB0WvcxTbCA?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0"
            title="Demo Coding"
            allow="autoplay; encrypted-media"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
          />
        </HeroImage>
      </HeroSection>
      <Section id="layanan">
        <Title>Pilihan Layanan</Title>
        <CardGrid>
          <Card initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <h2>Web Undangan Pernikahan</h2>
            <p style={{ margin: '1rem 0' }}>
              Jasa pembuatan website undangan pernikahan digital, desain elegan, responsif, dan mudah dibagikan ke tamu undangan.
            </p>
            <Button href="https://wa.me/6281234567890" target="_blank" whileHover={{ scale: 1.1 }}>
              Order Sekarang
            </Button>
          </Card>
          <Card initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }}>
            <h2>Web Full Stack</h2>
            <p style={{ margin: '1rem 0' }}>
              Pembuatan website custom (frontend & backend) untuk bisnis, portofolio, toko online, company profile, dan lainnya.
            </p>
            <Button href="https://wa.me/6281234567890" target="_blank" whileHover={{ scale: 1.1 }}>
              Konsultasi Gratis
            </Button>
          </Card>
        </CardGrid>
      </Section>
      <FeaturesSection>
        <Title>Keunggulan Layanan Kami</Title>
        <FeaturesGrid>
          <Feature initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <b>Desain Premium</b>
            <p>UI/UX modern, elegan, dan responsif di semua perangkat.</p>
          </Feature>
          <Feature initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }}>
            <b>Animasi Interaktif</b>
            <p>Animasi smooth, parallax, dan efek hover di setiap elemen penting.</p>
          </Feature>
          <Feature initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} viewport={{ once: true }}>
            <b>Support & Konsultasi</b>
            <p>Gratis konsultasi kebutuhan, support after sales, dan revisi minor.</p>
          </Feature>
        </FeaturesGrid>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/" style={{ color: '#6a82fb', fontWeight: 'bold', textDecoration: 'underline', fontSize: '1.1rem' }}>
            Kembali ke Beranda
          </Link>
        </div>
      </FeaturesSection>
    </>
  );
} 