"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { User, Mail, Lock, ArrowRight, Loader2, CheckCircle2, ShieldPlus } from "lucide-react";

export default function RegisterPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            router.push('/login');
        }, 1500);
    };

    return (
        <main className="bg-slate-50 min-h-screen selection:bg-blue-100">
            <Navbar />

            <section className="pt-32 pb-24 flex items-center justify-center px-4 relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
                    <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-50" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-2xl relative z-10"
                >
                    <div className="bg-white rounded-[3rem] border-2 border-slate-100 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Form Side */}
                            <div>
                                <div className="mb-10 text-center md:text-left">
                                    <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Join MedicalHub</h1>
                                    <p className="text-slate-500 font-bold">Start your journey to better health.</p>
                                </div>

                                <form onSubmit={handleRegister} className="space-y-5">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">First Name</label>
                                            <input type="text" placeholder="John" required className="w-full bg-slate-50 border-2 border-transparent rounded-2xl py-3 px-5 font-bold text-slate-700 outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all text-sm" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Last Name</label>
                                            <input type="text" placeholder="Doe" required className="w-full bg-slate-50 border-2 border-transparent rounded-2xl py-3 px-5 font-bold text-slate-700 outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all text-sm" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                                        <div className="relative group">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                                            <input type="email" placeholder="john@example.com" required className="w-full bg-slate-50 border-2 border-transparent rounded-2xl py-3 pl-12 pr-5 font-bold text-slate-700 outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all text-sm" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Secure Password</label>
                                        <div className="relative group">
                                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                                            <input type="password" placeholder="Min 8 characters" required className="w-full bg-slate-50 border-2 border-transparent rounded-2xl py-3 pl-12 pr-5 font-bold text-slate-700 outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all text-sm" />
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full py-4 rounded-2xl bg-blue-600 text-white font-black text-lg shadow-xl shadow-blue-100 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                                        >
                                            {isLoading ? (
                                                <Loader2 className="animate-spin" size={24} />
                                            ) : (
                                                <>
                                                    Create Account
                                                    <ArrowRight size={22} />
                                                </>
                                            )}
                                        </button>
                                    </div>

                                    <p className="text-center text-sm font-bold text-slate-500">
                                        Already a member? <Link href="/login" className="text-blue-600 hover:underline">Log in</Link>
                                    </p>
                                </form>
                            </div>

                            {/* Features Side */}
                            <div className="hidden md:flex flex-col justify-center bg-blue-600 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

                                <div className="space-y-10 relative">
                                    <div className="flex gap-5">
                                        <div className="h-12 w-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-md">
                                            <ShieldPlus size={24} strokeWidth={2.5} />
                                        </div>
                                        <div>
                                            <h3 className="font-black text-xl mb-1">Health Shield</h3>
                                            <p className="text-blue-50 font-bold text-sm">Automated digital records and secure medical history.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-5">
                                        <div className="h-12 w-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-md">
                                            <CheckCircle2 size={24} strokeWidth={2.5} />
                                        </div>
                                        <div>
                                            <h3 className="font-black text-xl mb-1">Instant Booking</h3>
                                            <p className="text-blue-50 font-bold text-sm">Skip the line with direct appointment management.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-5">
                                        <div className="h-12 w-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-md">
                                            <User size={24} strokeWidth={2.5} />
                                        </div>
                                        <div>
                                            <h3 className="font-black text-xl mb-1">Expert Network</h3>
                                            <p className="text-blue-50 font-bold text-sm">Consult with top-rated board certified specialists.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
