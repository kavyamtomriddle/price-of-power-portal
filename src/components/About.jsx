import React, { useState } from 'react';

const About = () => {
  const [lang, setLang] = useState('en');

  const content = {
    en: {
      title: 'About UCIL',
      description: `Uranium Corporation of India Limited (UCIL) was incorporated on 4th October 1967. It is a Public Sector Enterprise under the Department of Atomic Energy with a special standing at the forefront of the Nuclear Power cycle. 

Fulfilling the uranium requirements for Pressurised Heavy Water Reactors, UCIL plays a pivotal role in India's nuclear power generation. The company is ISO 9001:2015, 14001:2015 & IS 18001:2007 certified and has adopted modern mining technologies.

UCIL operates 6 underground mines and 1 open-pit mine in Jharkhand, along with a mine and plant at Tummalapalle, Andhra Pradesh. It is also expanding to Karnataka, Telangana, and Meghalaya — aiming to empower India’s nuclear future while being rooted in responsibility.`,
    },
    hi: {
      title: 'यूसीआईएल के बारे में',
      description: `यूरेनियम कॉर्पोरेशन ऑफ इंडिया लिमिटेड (यूसीआईएल) की स्थापना 4 अक्टूबर 1967 को हुई थी। यह परमाणु ऊर्जा विभाग के अधीन एक सार्वजनिक क्षेत्र का उपक्रम है और भारत के नाभिकीय ऊर्जा चक्र के अग्रिम मोर्चे पर खड़ा है।

प्रेशराइज्ड हेवी वॉटर रिएक्टर्स के लिए यूरेनियम की आपूर्ति करके, यूसीआईएल भारत की नाभिकीय ऊर्जा उत्पादन में अहम भूमिका निभाता है। कंपनी ISO 9001:2015, 14001:2015 और IS 18001:2007 प्रमाणित है और आधुनिक खनन तकनीकों को अपनाती है।

यूसीआईएल झारखंड में 6 भूमिगत खदानें और 1 ओपन पिट खदान, तथा आंध्र प्रदेश के तुंमलापल्ली में एक खदान और संयंत्र चलाता है। यह कर्नाटक, तेलंगाना और मेघालय में भी विस्तार कर रहा है — एक जिम्मेदार भविष्य की दिशा में।`,
    },
  };

  const backgroundStyle = {
    minHeight: '100vh',
    padding: '3rem 1rem',
    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url("/images/about-bg.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    fontFamily: 'Segoe UI, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    padding: '2rem',
    maxWidth: '800px',
    color: '#f9f9f9',
    boxShadow: '0 12px 36px rgba(0, 0, 0, 0.6)',
    lineHeight: '1.8',
    textAlign: 'justify',
    whiteSpace: 'pre-line',
    marginTop: '1rem',
  };

  const buttonStyle = (active) => ({
    margin: '0 10px',
    padding: '10px 20px',
    backgroundColor: active ? '#ff9933' : '#777',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    cursor: active ? 'default' : 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    boxShadow: active ? '0 4px 12px rgba(255, 153, 51, 0.5)' : 'none',
  });

  return (
    <div style={backgroundStyle}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{content[lang].title}</h2>
      <div>
        <button style={buttonStyle(lang === 'en')} onClick={() => setLang('en')} disabled={lang === 'en'}>English</button>
        <button style={buttonStyle(lang === 'hi')} onClick={() => setLang('hi')} disabled={lang === 'hi'}>हिंदी</button>
      </div>
      <div style={cardStyle}>
        <p>{content[lang].description}</p>
      </div>
    </div>
  );
};

export default About;
