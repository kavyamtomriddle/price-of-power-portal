import React, { useState, useEffect } from 'react';
import About from './components/About';
import Rights from './components/Rights';
import Impact from './components/Impact';
import News from './components/News';
import GrievanceForm from './components/GrievanceForm';
import History from './components/History';
import Story from './components/Story';

import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';

// Smooth scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

function App() {
  const [grievances, setGrievances] = useState([]);

  const addGrievance = (grievance) => {
    setGrievances([grievance, ...grievances]);
  };

  return (
    <Router>
      <ScrollToTop />
      <nav style={{ padding: '1rem', background: '#222', color: '#fff' }}>
        <Link to="/" style={{ color: 'white', marginRight: '20px' }}>Our story</Link>
        <Link to="/form" style={{ color: 'white', marginRight: '20px' }}>Form</Link>
        <Link to="/history" style={{ color: 'white', marginRight: '20px' }}>History</Link>
        <Link to="/about" style={{ color: 'white', marginRight: '20px' }}>About UCIL</Link>
        <Link to="/impact" style={{ color: 'white', marginRight: '20px' }}>Impact</Link>
        <Link to="/rights" style={{ color: 'white', marginRight: '20px' }}>Rights</Link>
        <Link to="/news" style={{ color: 'white' }}>News</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Story />} />
        <Route path="/form" element={<GrievanceForm addGrievance={addGrievance} />} />
        <Route path="/history" element={<History grievances={grievances} />} />
        <Route path="/about" element={<About />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/rights" element={<Rights />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
