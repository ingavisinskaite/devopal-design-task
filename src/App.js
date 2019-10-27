import React from 'react';
import './App.scss';
import SaleSwiper from './components/sale';
import Footer from './components/footer';
import Header from './components/header';
import Hero from './components/hero';
import Reviews from './components/reviews';
import News from './components/news';
import MobilePhones from './components/mobile-phones';

function App() {
  return ( 
    <div >
      <Header />
      <Hero />
      <Reviews />
      <div className="NEWSPHONES">
        <News />
        <MobilePhones />
      </div>
      <SaleSwiper />
      <Footer />
    </div>
  );
}

export default App;