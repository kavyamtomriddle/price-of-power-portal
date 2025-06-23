import React, { useState } from 'react';

const Impact = () => {
  const [lang, setLang] = useState('en');

  const content = {
    en: {
      title: 'Environmental Impact',
      description: `UCIL's operations have raised environmental concerns including radiation exposure, polluted water sources, and displacement of indigenous communities. The long-term ecological impact remains under scrutiny.`,
    },
    hi: {
      title: 'पर्यावरणीय प्रभाव',
      description: `यूसीआईएल की गतिविधियों ने विकिरण जोखिम, जल स्रोतों के प्रदूषण और आदिवासी समुदायों के विस्थापन जैसे पर्यावरणीय मुद्दों को जन्म दिया है। दीर्घकालिक पारिस्थितिक प्रभाव अभी भी जांच के अधीन हैं।`,
    },
  };

  const backgroundStyle = {
    minHeight: '100vh',
backgroundImage: 'url("/images/about-bg.jpg")',
backgroundSize: 'cover',
backgroundPosition: 'center',
backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    fontFamily: 'Segoe UI, sans-serif',
    color: '#fff',
  };

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    padding: '2rem',
    maxWidth: '800px',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  };

  const buttonContainer = {
    marginBottom: '1.5rem',
  };

  const langButtonStyle = {
    margin: '0.5rem',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    backgroundColor: '#fff',
    color: '#222',
  };

  const titleStyle = {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#ffeb3b',
    textShadow: '1px 1px 3px #000',
  };

  const descStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.6',
  };

  return (
    <div style={backgroundStyle}>
      <div style={cardStyle}>
        <div style={buttonContainer}>
          <button
            onClick={() => setLang('en')}
            disabled={lang === 'en'}
            style={langButtonStyle}
          >
            English
          </button>
          <button
            onClick={() => setLang('hi')}
            disabled={lang === 'hi'}
            style={langButtonStyle}
          >
            हिंदी
          </button>
        </div>
        <h1 style={titleStyle}>{content[lang].title}</h1>
        <p style={descStyle}>{content[lang].description}</p>
      </div>
    </div>
  );
};

export default Impact;
