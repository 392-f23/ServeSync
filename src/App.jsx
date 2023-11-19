import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';
import Tab3 from './components/Tab3';

const App = () => {
  return (
      <Router>
          <NavBar />
          <div className='pt-28'>
          <Routes>
              <Route path="/" element={<Tab1 />} />
              <Route path="/tab2" element={<Tab2 />} />
              <Route path="/tab3" element={<Tab3 />} />
          </Routes>
          </div>
          
          
      </Router>
  );
}

export default App;
