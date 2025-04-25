import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SepetProvider } from './SepetContext';

import Header from './Header';
import Banner from './Banner';
import Urunler from './Urunler';
import Footer from './Footer';
import Sepet from './Sepet'; // Sepet bileşeni varsa ekleyebilirsin

function App() {
  return (
    <SepetProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Urunler />
            </>
          } />
          <Route path="/urunler" element={<Urunler />} />
          <Route path="/sepet" element={<Sepet />} />
        </Routes>
        <Footer/>
      </Router>
    </SepetProvider>
  );
}

export default App;
