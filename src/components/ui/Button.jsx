import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyle = "px-8 py-3 rounded-full font-semibold transition-all duration-300 transform flex items-center gap-2 shadow-lg";

    const variants = {
        primary: "bg-pizza-red text-white hover:bg-red-700 hover:shadow-pizza-red/40",
        secondary: "bg-white text-pizza-charcoal border-2 border-transparent hover:border-pizza-orange hover:text-pizza-orange hover:shadow-xl",
        outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-pizza-charcoal"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyle} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
