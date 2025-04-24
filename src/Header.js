import React, { useContext, useState } from 'react';
import './Header.css';
import { FiShoppingCart } from 'react-icons/fi'; // Sepet ikonu için react-icons kullanıyoruz
import logo from '../src/assets/logo.svg'; // logo'yu içe aktar
import { SepetContext } from './SepetContext'; // SepetContext'i içe aktar
import Sepet from './Sepet'; // Sepet bileşenini içe aktar

function Header() {
  const { toplamUrunSayisi } = useContext(SepetContext); // SepetContext'ten toplam ürün sayısını al
  const [showSepet, setShowSepet] = useState(false); // Sepet panelinin görünürlüğünü kontrol et

  const toggleSepet = () => {
    setShowSepet(!showSepet); // Sepet panelini açıp kapat
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
        <ul>
          <li><a href="#">Anasayfa</a></li>
          <li><a href="/frostybakery/urunler">Ürünler</a></li>
          <li><a href="#">Hakkımızda</a></li>
          <li><a href="#">İletişim</a></li>
        </ul>
        <div className="sepet-icon" onClick={toggleSepet}>
          <FiShoppingCart />
          {toplamUrunSayisi() > 0 && (
            <span className="sepet-sayisi">{toplamUrunSayisi()}</span>
          )}
        </div>
      </nav>

      {/* Sepet paneli gösterimi */}
      {showSepet && <Sepet closeSepet={() => setShowSepet(false)} />}
    </header>
  );
}

export default Header;
