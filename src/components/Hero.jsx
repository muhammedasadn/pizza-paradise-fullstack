import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import Button from './ui/Button';
import heroImage from '../assets/images/hero-pizza.png';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-pizza-cream">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-pizza-orange/10 skew-x-12 transform origin-top-right z-0" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pizza-red/5 rounded-full blur-3xl z-0" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className="flex items-center gap-2 text-pizza-orange font-semibold tracking-wider uppercase text-sm">
                        <Star size={16} fill="currentColor" />
                        <span>Premium Handcrafted Pizza</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-pizza-charcoal leading-tight">
                        Taste the <br />
                        <span className="text-pizza-red">Passion</span> in <br />
                        Every Slice
                    </h1>

                    <p className="text-gray-600 text-lg md:text-xl max-w-lg leading-relaxed">
                        Authentic Italian flavors fused with modern culinary artistry.
                        Experience pizza like never before.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link to="/order">
                            <Button variant="primary" className="!px-8 !py-4 text-lg">
                                Order Now <ArrowRight size={20} />
                            </Button>
                        </Link>
                        <Link to="/menu">
                            <Button variant="secondary" className="!px-8 !py-4 text-lg">
                                View Menu
                            </Button>
                        </Link>
                    </div>

                    <div className="pt-8 flex items-center gap-8">
                        <div>
                            <p className="text-3xl font-bold text-pizza-charcoal">15k+</p>
                            <p className="text-sm text-gray-500">Happy Customers</p>
                        </div>
                        <div className="w-px h-12 bg-gray-300" />
                        <div>
                            <p className="text-3xl font-bold text-pizza-charcoal">4.9/5</p>
                            <p className="text-sm text-gray-500">Rating</p>
                        </div>
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50, rotate: 10 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 1, type: 'spring' }}
                    className="relative"
                >
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="w-full max-w-lg mx-auto md:max-w-xl"
                    >
                        <img
                            src={heroImage}
                            alt="Delicious Pizza"
                            className="w-full h-auto drop-shadow-2xl rounded-full object-cover" // Added rounded-full in case it's not perfectly cut, but drop shadow helps depth
                        />
                    </motion.div>

                    {/* Floating Badge */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8, type: "spring" }}
                        className="absolute top-10 right-10 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/50"
                    >
                        <p className="font-bold text-pizza-red text-center leading-none">
                            <span className="text-3xl">20%</span><br />
                            <span className="text-xs text-gray-600 uppercase">OFF First<br />Order</span>
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
