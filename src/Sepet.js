import React, { useContext } from 'react';
import { SepetContext } from './SepetContext';
import './Sepet.css'; // Stil dosyasını ekleyin

function Sepet() {
  const { sepet } = useContext(SepetContext);

  // Ürünleri sepetteki adete göre filtrele
  const urunler = [
    {
      id: 'borek',
      isim: 'Dondurulmuş Börek',
      resim: require('../src/assets/borek.jpg'),
      ucret: 1000, // Fiyatı sayı olarak tutuyoruz, gerektiğinde formatlanabilir
    },
    {
      id: 'sarma',
      isim: 'Zeytinyağlı Sarma',
      resim: require('../src/assets/sarma.jpg'),
      ucret: 500, // Fiyatı sayı olarak tutuyoruz, gerektiğinde formatlanabilir
    },
  ];

  // Sepetteki ürünlerin toplam fiyatını hesapla
  const toplamFiyat = urunler.reduce((total, urun) => {
    return total + (sepet[urun.id] * urun.ucret);
  }, 0);

  return (
    <div className="sepet-panel">
      <h2>Sepetim</h2>
      {urunler.map((urun) => {
        if (sepet[urun.id] > 0) {
          const toplamAdet = sepet[urun.id];
          const toplamUcret = toplamAdet * urun.ucret;

          return (
            <div key={urun.id} className="sepet-urun">
              <img src={urun.resim} alt={urun.isim} className="urun-resim" />
              <div className="urun-bilgiler">
                <p><strong>{urun.isim}</strong></p>
                <p>Adet: {toplamAdet}</p>
                <p>Toplam Fiyat: {toplamUcret} TL</p>
              </div>
            </div>
          );
        }
        return null;
      })}

      <div className="sepet-toplam">
        <h3>Ürünlerin Toplam Fiyatı: {toplamFiyat} TL</h3>
        <button className="odeme-btn">Ödeme Adımına Geç</button>
      </div>
    </div>
  );
}

export default Sepet;
