import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'

import Home from './pages/Home'
import Menu from './pages/Menu'
import Order from './pages/Order'

function ScrollToTopAndInit() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      if (window.initPlugins) {
        window.initPlugins();
      }
    }, 150);
  }, [pathname]);

  return null;
}

function App() {
  const [cart, setCart] = React.useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    const index = cart.findLastIndex(item => item.id === itemId);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  return (
    <Router>
      <ScrollToTopAndInit />
      <Header cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} cartCount={cart.length} />} />
        <Route path="/order" element={<Order cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
