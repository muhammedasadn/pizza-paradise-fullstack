import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Button from '../components/ui/Button';

const ContactPage = () => {
    return (
        <div className="pt-24 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center bg-pizza-charcoal overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
                />
                <div className="relative z-20 text-center text-white px-4">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl font-bold font-sans tracking-tighter mb-4"
                    >
                        GET IN <span className="text-pizza-red">TOUCH</span>
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-200 max-w-2xl mx-auto"
                    >
                        We'd love to hear from you. Reach out with questions, feedback, or just to say hello.
                    </motion.p>
                </div>
            </section>

            <div className="container mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold font-sans tracking-tight mb-8">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-600">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-pizza-red focus:ring-1 focus:ring-pizza-red transition-all"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-600">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-pizza-red focus:ring-1 focus:ring-pizza-red transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-600">Subject</label>
                                <input
                                    type="text"
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-pizza-red focus:ring-1 focus:ring-pizza-red transition-all"
                                    placeholder="How can we help?"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-600">Message</label>
                                <textarea
                                    rows="6"
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-pizza-red focus:ring-1 focus:ring-pizza-red transition-all resize-none"
                                    placeholder="Write your message here..."
                                ></textarea>
                            </div>
                            <Button variant="primary" className="!py-4 w-full justify-center text-lg">
                                Send Message <Send size={20} className="ml-2" />
                            </Button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-12"
                    >
                        <div>
                            <h2 className="text-3xl font-bold font-sans tracking-tight mb-8">Contact Information</h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Have a question about our menu? Want to book a private event? Or maybe you just want to tell us how much you love our pizza? We're all ears!
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-pizza-red/10 rounded-full flex items-center justify-center text-pizza-red shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                                        <p className="text-gray-600">123 Pizza Street, Suite 101<br />New York, NY 10001</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-pizza-red/10 rounded-full flex items-center justify-center text-pizza-red shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Call Us</h3>
                                        <p className="text-gray-600">+1 (555) 123-4567<br />Mon-Fri, 9am-6pm</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-pizza-red/10 rounded-full flex items-center justify-center text-pizza-red shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Email Us</h3>
                                        <p className="text-gray-600">hello@pizzaparadise.com<br />support@pizzaparadise.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="bg-pizza-charcoal text-white inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6">
                                <Clock size={16} /> Opening Hours
                            </h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                                    <span className="font-medium text-gray-900">Monday - Thursday</span>
                                    <span className="text-gray-600">11:00 AM - 10:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                                    <span className="font-medium text-gray-900">Friday - Saturday</span>
                                    <span className="text-gray-600">11:00 AM - 11:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-medium text-gray-900">Sunday</span>
                                    <span className="text-gray-600">12:00 PM - 9:30 PM</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-[400px] bg-gray-100 w-full relative group overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <MapPin size={48} className="text-pizza-red mx-auto mb-4 animate-bounce" />
                        <p className="font-bold text-gray-500">Interactive Map Integration</p>
                        <p className="text-sm text-gray-400">Coming soon</p>
                    </div>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-pizza-charcoal/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="primary">Get Directions</Button>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
