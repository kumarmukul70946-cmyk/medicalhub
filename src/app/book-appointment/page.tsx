"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import {
    Calendar,
    CheckCircle2,
    User,
    Stethoscope,
    Clock,
    MessageSquare,
    ArrowRight,
    Sparkles,
    Loader2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function AppointmentPage() {
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setSubmitted(true);
        }, 2000);
    };

    return (
        <main className="bg-slate-50 min-h-screen selection:bg-blue-100">
            <Navbar />

            <section className="pt-32 pb-24 relative overflow-hidden">
                {/* Visual Flair */}
                <div className="absolute top-0 right-0 -mr-40 h-[100vh] w-[100vh] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-widest mb-6"
                        >
                            <Sparkles size={14} /> Schedule your visit
                        </motion.div>
                        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                            Expert Care is Just a <span className="text-blue-600 italic">Click</span> Away
                        </h1>
                    </div>

                    <AnimatePresence mode="wait">
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white rounded-[3rem] border-2 border-slate-100 p-12 text-center shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-2 bg-green-500" />
                                <div className="h-24 w-24 bg-green-50 text-green-500 rounded-[2rem] flex items-center justify-center mx-auto mb-8">
                                    <CheckCircle2 size={56} strokeWidth={2.5} />
                                </div>
                                <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Booking Received!</h2>
                                <p className="text-slate-500 font-bold mb-10 text-lg max-w-md mx-auto">
                                    We&apos;ve added your request to our system. A medical coordinator will reach out to confirm your time slot shortly.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link href="/dashboard">
                                        <button className="px-8 py-4 rounded-2xl bg-slate-900 text-white font-black hover:bg-slate-800 transition-all">
                                            Go to Dashboard
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="px-8 py-4 rounded-2xl bg-blue-50 text-blue-600 font-black hover:bg-blue-100 transition-all"
                                    >
                                        Book Another
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.form
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                onSubmit={handleSubmit}
                                className="bg-white rounded-[3rem] border-2 border-slate-100 p-8 sm:p-14 shadow-2xl space-y-10"
                            >
                                {/* Form Sections Grid */}
                                <div className="grid md:grid-cols-2 gap-10">
                                    {/* Patient Side */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="h-10 w-10 text-blue-600 bg-blue-50 rounded-xl flex items-center justify-center">
                                                <User size={20} />
                                            </div>
                                            <h3 className="text-lg font-black text-slate-900">Personal Info</h3>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">First Name</label>
                                                    <input type="text" title="First Name" required className="w-full bg-slate-50 border-2 border-transparent rounded-2xl py-4 px-6 font-bold text-slate-700 focus:bg-white focus:border-blue-600 transition-all outline-none" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Last Name</label>
                                                    <input type="text" title="Last Name" required className="w-full bg-slate-50 border-2 border-transparent rounded-2xl py-4 px-6 font-bold text-slate-700 focus:bg-white focus:border-blue-600 transition-all outline-none" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                                                <input type="tel" title="Phone Number" placeholder="+91 00000 00000" required className="w-full bg-slate-50 border-2 border-transparent rounded-2xl py-4 px-6 font-bold text-slate-700 focus:bg-white focus:border-blue-600 transition-all outline-none" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Clinical Side */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="h-10 w-10 text-cyan-600 bg-cyan-50 rounded-xl flex items-center justify-center">
                                                <Stethoscope size={20} />
                                            </div>
                                            <h3 className="text-lg font-black text-slate-900">Medical Interest</h3>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Specialty</label>
                                                <select title="Specialty" className="w-full bg-slate-50 border-2 border-transparent rounded-2xl py-4 px-6 font-bold text-slate-700 focus:bg-white focus:border-blue-600 transition-all outline-none appearance-none">
                                                    <option>General Medicine</option>
                                                    <option>Cardiology</option>
                                                    <option>Neurology</option>
                                                    <option>Pediatrics</option>
                                                    <option>Orthopedics</option>
                                                </select>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Preferred Date</label>
                                                <div className="relative group">
                                                    <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                                                    <input type="date" title="Preferred Date" required className="w-full bg-slate-50 border-2 border-transparent rounded-2xl py-4 px-6 font-bold text-slate-700 focus:bg-white focus:border-blue-600 transition-all outline-none cursor-pointer" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2 pt-4">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="h-10 w-10 text-indigo-600 bg-indigo-50 rounded-xl flex items-center justify-center">
                                            <MessageSquare size={20} />
                                        </div>
                                        <h3 className="text-lg font-black text-slate-900">Health Context (Optional)</h3>
                                    </div>
                                    <textarea
                                        title="Health Context"
                                        rows={4}
                                        placeholder="Describe any symptoms or specific concerns..."
                                        className="w-full bg-slate-50 border-2 border-transparent rounded-[2rem] py-6 px-8 font-bold text-slate-700 focus:bg-white focus:border-blue-600 transition-all outline-none resize-none"
                                    />
                                </div>

                                <motion.div
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    className="pt-6"
                                >
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full py-6 rounded-[2rem] bg-blue-600 text-white font-black text-xl shadow-2xl shadow-blue-100 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-4 disabled:opacity-50"
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="animate-spin" size={28} />
                                                Processing Securely...
                                            </>
                                        ) : (
                                            <>
                                                Reserve Your Slot
                                                <ArrowRight size={24} />
                                            </>
                                        )}
                                    </button>
                                </motion.div>

                                <div className="flex items-center justify-center gap-10 text-slate-400 font-bold text-xs pt-4 border-t border-slate-50">
                                    <div className="flex items-center gap-2">
                                        <Clock size={16} className="text-blue-400" /> 24/7 Response
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-green-400" /> HIPAA Compliant
                                    </div>
                                </div>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            <Footer />
        </main>
    );
}
