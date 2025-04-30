import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHeart, FaBriefcase, FaGem, FaCode, FaMobileAlt } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
  gap: 4rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    padding: 4rem 1rem;
    gap: 2rem;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-right: 2rem;

  @media (max-width: 1024px) {
    align-items: center;
    padding-right: 0;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 1.5rem;
  letter-spacing: -2px;
  line-height: 1.1;
  background: linear-gradient(90deg, #fff 0%, #a0a0a0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #a0a0a0;
  opacity: 0.9;
  margin-bottom: 3rem;
  max-width: 800px;
  line-height: 1.6;
`;

const HeroButton = styled(motion.a)`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 1.2rem 3rem;
  background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
  color: #fff;
  border-radius: 50px;
  font-size: 1.3rem;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 8px 32px rgba(106,130,251,0.2);
  transition: all 0.3s ease;
  &:hover {
    background: linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%);
    transform: scale(1.05);
    box-shadow: 0 16px 40px rgba(252,92,125,0.25);
  }
`;

const VideoWrapper = styled(motion.div)`
  flex: 1;
  max-width: 600px;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  aspect-ratio: 16/9;

  @media (max-width: 1024px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

const Section = styled.section`
  padding: 6rem 1rem 4rem 1rem;
  background: #0a0a0a;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 3rem;
  color: #fff;
  background: linear-gradient(90deg, #fff 0%, #a0a0a0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled(motion.div)`
  background: #1a1a1a;
  border-radius: 30px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid #2a2a2a;
  color: #fff;
  &:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: 0 20px 40px rgba(252,92,125,0.2);
    background: #0a0a0a;
  }
`;

const CardIcon = styled(motion.div)`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #fc5c7d;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled(motion.a)`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 1rem 2.5rem;
  background: linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%);
  color: white;
  border-radius: 50px;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.1rem;
  box-shadow: 0 8px 32px rgba(106,130,251,0.2);
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 16px 40px rgba(252,92,125,0.25);
  }
`;

const PortfolioSection = styled.section`
  background: #1a1a1a;
  padding: 6rem 1rem 4rem 1rem;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const PortfolioCard = styled(motion.div)`
  background: #0a0a0a;
  border-radius: 30px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  padding: 2rem;
  color: #fff;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid #2a2a2a;
  &:hover {
    transform: scale(1.03) translateY(-10px);
    box-shadow: 0 20px 40px rgba(252,92,125,0.2);
  }
`;

const PortfolioImg = styled(motion.img)`
  width: 100%;
  border-radius: 20px;
  margin-bottom: 1.5rem;
  box-shadow: 0 8px 32px rgba(106,130,251,0.15);
`;

const FeaturesSection = styled.section`
  background: #0a0a0a;
  padding: 6rem 1rem 4rem 1rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Feature = styled(motion.div)`
  background: #1a1a1a;
  border-radius: 25px;
  box-shadow: 0 8px 32px rgba(106,130,251,0.1);
  padding: 2rem 1.5rem;
  text-align: center;
  color: #fff;
  border: 1px solid #2a2a2a;
`;

export default function Bisnis() {
  return (
    <>
      <HeroSection>
        <VideoWrapper
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.3 }}
        >
          <video src="/src/assets/images/videobg.mp4" autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </VideoWrapper>
        <HeroContent>
          <HeroTitle initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
            Layanan Bisnis Digital
          </HeroTitle>
          <HeroSubtitle initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
            Solusi digital modern untuk kebutuhan bisnis dan personal Anda. Website undangan pernikahan, web full stack, dan layanan custom lainnya dengan desain premium dan animasi interaktif.
          </HeroSubtitle>
          <HeroButton href="#layanan" whileHover={{ scale: 1.1 }}>
            Lihat Layanan
          </HeroButton>
        </HeroContent>
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
            <p style={{ margin: '1.5rem 0', color: '#a0a0a0', lineHeight: '1.6' }}>
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
            <p style={{ margin: '1.5rem 0', color: '#a0a0a0', lineHeight: '1.6' }}>
              Pembuatan website custom (frontend & backend) untuk bisnis, portofolio, toko online, company profile, dan lainnya.
            </p>
            <Button href="https://wa.me/6281234567890" target="_blank" whileHover={{ scale: 1.1 }}>
              Konsultasi Gratis
            </Button>
          </Card>
        </CardGrid>
      </Section>
      <PortfolioSection>
        <Title>Portofolio Project</Title>
        <PortfolioGrid>
          <PortfolioCard initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <PortfolioImg src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" alt="Project 1" initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }} viewport={{ once: true }} />
            <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>HyroFinance</h4>
            <p style={{ color: '#a0a0a0', lineHeight: '1.6' }}>Platform keuangan digital dengan fitur modern dan UI interaktif.</p>
          </PortfolioCard>
          <PortfolioCard initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }}>
            <PortfolioImg src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="Project 2" initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }} viewport={{ once: true }} />
            <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Wedding Invitation</h4>
            <p style={{ color: '#a0a0a0', lineHeight: '1.6' }}>Website undangan pernikahan digital, elegan, dan mudah dibagikan.</p>
          </PortfolioCard>
        </PortfolioGrid>
      </PortfolioSection>
      <FeaturesSection>
        <Title>Keunggulan Layanan Kami</Title>
        <FeaturesGrid>
          <Feature initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <FaGem style={{ fontSize: '2.5rem', color: '#fc5c7d', marginBottom: '1rem' }} />
            <b style={{ fontSize: '1.3rem', display: 'block', marginBottom: '0.5rem' }}>Desain Premium</b>
            <p style={{ color: '#a0a0a0', lineHeight: '1.6' }}>UI/UX modern, elegan, dan responsif di semua perangkat.</p>
          </Feature>
          <Feature initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }}>
            <FaCode style={{ fontSize: '2.5rem', color: '#6a82fb', marginBottom: '1rem' }} />
            <b style={{ fontSize: '1.3rem', display: 'block', marginBottom: '0.5rem' }}>Animasi Interaktif</b>
            <p style={{ color: '#a0a0a0', lineHeight: '1.6' }}>Animasi smooth, parallax, dan efek hover di setiap elemen penting.</p>
          </Feature>
          <Feature initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} viewport={{ once: true }}>
            <FaMobileAlt style={{ fontSize: '2.5rem', color: '#fc5c7d', marginBottom: '1rem' }} />
            <b style={{ fontSize: '1.3rem', display: 'block', marginBottom: '0.5rem' }}>Support & Konsultasi</b>
            <p style={{ color: '#a0a0a0', lineHeight: '1.6' }}>Gratis konsultasi kebutuhan, support after sales, dan revisi minor.</p>
          </Feature>
        </FeaturesGrid>
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Link to="/" style={{ color: '#6a82fb', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.2rem', transition: 'color 0.3s ease', ':hover': { color: '#fc5c7d' } }}>
            Kembali ke Beranda
          </Link>
        </div>
      </FeaturesSection>
    </>
  );
} 