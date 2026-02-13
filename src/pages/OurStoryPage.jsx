import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Award, Heart } from 'lucide-react';
import chefImage from '../assets/images/chef.png';

const OurStoryPage = () => {
    return (
        <div className="pt-24 pb-20 min-h-screen bg-pizza-cream">

            {/* Header Section */}
            <div className="bg-pizza-charcoal text-white py-24 relative overflow-hidden">
                {/* Abstract BG */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pizza-red via-pizza-dark to-black" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-center mb-4"
                    >
                        <Heart className="text-pizza-red" size={48} fill="currentColor" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        Our <span className="text-pizza-red">Journey</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                    >
                        Born from a passion for authentic Italian traditions and a desire to bring modern culinary creativity to your plate.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-[-5rem] relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2"
                >
                    <div className="h-96 md:h-auto overflow-hidden">
                        <img src={chefImage} alt="Head Chef" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-10 md:p-16 flex flex-col justify-center space-y-6">
                        <h2 className="text-3xl font-bold text-pizza-charcoal">The Origin</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            It started in a small kitchen in Naples, where our founder, Marco Rossi, learned the art of pizzamaking from his grandmother. He believed that pizza wasn't just food—it was a way to bring community together.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Bringing those centuries-old techniques to the modern world, Pizza Paradise was born. We combine locally sourced, organic ingredients with imported San Marzano tomatoes and 48-hour fermented dough.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Values Section */}
            <div className="container mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <span className="text-pizza-orange font-bold uppercase tracking-widest text-sm">Our Philosophy</span>
                    <h2 className="text-4xl font-bold text-pizza-charcoal mt-2">Crafted with Care</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Sparkles,
                            title: "Innovation",
                            desc: "Pushing the boundaries of flavor combinations while respecting tradition."
                        },
                        {
                            icon: Users,
                            title: "Community",
                            desc: "Supporting local farmers and creating a welcoming space for everyone."
                        },
                        {
                            icon: Award,
                            title: "Excellence",
                            desc: "Never cutting corners. Quality is our ingredient number one."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-pizza-red hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="w-16 h-16 bg-pizza-red/10 rounded-full flex items-center justify-center text-pizza-red mb-6 mx-auto">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-center text-pizza-charcoal mb-4">{item.title}</h3>
                            <p className="text-gray-500 text-center">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default OurStoryPage;
