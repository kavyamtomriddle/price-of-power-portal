import React, { useState, useEffect } from 'react';

const Rights = () => {
  const [lang, setLang] = useState('en');
  const [index, setIndex] = useState(0);
  const isMobile = window.innerWidth <= 768;

  const content = {
    en: {
      title: 'Know Your Rights',
      rights: [
        {
          text: 'Right to clean air and water — because survival is a right, not a privilege.',
          image: '/images/rights/right1.jpg',
          link: 'https://jaljeevanmission.gov.in/',
        },
        {
          text: 'Right to information — so you are never left in the dark.',
          image: '/images/rights/right2.jpg',
          link: 'https://rti.gov.in/',
        },
        {
          text: 'Right to health and safety — because every life deserves protection.',
          image: '/images/rights/right3.jpg',
          link: 'https://nhm.gov.in/',
        },
      ],
    },
    hi: {
      title: 'अपने अधिकार जानिए',
      rights: [
        {
          text: 'स्वच्छ हवा और पानी का अधिकार — क्योंकि जीना विशेषाधिकार नहीं, अधिकार है।',
          image: '/images/rights/right1.jpg',
          link: 'https://jaljeevanmission.gov.in/',
        },
        {
          text: 'सूचना का अधिकार — ताकि आप अंधेरे में न रहें।',
          image: '/images/rights/right2.jpg',
          link: 'https://rti.gov.in/',
        },
        {
          text: 'स्वास्थ्य और सुरक्षा का अधिकार — क्योंकि हर जीवन सुरक्षा के योग्य है।',
          image: '/images/rights/right3.jpg',
          link: 'https://nhm.gov.in/',
        },
      ],
    },
  };

  useEffect(() => {
    if (isMobile) {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % content[lang].rights.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [lang]);

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
    maxWidth: '800px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
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

  const rightCard = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem',
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: '10px',
    padding: '1rem',
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
    transition: 'transform 0.3s',
    textAlign: 'left',
  };

  const imageStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginRight: '1rem',
    objectFit: 'cover',
    border: '2px solid #ff8c00',
  };

  const textStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.4',
  };

  const rightsToRender = isMobile ? [content[lang].rights[index]] : content[lang].rights;

  return (
    <div style={backgroundStyle}>
      <div style={cardStyle}>
        <div>
          <button onClick={() => setLang('en')} disabled={lang === 'en'} style={buttonStyle}>English</button>
          <button onClick={() => setLang('hi')} disabled={lang === 'hi'} style={buttonStyle}>हिंदी</button>
        </div>
        <h1>{content[lang].title}</h1>

        {rightsToRender.map((right, i) => (
          <a
            key={i}
            href={right.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={rightCard}>
              <img src={right.image} alt="Right visual" style={imageStyle} />
              <div style={textStyle}>{right.text}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Rights;
