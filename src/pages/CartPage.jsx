import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Pizza } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const CartPage = () => {
    const { cartItems, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

    const subtotal = totalPrice;
    const shipping = 5.00;
    const tax = (subtotal * 0.1).toFixed(2);
    const finalTotal = (parseFloat(subtotal) + shipping + parseFloat(tax)).toFixed(2);

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6"
                >
                    <ShoppingBag size={48} className="text-gray-400" />
                </motion.div>
                <h2 className="text-3xl font-bold text-pizza-charcoal mb-4">Your Cart is Empty</h2>
                <p className="text-gray-500 mb-8 max-w-md">Looks like you haven't added any delicious pizzas to your cart yet.</p>
                <Link to="/menu">
                    <Button variant="primary">
                        Browse Menu <ArrowRight size={20} />
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 lg:px-24 bg-pizza-cream">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-pizza-charcoal mb-12 flex items-center gap-4">
                    Your Cart <span className="text-pizza-red text-xl bg-white px-4 py-1 rounded-full shadow-sm">{totalItems} items</span>
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-6">
                        <AnimatePresence>
                            {cartItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="bg-white rounded-3xl p-6 shadow-md flex flex-col sm:flex-row items-center gap-6"
                                >
                                    <div className="w-24 h-24 flex-shrink-0 bg-pizza-cream rounded-2xl p-2">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                                    </div>

                                    <div className="flex-grow text-center sm:text-left">
                                        <h3 className="text-xl font-bold text-pizza-charcoal">{item.title}</h3>
                                        <p className="text-gray-500 text-sm">{item.description}</p>
                                    </div>

                                    <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-2">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg transition-colors"
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <span className="font-bold w-4 text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg transition-colors"
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>

                                    <div className="text-left w-20">
                                        <span className="text-xl font-bold text-pizza-charcoal">${(parseFloat(item.price) * item.quantity).toFixed(2)}</span>
                                    </div>

                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-gray-300 hover:text-pizza-red transition-colors p-2"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-pizza-charcoal text-white rounded-[2rem] p-8 shadow-2xl sticky top-32">
                            <h3 className="text-2xl font-bold mb-8">Order Summary</h3>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-gray-400">
                                    <span>Subtotal</span>
                                    <span className="text-white font-bold">${subtotal}</span>
                                </div>
                                <div className="flex justify-between text-gray-400">
                                    <span>Shipping</span>
                                    <span className="text-white font-bold">${shipping.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-400">
                                    <span>Tax (10%)</span>
                                    <span className="text-white font-bold">${tax}</span>
                                </div>
                                <div className="h-px bg-white/10 my-6" />
                                <div className="flex justify-between text-xl font-bold">
                                    <span>Total</span>
                                    <span className="text-pizza-orange">${finalTotal}</span>
                                </div>
                            </div>

                            <Link to="/order">
                                <Button variant="primary" className="w-full justify-center !py-4 shadow-xl">
                                    Checkout <ArrowRight size={20} />
                                </Button>
                            </Link>

                            <div className="mt-8 flex items-center gap-3 text-xs text-gray-400 border-t border-white/5 pt-8">
                                <Pizza className="text-pizza-red" size={16} />
                                <span>Freshly baked and delivered in 30 mins!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
