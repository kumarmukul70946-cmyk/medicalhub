"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    Activity, TrendingUp, Users, Video,
    FileText, Star, ArrowUpRight, Loader2,
    Calendar, Clock, ShieldCheck, PieChart
} from "lucide-react";
import { motion } from "framer-motion";

interface RecentSession {
    doctorName: string;
    patientName: string;
    startTime: string;
    status: string;
}

interface StatsData {
    activeSessions: number;
    totalDoctors: number;
    totalPrescriptions: number;
    avgRating: string;
    recentSessions: RecentSession[];
}

export default function AdminDashboard() {
    const [stats, setStats] = useState<StatsData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/analytics")
            .then(res => res.json())
            .then((data: StatsData) => {
                setStats(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading || !stats) return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <Loader2 className="animate-spin text-blue-600" size={48} />
        </div>
    );

    const cards = [
        { label: "Active Sessions", value: stats.activeSessions, icon: Video, color: "text-rose-600", bg: "bg-rose-50" },
        { label: "Total Doctors", value: stats.totalDoctors, icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
        { label: "Prescriptions", value: stats.totalPrescriptions, icon: FileText, color: "text-indigo-600", bg: "bg-indigo-50" },
        { label: "Average Rating", value: stats.avgRating, icon: Star, color: "text-yellow-600", bg: "bg-yellow-50" },
    ];

    return (
        <main className="bg-slate-50 min-h-screen">
            <Navbar />

            <section className="pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="h-10 w-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                                    <PieChart size={20} />
                                </div>
                                <h1 className="text-3xl font-black text-slate-900 tracking-tight">Analytics Dashboard</h1>
                            </div>
                            <p className="text-slate-500 font-bold">Comprehensive overview of MedicalHub operations.</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="px-6 py-3 bg-white border-2 border-slate-100 rounded-2xl font-black text-sm text-slate-600 flex items-center gap-2 hover:border-blue-100 transition-all">
                                <Calendar size={18} /> Export Data
                            </button>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {cards.map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-sm relative overflow-hidden"
                            >
                                <div className={`h-12 w-12 ${card.bg} ${card.color} rounded-2xl flex items-center justify-center mb-6`}>
                                    <card.icon size={24} />
                                </div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{card.label}</p>
                                <div className="flex items-end justify-between">
                                    <h3 className="text-4xl font-black text-slate-900 leading-none">{card.value}</h3>
                                    <div className="flex items-center gap-1 text-green-600 font-black text-xs">
                                        <TrendingUp size={14} /> +12%
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-12 gap-10">
                        {/* Main Chart Simulator Area */}
                        <div className="lg:col-span-8 space-y-10">
                            <div className="bg-white rounded-[3rem] border-2 border-slate-100 p-8 sm:p-12 shadow-sm">
                                <div className="flex items-center justify-between mb-10">
                                    <div>
                                        <h3 className="text-2xl font-black text-slate-900">Consultation Trends</h3>
                                        <p className="text-slate-400 font-bold text-sm">Monthly overview of telemedicine sessions</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold">
                                            <div className="h-2 w-2 rounded-full bg-blue-600" /> Video
                                        </div>
                                        <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 text-slate-400 rounded-lg text-xs font-bold">
                                            <div className="h-2 w-2 rounded-full bg-slate-400" /> Audio
                                        </div>
                                    </div>
                                </div>

                                {/* Simulated Chart Bars */}
                                <div className="h-64 flex items-end justify-between gap-4 pt-4 border-b-2 border-slate-50 mb-4">
                                    {[60, 40, 80, 50, 90, 70, 100, 85, 65, 75, 45, 95].map((h, i) => (
                                        <div key={i} className="group relative flex-1">
                                            <motion.div
                                                initial={{ height: 0 }}
                                                animate={{ height: `${h}%` }}
                                                className="w-full bg-slate-50 hover:bg-blue-600 rounded-t-xl transition-all duration-500 cursor-pointer"
                                            />
                                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                                {h * 2}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">
                                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                                    <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                                </div>
                            </div>

                            {/* Recent Activity */}
                            <div className="bg-white rounded-[2.5rem] border-2 border-slate-100 p-8 shadow-sm">
                                <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
                                    <Activity className="text-blue-600" size={24} /> Real-time Activity Log
                                </h3>
                                <div className="space-y-4">
                                    {stats.recentSessions.map((session, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-transparent hover:border-slate-100 transition-all">
                                            <div className="flex items-center gap-4">
                                                <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
                                                    <Video size={18} />
                                                </div>
                                                <div>
                                                    <p className="font-black text-slate-800 text-sm">{session.doctorName}</p>
                                                    <p className="text-[10px] font-bold text-slate-400 tracking-wider">WITH {session.patientName.toUpperCase()}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="text-right hidden sm:block">
                                                    <p className="text-[10px] font-black text-slate-400 uppercase">{new Date(session.startTime).toLocaleTimeString()}</p>
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase">{session.status}</p>
                                                </div>
                                                <ArrowUpRight className="text-slate-300" size={20} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="lg:col-span-4 space-y-10">
                            {/* Distribution Card */}
                            <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 h-40 w-40 bg-blue-600 rounded-full blur-3xl opacity-20 -mr-10 -mt-10" />
                                <h3 className="text-xl font-black mb-8 relative z-10 flex items-center gap-3">
                                    <ShieldCheck size={24} className="text-blue-500" /> Platform Health
                                </h3>
                                <div className="space-y-6 relative z-10">
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Uptime</p>
                                            <p className="text-xs font-black text-green-500">99.9%</p>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full w-[99%] bg-green-500" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest">API Latency</p>
                                            <p className="text-xs font-black text-blue-400">42ms</p>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full w-[15%] bg-blue-400" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Storage Used</p>
                                            <p className="text-xs font-black text-indigo-400">8.2 GB</p>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full w-[45%] bg-indigo-400" />
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full mt-10 py-4 bg-white/10 hover:bg-white/20 text-white font-black rounded-2xl transition-all border border-white/5 relative z-10">
                                    System Details
                                </button>
                            </div>

                            {/* Notifications / Alerts */}
                            <div className="bg-white rounded-[2.5rem] border-2 border-slate-100 p-8 shadow-sm">
                                <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
                                    <Clock className="text-orange-500" size={24} /> Pending Actions
                                </h3>
                                <p className="text-slate-400 font-bold text-sm mb-6">System tasks requiring approval.</p>
                                <div className="space-y-4">
                                    <div className="p-4 rounded-2xl bg-orange-50 border border-orange-100">
                                        <p className="text-xs font-black text-orange-600 uppercase tracking-widest mb-1">Doctor Verification</p>
                                        <p className="text-sm font-bold text-slate-700">3 new applications pending review</p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Inventory Alert</p>
                                        <p className="text-sm font-bold text-slate-700">Consumables running low in Wing B</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
