import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const PizzaCard = ({ id, title, description, price, image, delay }) => {
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart({ id, title, description, price, image });
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
            className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group relative border border-gray-100"
        >
            <div className="relative mb-6 overflow-hidden rounded-full aspect-square mx-auto w-4/5">
                <motion.img
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.4 }}
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold text-pizza-charcoal group-hover:text-pizza-red transition-colors">{title}</h3>
                <p className="text-gray-500 text-sm h-10 line-clamp-2">{description}</p>

                <div className="flex items-center justify-between pt-4">
                    <span className="text-2xl font-bold text-pizza-charcoal">${price}</span>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleAddToCart}
                        className={`${added ? 'bg-pizza-green' : 'bg-pizza-charcoal'
                            } text-white p-3 rounded-full hover:shadow-lg transition-all duration-300`}
                    >
                        {added ? <Check size={20} /> : <Plus size={20} />}
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default PizzaCard;
