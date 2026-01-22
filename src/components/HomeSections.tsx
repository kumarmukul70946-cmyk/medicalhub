"use client";

import React from "react";
import Link from "next/link";
import {
    Stethoscope,
    Pill,
    FlaskConical,
    FileText,
    Activity,
    Calendar,
    CheckCircle,
    ArrowRight
} from "lucide-react";

export default function HomeSections() {
    return (
        <div className="bg-white text-slate-900">
            {/* HERO */}
            <section id="home" className="relative overflow-hidden bg-white pt-24 lg:pt-36">
                {/* Background Accents */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-blue-50/50 blur-3xl" />
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-cyan-50/50 blur-3xl" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28 relative">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
                                <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                                Trusted by 50,000+ Patients
                            </div>

                            <h1 className="mt-8 text-5xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.1]">
                                Healthcare <span className="text-blue-600 underline decoration-blue-100 underline-offset-8">Perfected</span> for You
                            </h1>

                            <p className="mt-8 text-xl text-slate-500 leading-relaxed font-medium">
                                Book world-class specialists, manage your health data, and get instant consultations with India&apos;s most modern medical platform.
                            </p>

                            {/* CTA Buttons */}
                            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                <Link href="/book-appointment">
                                    <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                                        Book Appointment
                                        <ArrowRight size={20} />
                                    </button>
                                </Link>

                                <Link href="#services">
                                    <button className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-slate-200 bg-white text-slate-700 font-bold text-lg hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50/30 transition-all">
                                        Our Services
                                    </button>
                                </Link>
                            </div>

                            {/* Trust Badges */}
                            <div className="mt-12 flex items-center gap-8 grayscale opacity-60">
                                <div className="flex items-center gap-2 font-bold text-slate-400">
                                    <CheckCircle size={20} /> ISO Certified
                                </div>
                                <div className="flex items-center gap-2 font-bold text-slate-400">
                                    <CheckCircle size={20} /> Secure Platform
                                </div>
                            </div>
                        </div>

                        {/* Right Card - Quick Booking */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-600/5 rounded-3xl blur-2xl transform rotate-3 scale-105" />
                            <div className="rounded-[2.5rem] bg-white border border-slate-200 shadow-2xl p-8 sm:p-10 relative">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <h3 className="text-2xl font-black text-slate-900">
                                            Smart Booking
                                        </h3>
                                        <p className="text-slate-500 font-semibold text-sm mt-1">
                                            Choose your slot in seconds
                                        </p>
                                    </div>
                                    <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                                        <Calendar size={24} />
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">
                                            Department
                                        </label>
                                        <select
                                            title="Select Medical Department"
                                            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-5 py-4 text-sm font-bold text-slate-700 outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-600 transition-all"
                                        >
                                            <option>General Physician</option>
                                            <option>Cardiology</option>
                                            <option>Pediatrics</option>
                                            <option>Neurology</option>
                                        </select>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">
                                                Date
                                            </label>
                                            <input
                                                title="Select Appointment Date"
                                                type="date"
                                                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-5 py-4 text-sm font-bold text-slate-700 outline-none focus:ring-4 focus:ring-blue-50 transition-all cursor-pointer"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">
                                                Time Slot
                                            </label>
                                            <select
                                                title="Select Time Slot"
                                                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-5 py-4 text-sm font-bold text-slate-700 outline-none focus:ring-4 focus:ring-blue-50 transition-all"
                                            >
                                                <option>Morning</option>
                                                <option>Afternoon</option>
                                                <option>Evening</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button className="w-full mt-4 px-8 py-5 rounded-2xl bg-slate-900 text-white font-black text-lg shadow-xl hover:bg-slate-800 hover:-translate-y-1 transition-all active:scale-95">
                                        Search Best Doctors
                                    </button>

                                    <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-bold">
                                        <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                        Available for 24/7 video consultation
                                    </div>
                                </div>
                            </div>

                            {/* Floating Review Card */}
                            <div className="absolute -bottom-6 -right-6 md:-right-10 bg-white border border-slate-100 rounded-3xl p-4 shadow-xl max-w-[200px] animate-bounce-slow">
                                <div className="flex gap-1 text-yellow-500 mb-2">
                                    {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                                </div>
                                <p className="text-xs font-bold text-slate-900 tracking-tight">&quot;The fastest medical app I&apos;ve ever used!&quot;</p>
                                <p className="text-[10px] text-slate-400 mt-1">— Sameer K.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section id="services" className="py-24 bg-slate-50/50 border-y border-slate-100 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
                        <div className="max-w-xl text-center md:text-left">
                            <p className="text-sm font-black text-blue-600 uppercase tracking-widest">
                                Comprehensive Care
                            </p>
                            <h2 className="mt-4 text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
                                Everything Your Family <br /> Needs in One Place
                            </h2>
                        </div>
                        <Link href="/services">
                            <button className="px-8 py-4 rounded-2xl bg-white border-2 border-slate-200 text-slate-700 font-bold hover:border-blue-600 hover:text-blue-600 transition-all">
                                Explore All Services
                            </button>
                        </Link>
                    </div>

                    <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceItems.map((item, idx) => (
                            <Link
                                href={`/services/${item.slug}`}
                                key={idx}
                                className="group rounded-[2rem] bg-white border border-slate-100 p-8 shadow-sm hover:shadow-2xl hover:border-blue-100 hover:-translate-y-2 transition-all cursor-pointer block"
                            >
                                <div className="h-16 w-16 rounded-[1.25rem] bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                                    <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                                        {item.icon}
                                    </div>
                                </div>

                                <h3 className="mt-8 text-xl font-black text-slate-900 tracking-tight">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-slate-500 font-medium leading-relaxed">
                                    {item.desc}
                                </p>

                                <div className="mt-8 pt-8 border-t border-slate-50 flex items-center justify-between">
                                    <span className="text-blue-600 font-black text-sm group-hover:mr-2 transition-all">Start Now</span>
                                    <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        <ArrowRight size={16} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

const serviceItems = [
    {
        slug: "specialized",
        icon: <Stethoscope size={30} />,
        title: "Specialist Care",
        desc: "Direct access to top specialists across cardiology, neurology, and 40+ medical fields.",
    },
    {
        slug: "pharmacy",
        icon: <Pill size={30} />,
        title: "Home Pharmacy",
        desc: "Verified prescription medicines delivered within 2 hours to your doorstep with real-time tracking.",
    },
    {
        slug: "lab-tests",
        icon: <FlaskConical size={30} />,
        title: "Instant Lab Tests",
        desc: "Sample collection from your home. Get digital reports synced directly to your health records.",
    },
    {
        slug: "health-wallet",
        icon: <FileText size={30} />,
        title: "Health Wallet",
        desc: "A secure digital vault for all your family's prescriptions and medical history.",
    },
    {
        slug: "emergency",
        icon: <Activity size={30} />,
        title: "Emergency Care",
        desc: "One-tap emergency ambulance support and 24/7 critical medical guidance.",
    },
    {
        slug: "follow-ups",
        icon: <Calendar size={30} />,
        title: "Smart Follow-ups",
        desc: "Automated reminders for your checkups and smart health goal tracking.",
    },
];
