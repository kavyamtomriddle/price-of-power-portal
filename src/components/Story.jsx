import React from 'react';
import './Story.css';
import { Link } from 'react-router-dom';


const stories = [
  {
    image: '/images/woman.jpg',
    text: "“My husband died of cancer. They say it's not related to the mines, but the entire village has the same illness.”",
  },
  {
    image: '/images/water.jpg',
    text: "“We used to drink from the river. Now, we send our children far away for safe water.”",
  },
  {
    image: '/images/school.jpg',
    text: "“The road split the village in two. There was no public hearing.”",
  },
  {
    image: '/images/map.png',
    text: "Deforestation has increased by 300% in the last decade. But no one asked the villagers before cutting down their forests.",
  },
  {
    image: '/images/hope.jpg',
    text: "“We don't ask for much—just clean water, fair hearings, and a future for our children.”",
  },
];

function Story() {
  return (
    <div className="story-container">

      {/* Intro Section with inline background image */}
      <section
        className="intro"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('/images/jaduguda.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '100px 20px'
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>The Price of Power</h1>
        <p style={{ fontSize: '1.5rem', fontStyle: 'italic' }}>Voices from Jaduguda</p>
        <span className="scroll-down">▼ Scroll Down ▼</span>
      </section>

      {/* Story Blocks */}
      {stories.map((story, index) => (
        <section key={index} className="story-block">
          <img src={story.image} alt={`Story visual ${index + 1}`} />
          <p>{story.text}</p>
        </section>
      ))}

      {/* CTA Section */}
      <section className="cta">
        <h2>What Can Be Done?</h2>
        <p>
          Support local rights, ensure environmental transparency, and bring voices from the margins to the center of policy.
        </p>
        <Link to="/form" className="cta-button">Submit a Grievance</Link>
       </section>
    </div>
  );
}

export default Story;
