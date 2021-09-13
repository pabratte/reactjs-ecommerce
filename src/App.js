
import './App.css';
import React from 'react';
import ECNavBar from './components/ECNavBar';
import Router from './pages/Router'
import {BrowserRouter} from 'react-router-dom';
import CartProvider from './utils/CartProvider';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <BrowserRouter >
        <ECNavBar />
        <br/>
        <Router />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
