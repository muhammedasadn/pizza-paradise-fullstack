import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Food Critic",
        content: "The best delivery pizza I've had in years. The crust is perfect—crispy on the outside, soft on the inside.",
        rating: 5
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Pizza Lover",
        content: "Absolutely authentic flavors. Reminds me of my trip to Naples. Highly recommended!",
        rating: 5
    },
    {
        id: 3,
        name: "Jessica Davis",
        role: "Local Guide",
        content: "Great atmosphere and even better food. The truffle mushroom pizza is a game changer.",
        rating: 4
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-pizza-cream relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-pizza-green font-bold tracking-widest uppercase text-sm">Testimonials</span>
                    <h2 className="text-4xl font-bold text-pizza-charcoal mt-2">What Our Customers Say</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-8 rounded-3xl shadow-lg relative"
                        >
                            <Quote className="absolute top-8 right-8 text-gray-100 fill-current" size={64} />

                            <div className="flex gap-1 text-yellow-400 mb-6 relative z-10">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "" : "text-gray-300"} />
                                ))}
                            </div>

                            <p className="text-gray-600 mb-6 italic relative z-10">"{review.content}"</p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-pizza-charcoal rounded-full flex items-center justify-center text-white font-bold text-sm">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-pizza-charcoal text-sm">{review.name}</h4>
                                    <p className="text-xs text-gray-400">{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
