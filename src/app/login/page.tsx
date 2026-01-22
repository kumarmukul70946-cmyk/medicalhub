"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Lock, Mail, ArrowRight, Loader2, ShieldCheck, Sparkles } from "lucide-react";

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            router.push('/dashboard');
        }, 1500);
    };

    return (
        <main className="bg-slate-50 min-h-screen selection:bg-blue-100">
            <Navbar />

            <section className="pt-32 pb-24 flex items-center justify-center px-4 relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
                    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-50" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md relative z-10"
                >
                    <div className="bg-white rounded-[2.5rem] border-2 border-slate-100 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
                        {/* Header */}
                        <div className="text-center mb-10">
                            <motion.div
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                className="h-20 w-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-50"
                            >
                                <Lock size={32} strokeWidth={2.5} />
                            </motion.div>
                            <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Welcome Back</h1>
                            <p className="text-slate-500 font-bold">Secure access to your medical portal</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                                <div className="relative group">
                                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                                    <input
                                        type="email"
                                        placeholder="mukul@gmail.com"
                                        required
                                        className="w-full bg-slate-50 border-2 border-transparent rounded-2xl py-4 pl-14 pr-6 font-bold text-slate-700 outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center ml-1">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Password</label>
                                    <Link href="#" className="text-[10px] font-black text-blue-600 uppercase tracking-widest hover:underline">Forgot?</Link>
                                </div>
                                <div className="relative group">
                                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        required
                                        className="w-full bg-slate-50 border-2 border-transparent rounded-2xl py-4 pl-14 pr-6 font-bold text-slate-700 outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full py-5 rounded-2xl bg-blue-600 text-white font-black text-lg shadow-xl shadow-blue-100 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="animate-spin" size={24} />
                                            Verifying Credentials...
                                        </>
                                    ) : (
                                        <>
                                            Sign In to Portal
                                            <ArrowRight size={22} />
                                        </>
                                    )}
                                </button>
                            </div>

                            <div className="text-center">
                                <p className="text-sm font-bold text-slate-500">
                                    New patient? <Link href="/register" className="text-blue-600 hover:underline">Create an account</Link>
                                </p>
                            </div>
                        </form>

                        {/* Security Footer */}
                        <div className="mt-10 pt-8 border-t border-slate-50 flex items-center justify-center gap-8 opacity-40 grayscale">
                            <div className="flex items-center gap-2">
                                <ShieldCheck size={16} />
                                <span className="text-[10px] font-black uppercase tracking-tighter">SSL Secure</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Sparkles size={16} />
                                <span className="text-[10px] font-black uppercase tracking-tighter">Encrypted</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
