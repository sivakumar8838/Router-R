import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Alllist from './siva/Alllist';
import Fsd from './siva/Fsd'
import Datascience from './siva/Datascience';
import Cyber from './siva/Cyber';
import Career from './siva/Career';
import Card1 from './siva/Card1';
import Card2 from './siva/Card2';
import Card3 from './siva/Card3';
import Card1Ds from './siva/Card1Ds';
import Card2Ds from './siva/Card2Ds';
import Card1Cy from './siva/Card1Cy';
import Card2cy from './siva/Card2cy';
import CardCar from './siva/CardCar';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <h1 className='text-center'>courses</h1>
      <Router>
        <div className='hello'>
          <div className="d-md-none">
            <button onClick={toggleMenu} className="menu-button">
              Menu
            </button>
            {menuOpen && (
              <div className="mobile-menu d-inline-block" >
                <Link to='/' style={{ padding: 10 }} onClick={toggleMenu}>
                  ALL
                </Link>
                <Link to='/fsd'className='d-inline-block' style={{ padding: 10 }} onClick={toggleMenu}>
                  FULL STACK DEVELOPMENT
                </Link>
                <Link to='/datascience'className='d-inline-block' style={{ padding: 10 }} onClick={toggleMenu}>
                  DATA SCIENCE
                </Link>
                <Link to='/cyber'className='d-inline-block' style={{ padding: 10 }} onClick={toggleMenu}>
                  CYBER SECURITY
                </Link>
                <Link to='/career'className='d-inline-block' style={{ padding: 10 }} onClick={toggleMenu}>
                  CAREER
                </Link>
              </div>
            )}
          </div>
          <div className="d-none d-md-block">
            <Link to='/' style={{ padding: 10 }}>ALL</Link>
            <Link to='/fsd' style={{ padding: 10 }}>FULL STACK DEVELOPMENT</Link>
            <Link to='/datascience' style={{ padding: 10 }}>DATA SCIENCE</Link>
            <Link to='/cyber' style={{ padding: 10 }}>CYBER SECURITY</Link>
            <Link to='/career' style={{ padding: 10 }}>CAREER</Link>
            <hr />
          </div>
        </div>
        <Routes>
          <Route path='/' element={<Alllist />} />
          <Route path='/fsd' element={<Fsd />} />
          <Route path='/datascience' element={<Datascience />} />
          <Route path='/cyber' element={<Cyber />} />
          <Route path='/career' element={<Career />} />
          <Route path='/fsd/card1' element={<Card1 />} />
          <Route path='/fsd/card2' element={<Card2 />} />
          <Route path='/fsd/card3' element={<Card3 />} />
          <Route path='/ds/card1Ds' element={<Card1Ds />} />
          <Route path='/ds/card2Ds' element={<Card2Ds />} />
          <Route path='/cyber/card1Cy' element={<Card1Cy />} />
          <Route path='/cyber/card2cy' element={<Card2cy />} />
          <Route path='/career/CardCar' element={<CardCar />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;