import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SepetProvider } from './SepetContext';

import Header from './Header';
import Banner from './Banner';
import Urunler from './Urunler';
import Hakkimizda from './Hakkimizda';
import Iletisim from './Iletisim';
import Footer from './Footer';
import Sepet from './Sepet'; // Sepet bileşeni varsa ekleyebilirsin

function App() {
  return (
    <SepetProvider>
      <Router basename='/frostybakery'>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Urunler />
            </>
          } />
          <Route path="/urunler" element={<Urunler />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/iletisim" element={<Iletisim/>} />
          <Route path="/sepet" element={<Sepet />} />
        </Routes>
        <Footer/>
      </Router>
    </SepetProvider>
  );
}

export default App;
