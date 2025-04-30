import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHeart, FaBriefcase, FaGem, FaCode, FaMobileAlt } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #6a82fb 0%, #fc5c7d 100%);
  padding: 3rem 1rem 2rem 1rem;
  position: relative;
  overflow: hidden;
  text-align: center;
`;

const ParallaxBg = styled(motion.div)`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: url('/assets/hero-pattern.svg') repeat;
  opacity: 0.08;
  z-index: 0;
`;

const HeroTitle = styled.h1`
  font-size: 2.7rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: #fff;
  opacity: 0.95;
  margin-bottom: 2rem;
`;

const HeroButton = styled(motion.a)`
  display: inline-block;
  margin-top: 1.2rem;
  padding: 1.1rem 2.5rem;
  background: #fff;
  color: #6a82fb;
  border-radius: 40px;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 8px 32px rgba(106,130,251,0.13);
  transition: background 0.3s, color 0.3s, transform 0.2s;
  &:hover {
    background: #fc5c7d;
    color: #fff;
    transform: scale(1.05);
  }
`;

const VideoWrapper = styled(motion.div)`
  margin: 2.5rem auto 0 auto;
  max-width: 420px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
`;

const Section = styled.section`
  padding: 4rem 1rem 2rem 1rem;
  background: #f7f7f7;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #6a82fb;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 2rem;
  justify-content: center;
`;

const Card = styled(motion.div)`
  background: rgba(255,255,255,0.92);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.13);
  padding: 2.2rem 1.7rem;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  backdrop-filter: blur(8px);
  border: 1.5px solid #e0e0e0;
  &:hover {
    transform: translateY(-10px) scale(1.08) rotate(-1deg);
    box-shadow: 0 16px 40px rgba(0,0,0,0.18);
    background: rgba(255,255,255,1);
  }
`;

const CardIcon = styled(motion.div)`
  font-size: 2.7rem;
  margin-bottom: 1rem;
  color: #fc5c7d;
  display: flex;
  align-items: center;
  justify-content: center;
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  justify-content: center;
`;

const Feature = styled(motion.div)`
  background: #f7f7f7;
  border-radius: 18px;
  box-shadow: 0 4px 16px rgba(106,130,251,0.08);
  padding: 1.5rem 1.2rem;
  text-align: center;
`;

export default function Bisnis() {
  return (
    <>
      <HeroSection>
        <ParallaxBg
          initial={{ backgroundPositionY: 0 }}
          animate={{ backgroundPositionY: 100 }}
          transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        />
        <HeroTitle as={motion.h1} initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
          Layanan Bisnis Digital
        </HeroTitle>
        <HeroSubtitle as={motion.p} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
          Solusi digital modern untuk kebutuhan bisnis dan personal Anda. Website undangan pernikahan, web full stack, dan layanan custom lainnya dengan desain premium dan animasi interaktif.
        </HeroSubtitle>
        <HeroButton href="#layanan" whileHover={{ scale: 1.1 }}>
          Lihat Layanan
        </HeroButton>
        <VideoWrapper
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.3 }}
        >
          <video src="/assets/coding-demo.mp4" autoPlay loop muted playsInline style={{ width: '100%', display: 'block' }} />
        </VideoWrapper>
      </HeroSection>
      <Section id="layanan">
        <Title>Pilihan Layanan</Title>
        <CardGrid>
          <Card initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <CardIcon
              initial={{ scale: 0.7, rotate: -20, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaHeart />
            </CardIcon>
            <h3>Web Undangan Pernikahan</h3>
            <p style={{ margin: '1rem 0' }}>
              Jasa pembuatan website undangan pernikahan digital, desain elegan, responsif, dan mudah dibagikan ke tamu undangan.
            </p>
            <Button href="https://wa.me/6281234567890" target="_blank" whileHover={{ scale: 1.1 }}>
              Order Sekarang
            </Button>
          </Card>
          <Card initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }}>
            <CardIcon
              initial={{ scale: 0.7, rotate: 20, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <FaBriefcase />
            </CardIcon>
            <h3>Web Full Stack</h3>
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
            <FaGem style={{ fontSize: '2rem', color: '#fc5c7d', marginBottom: 8 }} />
            <b>Desain Premium</b>
            <p>UI/UX modern, elegan, dan responsif di semua perangkat.</p>
          </Feature>
          <Feature initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }}>
            <FaCode style={{ fontSize: '2rem', color: '#6a82fb', marginBottom: 8 }} />
            <b>Animasi Interaktif</b>
            <p>Animasi smooth, parallax, dan efek hover di setiap elemen penting.</p>
          </Feature>
          <Feature initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} viewport={{ once: true }}>
            <FaMobileAlt style={{ fontSize: '2rem', color: '#fc5c7d', marginBottom: 8 }} />
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