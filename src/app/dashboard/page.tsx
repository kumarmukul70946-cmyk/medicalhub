"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    Activity,
    Settings,
    LogOut,
    Bell,
    Sparkles,
    Heart,
    Thermometer,
    ArrowRight,
    Clock,
    Plus,
    FileText,
    ShieldCheck,
    Loader2
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { Suspense } from "react";

function DashboardContent() {

    const patient = {
        name: "Mukul Anand",
        id: "PAT-2026-X8",
        age: 24,
        bloodGroup: "O+",
        email: "mukul@gmail.com",
        phone: "+91 9102774718"
    };

    const appointments = [
        { doctor: "Dr. Sarah Johnson", dept: "Cardiology", date: "Jan 24, 2026", time: "10:30 AM", status: "Confirmed", type: "First Visit" },
        { doctor: "Dr. Michael Chen", dept: "Neurology", date: "Feb 02, 2026", time: "02:30 PM", status: "Pending", type: "Follow-up" }
    ];

    const records = [
        { title: "Blood Test Results", date: "Jan 10, 2026", type: "PDF", size: "1.2 MB" },
        { title: "X-Ray Report", date: "Dec 15, 2025", type: "JPEG", size: "4.5 MB" }
    ];

    return (
        <main className="bg-slate-50 min-h-screen selection:bg-blue-100">
            <Navbar />

            <section className="pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Upper Header Section */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-3 mb-4"
                            >
                                <div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                                    <Sparkles size={20} />
                                </div>
                                <h1 className="text-3xl font-black text-slate-900 tracking-tight">Patient Portal</h1>
                            </motion.div>
                            <p className="text-slate-500 font-bold text-lg">
                                Welcome back, <span className="text-blue-600 font-black">{patient.name}</span>. Here is your medical summary.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <button title="Notifications" className="h-14 w-14 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-100 transition-all shadow-sm">
                                <Bell size={24} />
                            </button>
                            <button title="Global Settings" className="h-14 w-14 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-100 transition-all shadow-sm">
                                <Settings size={24} />
                            </button>
                            <Link href="/">
                                <button className="h-14 px-6 bg-slate-900 text-white rounded-2xl font-black flex items-center gap-3 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                                    <LogOut size={20} />
                                    <span className="hidden sm:inline">Logout</span>
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-10">

                        {/* Left Sidebar: Patient Info & Vitals */}
                        <div className="lg:col-span-4 space-y-10">

                            {/* Detailed Profile Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white rounded-[2.5rem] border-2 border-slate-100 p-8 shadow-sm relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 h-40 w-40 bg-blue-50 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-blue-100 transition-colors" />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-6 mb-8">
                                        <div className="h-20 w-20 bg-slate-900 text-white rounded-[2rem] flex items-center justify-center text-3xl font-black shadow-2xl">
                                            {patient.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-black text-slate-900">{patient.name}</h2>
                                            <div className="mt-1 px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-widest rounded-lg inline-block">
                                                Active Account
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Blood Type</p>
                                                <p className="text-lg font-black text-slate-800">{patient.bloodGroup}</p>
                                            </div>
                                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Age</p>
                                                <p className="text-lg font-black text-slate-800">{patient.age} Yrs</p>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4 text-sm font-bold text-slate-500">
                                                <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center uppercase">@</div>
                                                {patient.email}
                                            </div>
                                            <div className="flex items-center gap-4 text-sm font-bold text-slate-500">
                                                <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center uppercase">#</div>
                                                {patient.phone}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Vitals Section */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-black text-slate-900 flex items-center gap-3 ml-2">
                                    <Activity className="text-blue-600" size={24} /> Live Bio-Stats
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-6 bg-slate-900 text-white rounded-[2rem] shadow-xl">
                                        <Heart className="text-red-500 mb-4 animate-pulse" size={32} fill="currentColor" />
                                        <p className="text-xs font-black text-white/40 uppercase tracking-widest mb-1">Heart Rate</p>
                                        <p className="text-3xl font-black">72 <span className="text-sm font-bold text-white/40">bpm</span></p>
                                    </div>
                                    <div className="p-6 bg-white border-2 border-slate-100 rounded-[2rem] shadow-sm">
                                        <Thermometer className="text-orange-500 mb-4" size={32} />
                                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Body Temp</p>
                                        <p className="text-3xl font-black text-slate-900">98.6 <span className="text-sm font-bold text-slate-400">°F</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content Area: Appointments & Records */}
                        <div className="lg:col-span-8 space-y-10">

                            {/* Appointments Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white rounded-[3rem] border-2 border-slate-100 p-8 sm:p-12 shadow-sm"
                            >
                                <div className="flex items-center justify-between mb-10">
                                    <div>
                                        <h3 className="text-2xl font-black text-slate-900 tracking-tight">Upcoming Consultations</h3>
                                        <p className="text-slate-400 font-bold text-sm">You have {appointments.length} appointments scheduled.</p>
                                    </div>
                                    <Link href="/book-appointment">
                                        <button className="h-12 w-12 sm:h-auto sm:px-6 bg-blue-600 text-white rounded-2xl font-black text-sm flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">
                                            <Plus size={20} strokeWidth={3} />
                                            <span className="hidden sm:inline">Book New</span>
                                        </button>
                                    </Link>
                                </div>

                                <div className="space-y-4">
                                    {appointments.map((appt, i) => (
                                        <div key={i} className="group flex flex-col sm:flex-row sm:items-center gap-6 p-6 rounded-[2rem] border-2 border-slate-50 hover:bg-slate-50 transition-all">
                                            <div className="h-16 w-16 bg-white border border-slate-100 rounded-2xl flex flex-col items-center justify-center shadow-sm shrink-0">
                                                <p className="text-[10px] font-black text-slate-400 uppercase leading-none mb-1">{appt.date.split(' ')[0]}</p>
                                                <p className="text-xl font-black text-slate-900 leading-none">{appt.date.split(' ')[1].replace(',', '')}</p>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h4 className="font-black text-slate-900 text-lg">{appt.doctor}</h4>
                                                    <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-black uppercase rounded-md">{appt.type}</span>
                                                </div>
                                                <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-slate-400">
                                                    <span className="flex items-center gap-1.5"><Activity size={14} className="text-blue-500" /> {appt.dept}</span>
                                                    <span className="flex items-center gap-1.5"><Clock size={14} /> {appt.time}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest ${appt.status === 'Confirmed' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
                                                    }`}>
                                                    {appt.status}
                                                </div>
                                                <button title="View Detail" className="h-10 w-10 flex items-center justify-center rounded-xl text-slate-300 hover:text-slate-900 transition-colors">
                                                    <ArrowRight size={20} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Medical Records Grid */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white rounded-[2.5rem] border-2 border-slate-100 p-8 shadow-sm">
                                    <div className="flex items-center justify-between mb-8">
                                        <h3 className="text-xl font-black text-slate-900 flex items-center gap-3">
                                            <FileText className="text-indigo-600" size={24} /> Lab Reports
                                        </h3>
                                        <button className="text-blue-600 font-black text-xs uppercase tracking-widest hover:underline">View All</button>
                                    </div>
                                    <div className="space-y-4">
                                        {records.map((rec, i) => (
                                            <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-transparent hover:border-slate-100 transition-all cursor-pointer">
                                                <div className="flex items-center gap-4">
                                                    <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center text-indigo-500 shadow-sm font-black text-[10px] uppercase">
                                                        {rec.type}
                                                    </div>
                                                    <div>
                                                        <p className="font-black text-slate-800 text-sm">{rec.title}</p>
                                                        <p className="text-[10px] font-bold text-slate-400 tracking-wider">RECEIVED {rec.date.toUpperCase()}</p>
                                                    </div>
                                                </div>
                                                <ArrowRight className="text-slate-300" size={16} />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 h-40 w-40 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10" />
                                    <h3 className="text-xl font-black mb-6 flex items-center gap-3 relative z-10">
                                        <ShieldCheck size={24} /> Health Shield™
                                    </h3>
                                    <p className="text-blue-100 font-bold leading-relaxed mb-8 relative z-10">
                                        Your premium coverage expires in <span className="text-white font-black">240 days</span>. All your medical data is end-to-end encrypted.
                                    </p>
                                    <button className="w-full py-4 bg-white text-blue-600 font-black rounded-2xl hover:bg-blue-50 transition-all shadow-xl shadow-blue-700/20 relative z-10">
                                        Manage Subscription
                                    </button>
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

export default function Dashboard() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <Loader2 className="animate-spin text-blue-600" size={48} />
            </div>
        }>
            <DashboardContent />
        </Suspense>
    );
}
