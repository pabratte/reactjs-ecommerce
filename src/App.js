
import './App.css';
import React from 'react';
import { Container } from 'react-bootstrap'
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
          <Container className="main-container">
            <Router />
          </Container>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
