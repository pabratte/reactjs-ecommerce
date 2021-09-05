import './App.css';
import React from 'react';
import ECNavBar from './components/ECNavBar';
import Router from './pages/Router'
import {BrowserRouter} from 'react-router-dom';
import CartProvider from './utils/CartProvider';
import AuthProvider from './utils/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <ECNavBar />
          <Router />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
