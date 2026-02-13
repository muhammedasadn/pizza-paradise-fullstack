import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Clock, Flame, Award } from 'lucide-react';

const features = [
    {
        icon: Leaf,
        title: "Fresh Ingredients",
        description: "Locally sourced, organic produce delivered daily to ensuring maximum freshness."
    },
    {
        icon: Flame,
        title: "Wood-Fired Oven",
        description: "Authentic Neapolitan style baking at 400°C for that perfect leopard-spotted crust."
    },
    {
        icon: Clock,
        title: "Fast Delivery",
        description: "From our oven to your doorstep in under 30 minutes, guaranteed hot and fresh."
    },
    {
        icon: Award,
        title: "Master Chefs",
        description: "Crafted by award-winning pizzaiolos with years of experience in Italy."
    }
];

const Experience = () => {
    return (
        <section className="py-24 bg-pizza-charcoal text-white relative overflow-hidden">
            {/* Background texture or gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-pizza-dark to-black opacity-80" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                    <div className="md:w-1/2">
                        <span className="text-pizza-orange font-bold tracking-widest uppercase text-sm">Why Choose Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">It's Not Just Pizza, <br />It's an <span className="text-pizza-red">Experience</span>.</h2>
                    </div>
                    <div className="md:w-1/2">
                        <p className="text-gray-400 text-lg">
                            We believe in the power of good food to bring people together. That's why we obsess over every detail, from the water purity in our dough to the origin of our tomatoes.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-colors border border-white/10"
                        >
                            <div className="w-14 h-14 bg-pizza-red/20 rounded-full flex items-center justify-center text-pizza-red mb-6">
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
