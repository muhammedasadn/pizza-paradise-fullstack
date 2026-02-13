import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from './ui/Button';

const CartSidebar = () => {
    const { isCartOpen, closeCart, cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 lg:hidden"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <ShoppingBag className="text-pizza-red" size={24} />
                                <h2 className="text-xl font-bold text-pizza-charcoal">Your Cart</h2>
                                <span className="bg-pizza-red/10 text-pizza-red text-xs font-bold px-2 py-1 rounded-full">
                                    {cartItems.length} items
                                </span>
                            </div>
                            <button
                                onClick={closeCart}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Items List */}
                        <div className="flex-grow overflow-y-auto p-6 space-y-6">
                            {cartItems.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                                        <ShoppingBag size={40} />
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-pizza-charcoal">Your cart is empty</p>
                                        <p className="text-gray-400">Add some delicious pizza to start!</p>
                                    </div>
                                    <Button variant="secondary" onClick={closeCart}>
                                        Browse Menu
                                    </Button>
                                </div>
                            ) : (
                                cartItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex gap-4 group"
                                    >
                                        <div className="w-20 h-20 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100">
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex justify-between items-start">
                                                <h3 className="font-bold text-pizza-charcoal">{item.title}</h3>
                                                <button
                                                    onClick={() => removeFromCart(index)}
                                                    className="text-gray-300 hover:text-pizza-red transition-colors"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                            <p className="text-xs text-gray-500 mb-1">
                                                {item.size} Size {item.toppings?.length > 0 && `• ${item.toppings.length} extras`}
                                            </p>
                                            {item.toppings?.length > 0 && (
                                                <p className="text-[10px] text-gray-400 line-clamp-1 mb-2">
                                                    {item.toppings.join(', ')}
                                                </p>
                                            )}
                                            <div className="flex justify-between items-center mt-auto">
                                                <div className="flex items-center bg-gray-50 rounded-lg p-1">
                                                    <button
                                                        onClick={() => updateQuantity(index, item.quantity - 1)}
                                                        className="p-1 hover:bg-white hover:shadow-sm rounded transition-all text-gray-500"
                                                    >
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="w-8 text-center text-sm font-bold text-pizza-charcoal">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => updateQuantity(index, item.quantity + 1)}
                                                        className="p-1 hover:bg-white hover:shadow-sm rounded transition-all text-gray-500"
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>
                                                <span className="font-bold text-pizza-red">
                                                    ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {cartItems.length > 0 && (
                            <div className="p-6 border-t border-gray-100 space-y-4">
                                <div className="flex justify-between items-center text-lg">
                                    <span className="text-gray-500">Subtotal</span>
                                    <span className="font-black text-pizza-charcoal text-2xl">${totalPrice}</span>
                                </div>
                                <p className="text-xs text-gray-400 text-center">
                                    Taxes and delivery fee calculated at checkout
                                </p>
                                <Button variant="primary" className="w-full justify-center py-4 text-lg">
                                    Checkout Now <ArrowRight size={20} />
                                </Button>
                                <button
                                    onClick={closeCart}
                                    className="w-full text-sm font-bold text-gray-400 hover:text-pizza-charcoal transition-colors py-2"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartSidebar;
