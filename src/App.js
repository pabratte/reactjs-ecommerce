
import './App.css';
import React from 'react';
import ECNavBar from './components/ECNavBar';
import Router from './pages/Router'
import {BrowserRouter} from 'react-router-dom';
import CartProvider from './utils/CartProvider';

function App() {
  return (
    <CartProvider>
      <BrowserRouter >
        <ECNavBar />
        <Router />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
