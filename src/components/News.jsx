import React, { useState } from 'react';

const News = () => {
  const [lang, setLang] = useState('en');

  const newsItems = {
    en: [
      { id: 1, title: 'UCIL Expands Safety Measures', date: '2025-05-01' },
      { id: 2, title: 'Community Meeting Scheduled', date: '2025-05-10' },
    ],
    hi: [
      { id: 1, title: 'यूसीआईएल सुरक्षा उपाय बढ़ाता है', date: '2025-05-01' },
      { id: 2, title: 'सामुदायिक बैठक निर्धारित', date: '2025-05-10' },
    ],
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
    overflow: 'hidden',
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

  const marqueeWrapper = {
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    marginTop: '1rem',
  };

  const marqueeText = {
    display: 'inline-block',
    animation: 'scroll 18s linear infinite',
    fontSize: '1.2rem',
  };

  const scrollKeyframes = `
    @keyframes scroll {
      0% { transform: translateX(100%); }
      100% { transform: translateX(-100%); }
    }
  `;

  const combinedNews = newsItems[lang]
    .map((item) => `${item.title} — ${item.date}`)
    .join('  ⚫  '); // separator dot

  return (
    <>
      {/* Inject scroll keyframes */}
      <style>{scrollKeyframes}</style>

      <div style={backgroundStyle}>
        <div style={cardStyle}>
          <div>
            <button onClick={() => setLang('en')} disabled={lang === 'en'} style={buttonStyle}>English</button>
            <button onClick={() => setLang('hi')} disabled={lang === 'hi'} style={buttonStyle}>हिंदी</button>
          </div>
          <h1>{lang === 'en' ? 'News Bulletin' : 'समाचार बुलेटिन'}</h1>

          <div style={marqueeWrapper}>
            <div style={marqueeText}>{combinedNews}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
