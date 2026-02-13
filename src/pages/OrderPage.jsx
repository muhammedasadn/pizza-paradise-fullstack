import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft, ShoppingBag } from 'lucide-react';
import Button from '../components/ui/Button';
import { allPizzas } from '../data/pizzas';
import { useCart } from '../context/CartContext';

const STEPS = [
    { id: 1, title: 'Choose Pizza' },
    { id: 2, title: 'Customize' },
    { id: 3, title: 'Details' },
    { id: 4, title: 'Summary' },
];

const PIZZA_SIZES = [
    { id: 'S', label: 'Small', multiplier: 0.8 },
    { id: 'M', label: 'Medium', multiplier: 1 },
    { id: 'L', label: 'Large', multiplier: 1.2 },
];

const TOPPINGS = [
    { id: 'cheese', label: 'Extra Cheese', price: 2 },
    { id: 'mushrooms', label: 'Mushrooms', price: 1.5 },
    { id: 'olives', label: 'Olives', price: 1.5 },
    { id: 'onions', label: 'Onions', price: 1 },
    { id: 'pepperoni', label: 'Extra Pepperoni', price: 2.5 },
];

const OrderPage = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedPizza, setSelectedPizza] = useState(null);
    const [size, setSize] = useState('M');
    const [toppings, setToppings] = useState([]);
    const [details, setDetails] = useState({ name: '', phone: '', address: '' });
    const [orderPlaced, setOrderPlaced] = useState(false);
    const { addToCart } = useCart();

    // Scroll to top on step change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentStep]);

    const handleNext = () => {
        if (currentStep === 1 && !selectedPizza) return;
        if (currentStep === 3 && (!details.name || !details.phone || !details.address)) return;
        setCurrentStep((prev) => Math.min(prev + 1, STEPS.length));
    };

    const handleBack = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const toggleTopping = (id) => {
        setToppings((prev) =>
            prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
        );
    };

    const calculateTotal = () => {
        if (!selectedPizza) return 0;
        const basePrice = parseFloat(selectedPizza.price);
        const sizeMultiplier = PIZZA_SIZES.find((s) => s.id === size)?.multiplier || 1;
        const toppingsPrice = toppings.reduce((acc, tId) => {
            const topping = TOPPINGS.find((t) => t.id === tId);
            return acc + (topping ? topping.price : 0);
        }, 0);
        return ((basePrice * sizeMultiplier) + toppingsPrice).toFixed(2);
    };

    const handleAddToCart = () => {
        if (!selectedPizza) return;

        const pizzaToAdd = {
            id: selectedPizza.id,
            title: selectedPizza.title,
            image: selectedPizza.image,
            price: calculateTotal(),
            size: PIZZA_SIZES.find(s => s.id === size)?.label,
            toppings: toppings.map(tId => TOPPINGS.find(t => t.id === tId)?.label),
            quantity: 1
        };

        addToCart(pizzaToAdd);

        // Optionally reset the page or show a brief success state
        setOrderPlaced(true);
    };

    if (orderPlaced) {
        return (
            <div className="min-h-screen bg-pizza-cream pt-32 pb-20 flex items-center justify-center px-6">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-lg w-full"
                >
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                        <ShoppingBag size={48} />
                    </div>
                    <h2 className="text-3xl font-bold text-pizza-charcoal mb-4">Added to Cart!</h2>
                    <p className="text-gray-600 mb-8">Your {PIZZA_SIZES.find(s => s.id === size)?.label} {selectedPizza?.title} has been added to your cart.</p>
                    <div className="bg-gray-50 p-6 rounded-xl mb-8 text-left space-y-2">
                        <div className="flex justify-between font-bold text-pizza-charcoal">
                            <span>Item Total:</span>
                            <span>${calculateTotal()}</span>
                        </div>
                    </div>
                    <Button variant="primary" onClick={() => {
                        setOrderPlaced(false);
                        setCurrentStep(1);
                        setSelectedPizza(null);
                        setToppings([]);
                        setDetails({ name: '', phone: '', address: '' });
                    }} className="w-full justify-center">
                        Order Another
                    </Button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-pizza-cream pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-5xl">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-pizza-charcoal mb-4">Order Your <span className="text-pizza-red">Pizza</span></h1>
                    <p className="text-gray-500">Follow the steps to customize your perfect meal.</p>
                </div>

                {/* Stepper */}
                <div className="flex justify-between items-center mb-12 relative max-w-3xl mx-auto">
                    <div className="absolute left-0 top-1/2 w-full h-1 bg-gray-200 -z-0 transform -translate-y-1/2" />
                    <div
                        className="absolute left-0 top-1/2 h-1 bg-pizza-green transition-all duration-500 -z-0 transform -translate-y-1/2"
                        style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
                    />

                    {STEPS.map((step) => (
                        <div key={step.id} className="relative z-10 flex flex-col items-center gap-2 bg-pizza-cream">
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${step.id <= currentStep
                                    ? 'bg-pizza-green text-white shadow-lg scale-110'
                                    : 'bg-gray-200 text-gray-500'
                                    }`}
                            >
                                {step.id < currentStep ? <Check size={20} /> : step.id}
                            </div>
                            <span className={`text-xs md:text-sm font-medium ${step.id <= currentStep ? 'text-pizza-charcoal' : 'text-gray-400'}`}>
                                {step.title}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Content Area */}
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-3xl shadow-xl p-6 md:p-10 mb-8 min-h-[400px]"
                >
                    {currentStep === 1 && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {allPizzas.map(pizza => (
                                <div
                                    key={pizza.id}
                                    onClick={() => setSelectedPizza(pizza)}
                                    className={`cursor-pointer rounded-2xl overflow-hidden border-2 transition-all duration-200 hover:shadow-lg ${selectedPizza?.id === pizza.id ? 'border-pizza-red ring-2 ring-pizza-red/20 bg-red-50' : 'border-transparent bg-gray-50'
                                        }`}
                                >
                                    <img src={pizza.image} alt={pizza.title} className="w-full h-48 object-cover" />
                                    <div className="p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-bold text-pizza-charcoal">{pizza.title}</h3>
                                            <span className="font-bold text-pizza-red">${pizza.price}</span>
                                        </div>
                                        <p className="text-sm text-gray-500 line-clamp-2">{pizza.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {currentStep === 2 && selectedPizza && (
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="flex flex-col items-center">
                                <img src={selectedPizza.image} alt={selectedPizza.title} className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl mb-6 animate-spin-slow" />
                                <h3 className="text-2xl font-bold text-pizza-charcoal">{selectedPizza.title}</h3>
                                <p className="text-gray-500 text-center max-w-sm mt-2">{selectedPizza.description}</p>
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="font-bold text-lg mb-4 flex items-center gap-2"><ShoppingBag size={20} /> Select Size</h4>
                                    <div className="flex gap-4">
                                        {PIZZA_SIZES.map(s => (
                                            <button
                                                key={s.id}
                                                onClick={() => setSize(s.id)}
                                                className={`flex-1 py-3 rounded-xl border-2 font-semibold transition-all ${size === s.id ? 'border-pizza-orange bg-orange-50 text-pizza-orange' : 'border-gray-200 hover:border-gray-300'
                                                    }`}
                                            >
                                                {s.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-4">Extra Toppings</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        {TOPPINGS.map(topping => (
                                            <label key={topping.id} className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={toppings.includes(topping.id)}
                                                    onChange={() => toggleTopping(topping.id)}
                                                    className="w-5 h-5 text-pizza-red rounded focus:ring-pizza-red"
                                                />
                                                <span className="flex-grow text-sm font-medium">{topping.label}</span>
                                                <span className="text-xs text-gray-400">+${topping.price}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="max-w-xl mx-auto space-y-6">
                            <h3 className="text-2xl font-bold text-center mb-8">Delivery Details</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        value={details.name}
                                        onChange={e => setDetails({ ...details, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pizza-red/20 focus:border-pizza-red transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        value={details.phone}
                                        onChange={e => setDetails({ ...details, phone: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pizza-red/20 focus:border-pizza-red transition-all"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Delivery Address</label>
                                    <textarea
                                        value={details.address}
                                        onChange={e => setDetails({ ...details, address: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pizza-red/20 focus:border-pizza-red transition-all h-32 resize-none"
                                        placeholder="123 Pizza Street, Flavor Town"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {currentStep === 4 && selectedPizza && (
                        <div className="max-w-2xl mx-auto">
                            <h3 className="text-2xl font-bold text-center mb-8">Order Summary</h3>
                            <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
                                <div className="flex gap-6 items-center mb-6 pb-6 border-b border-gray-200">
                                    <img src={selectedPizza.image} alt={selectedPizza.title} className="w-24 h-24 rounded-full object-cover shadow-md" />
                                    <div>
                                        <h4 className="text-xl font-bold text-pizza-charcoal">{selectedPizza.title}</h4>
                                        <p className="text-gray-500">{PIZZA_SIZES.find(s => s.id === size)?.label} Size</p>
                                    </div>
                                    <div className="ml-auto text-xl font-bold text-pizza-red">
                                        ${(parseFloat(selectedPizza.price) * (PIZZA_SIZES.find(s => s.id === size)?.multiplier || 1)).toFixed(2)}
                                    </div>
                                </div>

                                {toppings.length > 0 && (
                                    <div className="mb-6 pb-6 border-b border-gray-200">
                                        <h5 className="font-bold text-gray-400 text-sm uppercase tracking-wider mb-3">Extras</h5>
                                        {toppings.map(tId => {
                                            const t = TOPPINGS.find(to => to.id === tId);
                                            return (
                                                <div key={tId} className="flex justify-between items-center mb-2 text-sm">
                                                    <span>{t?.label}</span>
                                                    <span>+${t?.price}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}

                                <div className="flex justify-between items-center text-2xl font-bold text-pizza-charcoal pt-2">
                                    <span>Total</span>
                                    <span>${calculateTotal()}</span>
                                </div>
                            </div>

                            <div className="bg-blue-50 text-blue-800 p-4 rounded-xl text-sm flex items-start gap-3 mb-6">
                                <ShoppingBag size={20} className="mt-0.5 flex-shrink-0" />
                                <p>Payment will be collected upon delivery. Please ensure you have cash or card ready.</p>
                            </div>
                        </div>
                    )}

                </motion.div>

                {/* Navigation Buttons */}
                <div className="flex justify-between max-w-5xl mx-auto">
                    <Button
                        variant="secondary"
                        onClick={handleBack}
                        className={currentStep === 1 ? 'invisible' : ''}
                    >
                        <ChevronLeft size={20} /> Back
                    </Button>

                    {currentStep < 4 ? (
                        <Button
                            variant="primary"
                            onClick={handleNext}
                            disabled={currentStep === 1 && !selectedPizza || currentStep === 3 && (!details.name || !details.phone || !details.address)}
                            className={`${(currentStep === 1 && !selectedPizza) || (currentStep === 3 && (!details.name || !details.phone || !details.address)) ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            Next Step <ChevronRight size={20} />
                        </Button>
                    ) : (
                        <Button variant="primary" onClick={handleAddToCart} className="bg-pizza-green hover:bg-green-700">
                            Add to Cart <ShoppingBag size={20} />
                        </Button>
                    )}
                </div>

            </div>
        </div>
    );
};

export default OrderPage;
