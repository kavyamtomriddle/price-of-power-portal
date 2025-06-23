import React, { useState } from 'react';

const Rights = () => {
  const [lang, setLang] = useState('en');

  const content = {
    en: {
      title: 'Know Your Rights',
      rights: [
        'Right to clean air and water',
        'Right to information (RTI)',
        'Right to health and safety',
      ],
    },
    hi: {
      title: 'अपने अधिकार जानिए',
      rights: [
        'स्वच्छ हवा और पानी का अधिकार',
        'सूचना का अधिकार',
        'स्वास्थ्य और सुरक्षा का अधिकार',
      ],
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '2rem',
    borderRadius: '12px',
    maxWidth: '700px',
    textAlign: 'center',
  };

  const buttonStyle = {
    marginBottom: '1rem',
    padding: '0.5rem 1rem',
    background: '#ff8c00',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginRight: '0.5rem',
  };

  return (
    <div style={backgroundStyle}>
      <div style={cardStyle}>
        <div>
          <button onClick={() => setLang('en')} disabled={lang === 'en'} style={buttonStyle}>English</button>
          <button onClick={() => setLang('hi')} disabled={lang === 'hi'} style={buttonStyle}>हिंदी</button>
        </div>
        <h1>{content[lang].title}</h1>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {content[lang].rights.map((item, index) => (
            <li key={index} style={{ margin: '1rem 0', fontSize: '1.2rem' }}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rights;
