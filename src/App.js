import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/home-page';
import Footer from './components/footer';
import Header from './components/header';

function App() {
  return ( 
    <div >
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;