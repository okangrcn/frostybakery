import React, { useContext } from 'react';
import './Urunler.css';
import borekImg from '../src/assets/borek.jpg';
import sarmaImg from '../src/assets/sarma.jpg';
import { SepetContext } from './SepetContext';  // SepetContext'i içe aktar

function Urunler() {
  const { sepet, arttir, azalt, sepeteEkle } = useContext(SepetContext);  // SepetContext'ten fonksiyonları al

  const urunler = [
    {
      id: 'borek',
      isim: 'Dondurulmuş Börek',
      aciklama: 'Kıymalı, peynirli ve patatesli çeşitleriyle donuk böreklerimiz sofralarınızda.',
      resim: borekImg,
      kilo: '1 KG',
      ucret: '1000 TL',
    },
    {
      id: 'sarma',
      isim: 'Zeytinyağlı Sarma',
      aciklama: 'El yapımı, taze asma yaprağıyla hazırlanmış geleneksel zeytinyağlı sarmamız.',
      resim: sarmaImg,
      kilo: '1 KG',
      ucret: '500 TL',
    },
    
  ];

  // Adet input alanındaki değeri değiştirme
  const handleInputChange = (urunId, e) => {
    const value = e.target.value;
    const yeniAdet = value === '' ? 0 : Math.max(0, parseInt(value) || 0);

    // Sepetteki ürünü güncelle
    if (yeniAdet > sepet[urunId]) {
      for (let i = sepet[urunId]; i < yeniAdet; i++) {
        arttir(urunId); // Adeti arttır
      }
    } else if (yeniAdet < sepet[urunId]) {
      for (let i = sepet[urunId]; i > yeniAdet; i--) {
        azalt(urunId); // Adeti azalt
      }
    }
  };

  return (
    <div className="urunler-ana">
      <h2>Ürünlerimiz</h2>
      {/* Navbar genişliğinde bir container */}
      <div className="urunler-container-wrapper">
        <div className="urunler-container">
          {urunler.map((urun) => (
            <div key={urun.id} className="urun-kart">
              <img src={urun.resim} alt={urun.isim} />
              <h2>{urun.isim}</h2>
              <p>{urun.aciklama}</p>

              {/* Kilo ve Ücret bilgisi */}
              <div className="kilo-ve-ucret">
                <p><strong>Birim:</strong> {urun.kilo}</p>
                <p><strong>Fiyat:</strong> {urun.ucret}</p>
              </div>

              {/* Adet kontrol */}
              {sepet[urun.id] > 0 ? (
                <div className="adet-kontrol">
                  <button onClick={() => azalt(urun.id)}>-</button>
                  <input
                    type="number"
                    min="0"
                    value={sepet[urun.id]}
                    onChange={(e) => handleInputChange(urun.id, e)} // Burada handleInputChange çalışacak
                  />
                  <button onClick={() => arttir(urun.id)}>+</button>
                </div>
              ) : (
                <button onClick={() => sepeteEkle(urun.id)}>Sepete Ekle</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Urunler;
