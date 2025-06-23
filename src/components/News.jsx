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

  return (
    <div className="info-container">
      <LangToggle lang={lang} setLang={setLang} />
      <h1>{lang === 'en' ? 'News' : 'समाचार'}</h1>
      <ul>
        {newsItems[lang].map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong> — <em>{item.date}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

const LangToggle = ({ lang, setLang }) => (
  <div className="lang-toggle">
    <button onClick={() => setLang('en')} disabled={lang === 'en'}>English</button>
    <button onClick={() => setLang('hi')} disabled={lang === 'hi'}>हिंदी</button>
  </div>
);

export default News;
