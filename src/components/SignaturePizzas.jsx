import React from 'react';
import PizzaCard from './PizzaCard';
import pizza1 from '../assets/images/pizza-1.png';
// Improved reuse for demo
import heroPizza from '../assets/images/hero-pizza.png';

const pizzas = [
    {
        id: 1,
        title: "Classic Pepperoni",
        description: "Premium pepperoni, rustic tomato sauce, mozzarella, and fresh basil.",
        price: "16.00",
        image: pizza1
    },
    {
        id: 2,
        title: "Margherita Supreme",
        description: "San Marzano tomatoes, buffalo mozzarella, fresh basil, and extra virgin olive oil.",
        price: "14.50",
        image: heroPizza
    },
    {
        id: 3,
        title: "Truffle Mushroom",
        description: "Wild mushrooms, truffle cream base, thyme, and parmesan shavings.",
        price: "18.50",
        image: pizza1 // Reusing for layout demo
    },
];

const SignaturePizzas = () => {
    return (
        <section className="py-24 bg-white" id="menu">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-pizza-red font-bold tracking-widest uppercase text-sm">Our Menu</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-pizza-charcoal">Signature Creations</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Discover our chef's curated selection of handcrafted pizzas, baked to perfection in our wood-fired oven.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {pizzas.map((pizza, index) => (
                        <PizzaCard
                            key={pizza.id}
                            {...pizza}
                            delay={index * 0.2}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SignaturePizzas;
