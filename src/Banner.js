import React from 'react';
import './Banner.css';
import bannerImg from '../src/assets/banner.png'; // doğru yolu verdiğine emin ol

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImg} alt="Banner" className="banner-image" />
    </div>
  );
};

export default Banner;
