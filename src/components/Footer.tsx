"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-900/20">
                                <span className="text-white font-bold text-lg">M</span>
                            </div>
                            <span className="font-black text-white text-xl tracking-tight">MedicalHub</span>
                        </Link>
                        <p className="leading-relaxed text-sm">
                            Providing exceptional healthcare services with compassion and cutting-edge technology. Leading India's digital medical revolution.
                        </p>
                        <div className="flex gap-4">
                            <button className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                                <Twitter size={18} />
                            </button>
                            <button className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                                <Instagram size={18} />
                            </button>
                            <button className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                                <Linkedin size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-sm font-semibold">
                            <li><Link href="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
                            <li><Link href="/doctors" className="hover:text-blue-500 transition-colors">Find Doctors</Link></li>
                            <li><Link href="/book-appointment" className="hover:text-blue-500 transition-colors">Book Slot</Link></li>
                            <li><Link href="/dashboard" className="hover:text-blue-500 transition-colors">Patient Portal</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Specialties</h4>
                        <ul className="space-y-4 text-sm font-semibold">
                            <li className="hover:text-blue-500 cursor-pointer transition-colors">Cardiology</li>
                            <li className="hover:text-blue-500 cursor-pointer transition-colors">Neurology</li>
                            <li className="hover:text-blue-500 cursor-pointer transition-colors">Gastroenterology</li>
                            <li className="hover:text-blue-500 cursor-pointer transition-colors">Pediatrics</li>
                        </ul>
                    </div>

                    {/* Contact info */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm font-semibold">
                            <li className="flex gap-3">
                                <MapPin size={20} className="text-blue-500 shrink-0" />
                                <span>Vadodara, Gujarat, India</span>
                            </li>
                            <li className="flex gap-3">
                                <Phone size={20} className="text-blue-500 shrink-0" />
                                <span>+91 9102774718</span>
                            </li>
                            <li className="flex gap-3">
                                <Mail size={20} className="text-blue-500 shrink-0" />
                                <span>support@medicalhub.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-slate-800 text-center text-xs font-bold uppercase tracking-widest">
                    © 2026 MedicalHub Healthcare. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
