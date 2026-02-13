import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import PizzaCard from '../components/PizzaCard';
import pizza1 from '../assets/images/pizza-1.png';
import heroPizza from '../assets/images/hero-pizza.png';

import { allPizzas } from '../data/pizzas';

const categories = ["All", "Meat", "Vegetarian", "Seafood", "Gourmet"];

const MenuPage = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPizzas = allPizzas.filter(pizza => {
        const matchesCategory = activeCategory === "All" || pizza.category === activeCategory;
        const matchesSearch = pizza.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pizza.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="pt-24 pb-20 min-h-screen bg-pizza-cream">

            {/* Header Section */}
            <div className="bg-pizza-charcoal text-white py-20 mb-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-pizza-red/10 pattern-dots" />
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        Our <span className="text-pizza-red">Menu</span>
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-lg max-w-2xl mx-auto"
                    >
                        Explore our curated selection of artisanal pizzas, crafted with passion and the finest ingredients.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-6">

                {/* Controls */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">

                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeCategory === cat
                                    ? "bg-pizza-red text-white shadow-lg scale-105"
                                    : "bg-white text-gray-500 hover:bg-gray-100"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search pizzas..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-pizza-orange focus:ring-2 focus:ring-pizza-orange/20 transition-all"
                        />
                    </div>
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredPizzas.map((pizza) => (
                            <motion.div
                                key={pizza.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <PizzaCard {...pizza} delay={0} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredPizzas.length === 0 && (
                    <div className="text-center py-20">
                        <Filter size={48} className="mx-auto text-gray-300 mb-4" />
                        <h3 className="text-xl font-bold text-gray-400">No pizzas found</h3>
                        <p className="text-gray-400">Try adjusting your filters or search terms.</p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default MenuPage;
