import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import emailjs from '@emailjs/browser';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ContactSection = styled.section`
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 0;
  }
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, var(--color-primary) 0%, transparent 70%);
    opacity: 0.1;
    transform: rotate(-45deg);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.text};
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60%;
      height: 4px;
      background: var(--color-primary);
      border-radius: 2px;
    }

    @media (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.secondary};
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.6;
    }
  }
`;

const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: ${({ theme }) => `rgba(${theme.mode === 'dark' ? '255,255,255,0.05' : '0,0,0,0.02'})`};
  border-radius: 15px;
  transition: transform 0.3s ease;
  border: 1px solid ${({ theme }) => `rgba(${theme.mode === 'dark' ? '255,255,255,0.1' : '0,0,0,0.1'})`};

  &:hover {
    transform: translateY(-5px);
  }

  i {
    font-size: 1.5rem;
    color: var(--color-primary);
  }

  div {
    h3 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      color: ${({ theme }) => theme.text};
    }

    p {
      font-size: 1rem;
      color: ${({ theme }) => theme.secondary};
      margin: 0;
    }
  }
`;

const ContactForm = styled.form`
  background: ${({ theme }) => `rgba(${theme.mode === 'dark' ? '255,255,255,0.05' : '0,0,0,0.02'})`};
  padding: 2rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => `rgba(${theme.mode === 'dark' ? '255,255,255,0.1' : '0,0,0,0.1'})`};
  animation: ${fadeIn} 0.6s ease forwards;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 1rem;
    background: ${({ theme }) => `rgba(${theme.mode === 'dark' ? '255,255,255,0.05' : '0,0,0,0.02'})`};
    border: 1px solid ${({ theme }) => `rgba(${theme.mode === 'dark' ? '255,255,255,0.1' : '0,0,0,0.1'})`};
    border-radius: 10px;
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 2px ${({ theme }) => `rgba(${theme.mode === 'dark' ? '255,255,255,0.1' : '0,0,0,0.1'})`};
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px ${({ theme }) => `rgba(${theme.mode === 'dark' ? '0,0,0,0.3' : '0,0,0,0.1'})`};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled.div`
  background: ${({ theme }) => `rgba(${theme.mode === 'dark' ? '255,255,255,0.05' : '0,0,0,0.02'})`};
  padding: 1rem;
  border-radius: 10px;
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-top: 1rem;
  animation: ${fadeIn} 0.3s ease forwards;
`;

const ErrorMessage = styled(SuccessMessage)`
  color: #ff4444;
  background: ${({ theme }) => `rgba(255,68,68,${theme.mode === 'dark' ? '0.1' : '0.05'})`};
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Ganti dengan Service ID dari EmailJS
        'YOUR_TEMPLATE_ID', // Ganti dengan Template ID dari EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Deski Andriyanto',
          to_email: 'deskiandriyanto123@gmail.com'
        },
        'YOUR_PUBLIC_KEY' // Ganti dengan Public Key dari EmailJS
      );

      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => {
      setShowSuccess(false);
      setError('');
    }, 3000);
  };

  return (
    <ContactSection id="contact">
      <Container>
        <ContactInfo>
          <h2>Get in Touch</h2>
          <p>
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            Feel free to reach out to me through any of the following methods.
          </p>
          <ContactMethods>
            <ContactMethod>
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>deskiandriyanto123@gmail.com</p>
              </div>
            </ContactMethod>
            <ContactMethod>
              <i className="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>+62 8953-7728-6377</p>
              </div>
            </ContactMethod>
            <ContactMethod>
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Location</h3>
                <p>Tegal, Indonesia</p>
              </div>
            </ContactMethod>
          </ContactMethods>
        </ContactInfo>
        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
          {showSuccess && (
            <SuccessMessage>
              Thank you for your message! I'll get back to you soon.
            </SuccessMessage>
          )}
          {error && (
            <ErrorMessage>
              {error}
            </ErrorMessage>
          )}
        </ContactForm>
      </Container>
    </ContactSection>
  );
};

export default Contact; 
