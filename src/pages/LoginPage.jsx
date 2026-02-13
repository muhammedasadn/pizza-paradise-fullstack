import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, ArrowRight, Pizza } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login delay
        setTimeout(() => {
            setIsLoading(false);
            alert("Login successful! (Demo Only)");
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-pizza-cream flex items-center justify-center px-6 py-24">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden relative">

                {/* Decorative Top */}
                <div className="h-32 bg-pizza-charcoal relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pizza-red via-transparent to-transparent" />
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", duration: 0.8 }}
                        className="w-16 h-16 bg-pizza-red rounded-full flex items-center justify-center text-white shadow-lg z-10"
                    >
                        <User size={32} />
                    </motion.div>
                </div>

                <div className="p-8 pb-12">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-pizza-charcoal">Welcome Back</h2>
                        <p className="text-gray-500">Sign in to access your rewards.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pizza-red/20 focus:border-pizza-red transition-all"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-sm font-bold text-gray-700">Password</label>
                                <a href="#" className="text-xs text-pizza-red font-semibold hover:underline">Forgot?</a>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="password"
                                    required
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pizza-red/20 focus:border-pizza-red transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <Button className="w-full justify-center" variant="primary" disabled={isLoading}>
                            {isLoading ? (
                                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <>Sign In <ArrowRight size={20} /></>
                            )}
                        </Button>
                    </form>

                    <div className="mt-8 text-center text-sm text-gray-500">
                        Don't have an account? <Link to="/signup" className="text-pizza-red font-bold hover:underline">Sign Up</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LoginPage;
