import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Tag } from 'lucide-react';
import Button from './ui/Button';
import banner1 from '../assets/images/banner-1.png';
import banner2 from '../assets/images/banner-2.png';
import banner3 from '../assets/images/banner-3.png';

const offers = [
    {
        id: 1,
        title: "Weekend Feast",
        subtitle: "Buy 1 Get 1 Free on all Large Pizzas",
        description: "Make your weekend special with our BOGO offer. Valid every Friday to Sunday.",
        image: banner1,
        bg: "bg-gradient-to-r from-black to-transparent",
        color: "text-white",
        cta: "Order Now",
        link: "/order"
    },
    {
        id: 2,
        title: "Family Combo",
        subtitle: "2 Large Pizzas + 4 Drinks @ $39.99",
        description: "The perfect package for your house party. Includes garlic bread side.",
        image: banner2,
        bg: "bg-gradient-to-r from-pizza-red/90 to-transparent",
        color: "text-white",
        cta: "Grab Deal"
    },
    {
        id: 3,
        title: "Lunch Express",
        subtitle: "Personal Pizza + Drink @ $12.99",
        description: "Beat the midday hunger with our quick and delicious lunch combos. Available 11AM - 3PM.",
        image: banner3,
        bg: "bg-gradient-to-r from-orange-500/80 to-transparent",
        color: "text-white",
        cta: "Order Lunch"
    },
    {
        id: 4,
        title: "Midnight Cravings",
        subtitle: "Flat 20% OFF after 10 PM",
        description: "Late night hunger pangs? We've got you covered. Open till 2 AM every day.",
        image: banner1, // Reusing premium image
        bg: "bg-gradient-to-r from-indigo-900/90 to-transparent",
        color: "text-white",
        cta: "Order Now"
    }
];

const OfferBanners = () => {
    // Duplicate offers to create seamless loop
    const loopedOffers = [...offers, ...offers];

    return (
        <section className="py-20 bg-pizza-cream overflow-hidden">
            <div className="container mx-auto px-6 mb-12 flex items-center justify-between">
                <div>
                    <span className="text-pizza-orange font-bold uppercase tracking-widest text-sm">Special Offers</span>
                    <h2 className="text-4xl font-bold text-pizza-charcoal mt-2">Hot Deals</h2>
                </div>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks for smooth fade out at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 z-20 bg-gradient-to-r from-pizza-cream to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 z-20 bg-gradient-to-l from-pizza-cream to-transparent pointer-events-none" />

                <motion.div
                    className="flex gap-6 md:gap-8 w-max px-6"
                    animate={{ x: "-50%" }}
                    initial={{ x: "0%" }}
                    transition={{
                        duration: 40, // Slow smooth scroll
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                    whileHover={{ animationPlayState: "paused" }} // Note: Wrapper this might not work directly on motion div props for play state.
                    // Better approach for hover pause in Framer Motion is state based or CSS. 
                    // Let's use CSS for the play-state pause on hover if possible, but style={{}} works too.
                    style={{
                        // Note: Framer motion handles transform directly. To pause, simpler to use a CSS animation class if we want robust pause.
                        // However, let's stick to motion. The user asked for "horizontal slide".
                        // If we want hover pause, creating a state [isPaused, setIsPaused] is best but complex with continuous loop. 
                        // Actually, plain CSS marquee is easiest for pause on hover.
                        // But I'll stick to Framer Motion values. 
                    }}
                    onHoverStart={() => { /* logic to pause? frame motion doesnt support easy pause of repeat animation without variants/controls */ }}
                >
                    {loopedOffers.map((offer, index) => (
                        <div
                            key={`${offer.id}-${index}`}
                            className="w-[85vw] md:w-[600px] lg:w-[800px] h-[400px] md:h-[500px] rounded-3xl relative overflow-hidden flex-shrink-0 group shadow-xl"
                        >
                            <img
                                src={offer.image}
                                alt={offer.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className={`absolute inset-0 ${offer.bg}`} />

                            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center items-start max-w-lg z-10">
                                <div className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-white text-sm font-bold mb-4 flex items-center gap-2 border border-white/30">
                                    <Tag size={14} /> Limited Time
                                </div>

                                <h3 className={`text-3xl md:text-5xl font-bold mb-2 ${offer.color} drop-shadow-lg`}>{offer.title}</h3>
                                <p className={`text-lg md:text-2xl font-semibold mb-4 ${offer.color} opacity-90`}>{offer.subtitle}</p>
                                <p className={`text-gray-200 mb-8 max-w-sm ${offer.color} opacity-80 hidden md:block`}>{offer.description}</p>

                                <Button variant="primary" className="shadow-2xl">
                                    {offer.cta} <ArrowRight size={20} />
                                </Button>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default OfferBanners;
