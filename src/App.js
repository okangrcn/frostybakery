import React from 'react';
import { SepetProvider } from './SepetContext';
import Header from './Header';
import Urunler from './Urunler';

function App() {
  return (
    <SepetProvider> {/* SepetContext'i burada sağlıyoruz */}
      <Header />
      <Urunler />
    </SepetProvider>
  );
}

export default App;
