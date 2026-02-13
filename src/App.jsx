import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import OurStoryPage from './pages/OurStoryPage';
import OrderPage from './pages/OrderPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import CartSidebar from './components/CartSidebar';
import ContactPage from './pages/ContactPage';
import { CartProvider } from './context/CartContext';

// Scroll to top on route change wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-pizza-cream">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-pizza-red border-t-transparent rounded-full animate-spin"></div>
          <p className="font-bold text-pizza-red tracking-wider animate-pulse">PREPARING OVEN...</p>
        </div>
      </div>
    );
  }

  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="font-sans text-pizza-charcoal bg-pizza-cream overflow-hidden min-h-screen flex flex-col">
          <Navbar />
          <CartSidebar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/story" element={<OurStoryPage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
