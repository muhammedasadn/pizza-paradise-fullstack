import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from './ui/Button';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { totalItems, openCart } = useCart();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Check if we are on the home page for transparency logic
    const isHomePage = location.pathname === '/';
    // If not home page, always solid/sticky style or make it dark by default
    const navbarStyle = isHomePage
        ? (isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6')
        : 'bg-white/90 backdrop-blur-md shadow-sm py-4'; // Always solid on other pages

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Menu', path: '/menu' },
        { name: 'Our Story', path: '/story' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarStyle}`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold font-sans tracking-tighter flex items-center gap-2">
                        <span className="text-4xl text-pizza-red">PIZZA</span>
                        <span className="text-pizza-charcoal">PARADISE</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium hover:text-pizza-orange transition-colors ${isScrolled || !isHomePage ? 'text-pizza-charcoal' : 'text-pizza-charcoal'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/login" className="text-sm font-medium hover:text-pizza-orange transition-colors text-pizza-charcoal flex items-center gap-1">
                            <User size={18} /> Login
                        </Link>
                        <button onClick={openCart} className="relative group p-2 cursor-pointer">
                            <ShoppingBag size={24} className="text-pizza-charcoal group-hover:text-pizza-red transition-colors" />
                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 bg-pizza-red text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce-subtle">
                                    {totalItems}
                                </span>
                            )}
                        </button>
                        <Link to="/order">
                            <Button variant="primary" className="!py-2 !px-6 text-sm">
                                Order Now
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-pizza-charcoal"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-pizza-cream flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-2xl font-bold text-pizza-charcoal hover:text-pizza-red"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-pizza-charcoal hover:text-pizza-red flex items-center gap-2">
                            <User size={24} /> Login
                        </Link>
                        <button
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                openCart();
                            }}
                            className="text-2xl font-bold text-pizza-charcoal hover:text-pizza-red flex items-center gap-2 relative"
                        >
                            <ShoppingBag size={24} /> Cart
                            {totalItems > 0 && (
                                <span className="bg-pizza-red text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md">
                                    {totalItems}
                                </span>
                            )}
                        </button>
                        <Link to="/order" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button variant="primary">
                                Order Now
                            </Button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
