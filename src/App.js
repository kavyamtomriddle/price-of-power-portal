import React, { useState } from 'react';
import About from './components/About';
import Rights from './components/Rights';
import Impact from './components/Impact';
import News from './components/News';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GrievanceForm from './components/GrievanceForm.jsx';
import History from './components/History.jsx';

import Story from './components/Story';


function App() {
  const [grievances, setGrievances] = useState([]);

  const addGrievance = (grievance) => {
    setGrievances([grievance, ...grievances]);
  };

  return (
    <Router>
      <nav style={{ padding: '1rem', background: '#222', color: '#fff' }}>
  <Link to="/story" style={{ color: 'white', marginRight: '20px' }}>Story</Link>
  <Link to="/" style={{ color: 'white', marginRight: '20px' }}>Form</Link>
  <Link to="/history" style={{ color: 'white', marginRight: '20px' }}>History</Link>
  <Link to="/about" style={{ color: 'white', marginRight: '20px' }}>About UCIL</Link>
  <Link to="/impact" style={{ color: 'white', marginRight: '20px' }}>Impact</Link>
  <Link to="/rights" style={{ color: 'white', marginRight: '20px' }}>Right</Link>

  <Link to="/news" style={{ color: 'white', marginRight: '20px' }}>News</Link>

  

</nav>

      <Routes>
   <Route path="/story" element={<Story />} />
  <Route path="/" element={<GrievanceForm addGrievance={addGrievance} />} />
  <Route path="/history" element={<History grievances={grievances} />} />
  <Route path="/about" element={<About />} />
  <Route path="/rights" element={<Rights />} />
  <Route path="/impact" element={<Impact />} />
  <Route path="/news" element={<News />} />
 
    </Routes>
    </Router>
  );
}

export default App;
