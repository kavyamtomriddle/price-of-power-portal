import React, { useState } from 'react';

const About = () => {
  const [lang, setLang] = useState('en');
  const content = {
    en: {
      title: 'About UCIL',
      description: `Uranium Corporation of India Limited (UCIL) is a government-owned corporation engaged in uranium mining and processing. It plays a critical role in India's nuclear power program.`,
    },
    hi: {
      title: 'यूसीआईएल के बारे में',
      description: `यूरैनीयम कॉर्पोरेशन ऑफ इंडिया लिमिटेड (यूसीआईएल) एक सरकारी कंपनी है जो यूरेनियम खनन और प्रसंस्करण में लगी हुई है। यह भारत के नाभिकीय ऊर्जा कार्यक्रम में महत्वपूर्ण भूमिका निभाती है।`,
    },
  };

  const backgroundStyle = {
    minHeight: '100vh',
    padding: '3rem',
    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url("/images/about-bg.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    fontFamily: 'Segoe UI, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(8px)',
    borderRadius: '12px',
    padding: '2rem',
    maxWidth: '700px',
    color: '#f2f2f2',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
  };

  const buttonStyle = (active) => ({
    margin: '0 8px',
    padding: '8px 16px',
    backgroundColor: active ? '#ff9933' : '#999',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: active ? 'default' : 'pointer',
    fontWeight: 'bold',
    opacity: active ? 1 : 0.6,
  });

  return (
    <div style={backgroundStyle}>
      <div style={{ marginBottom: '1rem' }}>
        <button style={buttonStyle(lang === 'en')} onClick={() => setLang('en')} disabled={lang === 'en'}>English</button>
        <button style={buttonStyle(lang === 'hi')} onClick={() => setLang('hi')} disabled={lang === 'hi'}>हिंदी</button>
      </div>
      <div style={cardStyle}>
        <h1>{content[lang].title}</h1>
        <p>{content[lang].description}</p>
      </div>
    </div>
  );
};

export default About;
