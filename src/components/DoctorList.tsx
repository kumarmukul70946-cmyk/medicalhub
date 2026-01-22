"use client";

import React, { useMemo, useState } from "react";
import { Star, MapPin, Clock, Search, Filter, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function DoctorList() {
    const [query, setQuery] = useState("");
    const [specialization, setSpecialization] = useState("All");

    const doctors = [
        {
            id: 1,
            name: "Dr. Aditi Sharma",
            specialization: "General Physician",
            rating: 4.7,
            reviews: 320,
            experience: 8,
            fee: 399,
            location: "Ahmedabad",
            timing: "10 AM - 6 PM",
            available: true,
        },
        {
            id: 2,
            name: "Dr. Rahul Mehta",
            specialization: "Cardiologist",
            rating: 4.6,
            reviews: 210,
            experience: 12,
            fee: 699,
            location: "Vadodara",
            timing: "11 AM - 5 PM",
            available: false,
        },
        {
            id: 3,
            name: "Dr. Neha Patel",
            specialization: "Dermatologist",
            rating: 4.8,
            reviews: 180,
            experience: 7,
            fee: 499,
            location: "Surat",
            timing: "9 AM - 3 PM",
            available: true,
        },
        {
            id: 4,
            name: "Dr. Vikram Singh",
            specialization: "Neurologist",
            rating: 4.5,
            reviews: 145,
            experience: 10,
            fee: 899,
            location: "Rajkot",
            timing: "1 PM - 7 PM",
            available: true,
        },
        {
            id: 5,
            name: "Dr. Riya Kapoor",
            specialization: "Pediatrician",
            rating: 4.7,
            reviews: 275,
            experience: 9,
            fee: 599,
            location: "Mumbai",
            timing: "10 AM - 4 PM",
            available: false,
        },
        {
            id: 6,
            name: "Dr. Karan Joshi",
            specialization: "Orthopedic",
            rating: 4.4,
            reviews: 98,
            experience: 6,
            fee: 549,
            location: "Pune",
            timing: "12 PM - 8 PM",
            available: true,
        },
    ];

    const specializations = useMemo(() => {
        const set = new Set(doctors.map((d) => d.specialization));
        return ["All", ...Array.from(set)];
    }, []);

    const filteredDoctors = useMemo(() => {
        return doctors
            .filter((d) =>
                d.name.toLowerCase().includes(query.toLowerCase().trim())
            )
            .filter((d) => specialization === "All" || d.specialization === specialization);
    }, [query, specialization]);

    return (
        <section id="doctors" className="bg-white py-24 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
                    <div className="max-w-xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
                            <ShieldCheck size={14} /> Verified Professionals
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                            Meet Our Best <span className="text-blue-600">Specialists</span>
                        </h2>
                        <p className="mt-4 text-slate-500 font-medium text-lg leading-relaxed">
                            Discover top-rated doctors with years of experience. Filter by specialty and book your slot in seconds.
                        </p>
                    </div>

                    {/* Filters & Search */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <div className="relative group flex-1 sm:w-72">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search by name..."
                                className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all"
                            />
                        </div>

                        <div className="relative flex-1 sm:w-56">
                            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <select
                                value={specialization}
                                onChange={(e) => setSpecialization(e.target.value)}
                                className="w-full appearance-none rounded-2xl border-2 border-slate-100 bg-slate-50/50 py-4 pl-12 pr-10 text-sm font-bold text-slate-700 outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all cursor-pointer"
                            >
                                {specializations.map((sp) => (
                                    <option key={sp} value={sp}>
                                        {sp}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Categories - Quick Toggle */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {specializations.map(sp => (
                        <button
                            key={sp}
                            onClick={() => setSpecialization(sp)}
                            className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${specialization === sp
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                                    : 'bg-white border-2 border-slate-100 text-slate-500 hover:border-blue-100 hover:text-blue-600'
                                }`}
                        >
                            {sp}
                        </button>
                    ))}
                </div>

                {/* Doctor Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredDoctors.map((doc) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                key={doc.id}
                            >
                                <DoctorCard doc={doc} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredDoctors.length === 0 && (
                    <div className="mt-20 text-center py-20 rounded-[3rem] bg-slate-50 border-2 border-dashed border-slate-200">
                        <p className="text-xl font-bold text-slate-400">No doctors found matching your criteria.</p>
                        <button
                            onClick={() => { setQuery(""); setSpecialization("All"); }}
                            className="mt-4 text-blue-600 font-bold hover:underline"
                        >
                            Reset All Filters
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

function DoctorCard({ doc }: { doc: any }) {
    return (
        <div className="group rounded-[2.5rem] bg-white border-2 border-slate-50 p-7 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-300 relative overflow-hidden h-full flex flex-col">
            {/* Status Badge */}
            <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border-2 ${doc.available
                    ? 'bg-green-50 border-green-100 text-green-600'
                    : 'bg-slate-50 border-slate-100 text-slate-400'
                }`}>
                {doc.available ? "● Available Today" : "○ Fully Booked"}
            </div>

            {/* Profile Header */}
            <div className="flex items-center gap-5 mt-4 mb-8">
                <div className="h-20 w-20 rounded-3xl bg-blue-50 border-2 border-blue-100 flex items-center justify-center text-3xl font-black text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {doc.name.split(" ").pop()?.charAt(0)}
                </div>
                <div>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                        {doc.name}
                    </h3>
                    <p className="text-sm font-bold text-blue-500 uppercase tracking-wide">
                        {doc.specialization}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                        <div className="flex items-center gap-0.5 text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} fill={i < Math.floor(doc.rating) ? "currentColor" : "none"} strokeWidth={3} />
                            ))}
                        </div>
                        <span className="text-sm font-black text-slate-400">
                            {doc.rating}
                        </span>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="rounded-2xl bg-slate-50/50 p-4 border border-transparent group-hover:border-slate-100 transition-all">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Experience</p>
                    <p className="text-sm font-black text-slate-800">{doc.experience}+ Years</p>
                </div>
                <div className="rounded-2xl bg-slate-50/50 p-4 border border-transparent group-hover:border-slate-100 transition-all">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Reviews</p>
                    <p className="text-sm font-black text-slate-800">{doc.reviews}+ Happy</p>
                </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-center gap-3 text-slate-500 font-bold text-sm">
                    <MapPin size={18} className="text-blue-600" />
                    <span>{doc.location}, India</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500 font-bold text-sm">
                    <Clock size={18} className="text-blue-600" />
                    <span>{doc.timing}</span>
                </div>
            </div>

            {/* Fees and Action */}
            <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Consultation Fee</p>
                    <p className="text-2xl font-black text-slate-900 leading-none">₹{doc.fee}</p>
                </div>
                <Link href="/book-appointment">
                    <button className="px-6 py-3 rounded-2xl bg-slate-900 text-white font-black text-sm shadow-xl hover:bg-blue-600 hover:-translate-y-1 transition-all flex items-center gap-2">
                        Book Appointment
                        <ArrowRight size={16} />
                    </button>
                </Link>
            </div>
        </div>
    );
}
