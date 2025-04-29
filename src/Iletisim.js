import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Iletisim.css';

function Iletisim() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('frosty-bakery', 'frosty-bakery-template', form.current, '0ap5-cQgSTf8XeZHu')
      .then((result) => {
          console.log(result.text);
          alert('Mesaj başarıyla gönderildi!');
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          alert('Mesaj gönderilemedi!');
      });
  };

  return (
    <div className="iletisim-container">
      <h2>İletişim</h2>
      <p><b>Frosty Bakery</b> ailesi olarak sınırsız destek sunuyoruz. Aşağıdaki formu kullanarak e-posta yoluyla bizimle kolayca iletişime geçebilirsin.</p>
      <form ref={form} onSubmit={sendEmail} className="iletisim-form">
        <div className="form-group">
          <label htmlFor="ad">Ad</label>
          <input type="text" id="ad" name="ad" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-posta Adresi</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="telefon">Telefon Numarası</label>
          <input 
            type="tel" 
            id="telefon" 
            name="telefon"
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="mesaj">Mesajınız</label>
          <textarea id="mesaj" name="mesaj" rows="5" required></textarea>
        </div>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
}

export default Iletisim;
