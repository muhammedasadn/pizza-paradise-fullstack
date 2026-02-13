import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import Button from './ui/Button';

const Footer = () => {
    return (
        <footer className="bg-pizza-charcoal text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <a href="#" className="text-3xl font-bold font-sans tracking-tighter flex items-center gap-2">
                            <span className="text-pizza-red">PIZZA</span>
                            <span>PARADISE</span>
                        </a>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Crafting memories, one slice at a time. Join us for an unforgettable dining experience.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pizza-red transition-colors">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            {['Home', 'Menu', 'About Us', 'Contact', 'Reservations'].map(link => {
                                const path = link === 'Home' ? '/' :
                                    link === 'Menu' ? '/menu' :
                                        link === 'About Us' ? '/story' :
                                            link === 'Contact' ? '/contact' : '#';
                                return (
                                    <li key={link}><a href={path} className="hover:text-pizza-orange transition-colors">{link}</a></li>
                                );
                            })}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Contact</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-pizza-red mt-1 shrink-0" />
                                <span>123 Pizza Street, <br />New York, NY 10001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-pizza-red shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-pizza-red shrink-0" />
                                <span>hello@pizzaparadise.com</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Newsletter</h4>
                        <p className="text-gray-400 text-sm mb-4">Subscribe to get special offers and updates.</p>
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-pizza-red"
                            />
                            <Button variant="primary" className="w-full justify-center !py-3">Subscribe</Button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Pizza Paradise. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
