"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DoctorList from "@/components/DoctorList";
import { motion } from "framer-motion";
import { Sparkles, Activity } from "lucide-react";

export default function DoctorsPage() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            {/* Sub-Hero for Doctors Page */}
            <section className="pt-32 pb-16 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 h-96 w-96 bg-blue-100/50 rounded-full blur-[100px] pointer-events-none -mr-20 -mt-20" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-sm"
                    >
                        <Sparkles size={14} className="animate-pulse" /> Global Health Network
                    </motion.div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
                    >
                        World-Class <span className="text-blue-600 px-2 inline-block relative">
                            Medical
                            <motion.span
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="absolute bottom-2 left-0 h-3 bg-blue-600/10 -z-10"
                            />
                        </span> Experts
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-500 font-bold max-w-2xl mx-auto leading-relaxed"
                    >
                        Access top-tier board certified specialists with decades of experience. Your journey to wellness starts with the right hands.
                    </motion.p>

                    <div className="flex justify-center gap-12 mt-12 pb-4">
                        <div className="text-center">
                            <p className="text-3xl font-black text-slate-900 leading-none mb-2">500+</p>
                            <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Specialists</p>
                        </div>
                        <div className="w-px h-12 bg-slate-200" />
                        <div className="text-center">
                            <p className="text-3xl font-black text-slate-900 leading-none mb-2">15+</p>
                            <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Departments</p>
                        </div>
                        <div className="w-px h-12 bg-slate-200" />
                        <div className="text-center">
                            <p className="text-3xl font-black text-slate-900 leading-none mb-2">4.9/5</p>
                            <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Avg. Rating</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The main grid listing */}
            <div className="relative">
                {/* Decorative element */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-24 h-[500px] w-[500px] bg-indigo-50/50 rounded-full blur-[100px] pointer-events-none" />

                <DoctorList />
            </div>

            {/* Quick Consultation CTA */}
            <section className="py-24 bg-white border-t border-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-900 rounded-[3rem] p-10 sm:p-20 relative overflow-hidden shadow-2xl">
                        {/* Design elements */}
                        <div className="absolute top-0 right-0 h-64 w-64 bg-blue-600 rounded-full blur-[80px] opacity-20 -mr-20 -mt-20" />
                        <div className="absolute bottom-0 left-0 h-64 w-64 bg-indigo-600 rounded-full blur-[80px] opacity-20 -ml-20 -mb-20" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="max-w-xl text-center md:text-left">
                                <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-6 tracking-tight">
                                    Can&apos;t find the right specialist?
                                </h2>
                                <p className="text-slate-400 text-lg font-bold leading-relaxed mb-8">
                                    Talk to our patient care coordinator and we&apos;ll help you find the best match for your health needs.
                                </p>
                                <div className="flex items-center gap-6 justify-center md:justify-start">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="h-10 w-10 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-xs font-black text-blue-400">
                                                {String.fromCharCode(64 + i)}
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-sm font-black text-slate-500 uppercase tracking-widest">Active Coordinators</span>
                                </div>
                            </div>
                            <div>
                                <button className="px-10 py-5 rounded-[2rem] bg-blue-600 text-white font-black text-lg hover:bg-white hover:text-slate-900 hover:-translate-y-2 transition-all shadow-xl shadow-blue-500/20 active:translate-y-0">
                                    Speak with Experts
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
