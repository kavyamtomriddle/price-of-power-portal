import React, { useState } from 'react';

const Impact = () => {
  const [lang, setLang] = useState('en');

  const content = {
    en: {
      title: 'Environmental Impact',
      description: `UCIL operations have been linked to radiation exposure, contaminated water sources, and displacement of tribal communities.`,
    },
    hi: {
      title: 'पर्यावरणीय प्रभाव',
      description: `यूसीआईएल की गतिविधियों को विकिरण जोखिम, प्रदूषित जल स्रोतों और आदिवासी समुदायों के विस्थापन से जोड़ा गया है।`,
    },
  };

  const containerStyle = {
    padding: '2rem',
    minHeight: '100vh',
    background: 'linear-gradient(to right, #4b6cb7, #182848)',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Segoe UI, sans-serif',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    textShadow: '1px 1px 3px #000',
  };

  const paraStyle = {
    fontSize: '1.2rem',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
  };

  const langButtonStyle = {
    margin: '0.5rem',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    backgroundColor: '#f0f0f0',
    color: '#222',
  };

  return (
    <div style={containerStyle}>
      <div>
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
      <p style={paraStyle}>{content[lang].description}</p>
    </div>
  );
};

export default Impact;
