"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/#services" },
        { name: "Doctors", href: "/doctors" },
        { name: "Dashboard", href: "/dashboard" },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md border-b border-slate-200 py-3" : "bg-transparent py-5"
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="h-11 w-11 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200 group-hover:scale-105 transition-transform">
                            <span className="text-white font-bold text-xl">M</span>
                        </div>
                        <div className="leading-tight">
                            <p className="font-black text-slate-900 text-xl tracking-tight">
                                MedicalHub
                            </p>
                            <p className="text-[10px] uppercase font-bold text-blue-600 tracking-widest">
                                Care Simplified
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-10 text-sm font-bold text-slate-600">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="hover:text-blue-600 transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link href="/login" className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-bold hover:bg-slate-50 transition-all">
                            Login
                        </Link>
                        <Link href="/book-appointment">
                            <button className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 hover:-translate-y-0.5 transition-all flex items-center gap-2">
                                Book Now
                                <ArrowRight size={16} />
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-xl border border-slate-200 text-slate-700"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="block text-lg font-bold text-slate-700 hover:text-blue-600"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 flex flex-col gap-3">
                                <Link href="/login" onClick={() => setIsOpen(false)}>
                                    <button className="w-full py-4 rounded-2xl border border-slate-200 text-slate-700 font-bold">
                                        Login
                                    </button>
                                </Link>
                                <Link href="/book-appointment" onClick={() => setIsOpen(false)}>
                                    <button className="w-full py-4 rounded-2xl bg-blue-600 text-white font-bold">
                                        Book Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
