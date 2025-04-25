import React, { createContext, useState } from 'react';

// SepetContext'i oluşturuyoruz
export const SepetContext = createContext();

// SepetContext Provider'ı
export const SepetProvider = ({ children }) => {
  const [sepet, setSepet] = useState({
    borek: 0,
    sarma: 0,
    
  });

  // Sepet'e ürün eklemek için fonksiyon
  const sepeteEkle = (id) => {
    setSepet((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  // Sepetteki ürünü azaltmak için fonksiyon
  const azalt = (id) => {
    setSepet((prev) => {
      const yeniDeger = prev[id] - 1;
      return {
        ...prev,
        [id]: yeniDeger <= 0 ? 0 : yeniDeger,
      };
    });
  };

  // Sepetteki ürünü arttırmak için fonksiyon
  const arttir = (id) => {
    setSepet((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  // Sepetteki toplam ürün sayısını hesaplayan fonksiyon
  const toplamUrunSayisi = () => {
    return Object.values(sepet).reduce((total, adet) => total + adet, 0);
  };

  return (
    <SepetContext.Provider value={{ sepet, sepeteEkle, arttir, azalt, toplamUrunSayisi }}>
      {children}
    </SepetContext.Provider>
  );
};
