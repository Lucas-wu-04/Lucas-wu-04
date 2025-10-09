import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import About from './About';
import Photography from './Photography';
import Videography from './Videography';
import Drawing from './Drawing';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <NavLink to="/" end activeClassName="active">About</NavLink>
          <NavLink to="/photography" activeClassName="active">Photography</NavLink>
          <NavLink to="/videography" activeClassName="active">Videography</NavLink>
          <NavLink to="/drawing" activeClassName="active">Drawing</NavLink>
        </div>
        <NavLink to="/contact" activeClassName="active" style={{ marginLeft: 'auto', padding: '0.5rem 1.2rem', borderRadius: '20px', background: '#fff', color: '#000', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>Contact</NavLink>
      </nav>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/videography" element={<Videography />} />
          <Route path="/drawing" element={<Drawing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
