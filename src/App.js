import React from 'react';
import './App.css';
import Sale from './components/sale';
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
      <div className="container">
        <News />
        <MobilePhones />
      </div>
      <Sale />
      <Footer />
    </div>
  );
}

export default App;