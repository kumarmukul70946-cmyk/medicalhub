"use client";

import React from "react";
import Link from "next/link";
import { Twitter, Linkedin, Github, Shield, Lock, CreditCard } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="h-11 w-11 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-100">
                                <span className="text-white font-black text-lg">M</span>
                            </div>
                            <div>
                                <p className="text-lg font-black text-slate-900 tracking-tight">
                                    MedicalHub
                                </p>
                                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest leading-none">
                                    Care Simplified
                                </p>
                            </div>
                        </div>

                        <p className="text-sm font-semibold text-slate-500 leading-relaxed">
                            Book world-class specialists, manage your health data, and access premium medical services with a clean, secure experience.
                        </p>

                        <div className="flex gap-3">
                            <SocialIcon icon={<Twitter size={18} />} />
                            <SocialIcon icon={<Linkedin size={18} />} />
                            <SocialIcon icon={<Github size={18} />} />
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8">Product</h4>
                        <ul className="space-y-4 text-sm font-bold text-slate-500">
                            <li><Link href="#services" className="hover:text-blue-600 transition-colors">Specialties</Link></li>
                            <li><Link href="/doctors" className="hover:text-blue-600 transition-colors">Find Doctors</Link></li>
                            <li><Link href="/book-appointment" className="hover:text-blue-600 transition-colors">Book Appointment</Link></li>
                            <li><Link href="/dashboard" className="hover:text-blue-600 transition-colors">Personal Health Vault</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8">Support</h4>
                        <ul className="space-y-4 text-sm font-bold text-slate-500">
                            <li><Link href="#help" className="hover:text-blue-600 transition-colors">Help Center</Link></li>
                            <li><Link href="#privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
                            <li><Link href="#contact" className="hover:text-blue-600 transition-colors">Contact Support</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter / App */}
                    <div>
                        <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8">Stay Secure</h4>
                        <p className="text-sm font-semibold text-slate-500 mb-6">Learn more about our data protection standards.</p>

                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                                <Shield size={20} className="text-blue-600" />
                                <span className="text-xs font-black text-slate-700 uppercase tracking-wide">HIPAA Compliant</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                                <Lock size={20} className="text-blue-600" />
                                <span className="text-xs font-black text-slate-700 uppercase tracking-wide">SSL Secure</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        © {new Date().getFullYear()} MedicalHub Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 grayscale opacity-40">
                        <CreditCard size={20} />
                        <div className="h-4 w-px bg-slate-200" />
                        <p className="text-[10px] font-black tracking-widest uppercase">Verified Secure Payment Gateway</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
    return (
        <button className="h-10 w-10 rounded-xl border-2 border-slate-50 bg-white shadow-sm flex items-center justify-center text-slate-400 hover:border-blue-600 hover:text-blue-600 hover:-translate-y-1 transition-all">
            {icon}
        </button>
    );
}
