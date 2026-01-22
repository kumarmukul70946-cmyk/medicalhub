"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    Activity,
    ShieldCheck,
    Mail,
    MapPin,
    Award,
    Clock,
    CheckCircle2,
    Calendar,
    ArrowLeft,
    Star,
    Sparkles,
    Loader2
} from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import RatingSystem from "@/components/RatingSystem";
import { useState } from "react";
import { Video } from "lucide-react";

interface DoctorData {
    name: string;
    specialty: string;
    exp: string;
    availability: string;
    education: string;
    languages: string;
    rating: number;
    reviews: number;
    about: string;
}

// Mock Data
const doctorsData: Record<string, DoctorData> = {
    "dr-sarah-johnson": {
        name: "Dr. Sarah Johnson",
        specialty: "Senior Cardiology",
        exp: "15+ Years Experience",
        availability: "Mon - Fri",
        education: "MD - Cardiology, Johns Hopkins University",
        languages: "English, Spanish",
        rating: 4.9,
        reviews: 240,
        about: "Dr. Sarah Johnson is a world-renowned Cardiologist with over 15 years of experience in diagnosing and treating complex heart conditions. She specializes in interventional cardiology and has performed over 1,000 successful procedures."
    },
    "dr-michael-chen": {
        name: "Dr. Michael Chen",
        specialty: "Neurology",
        exp: "12+ Years Experience",
        availability: "Tue - Sat",
        education: "DM - Neurology, Harvard Medical School",
        languages: "English, Mandarin",
        rating: 4.8,
        reviews: 180,
        about: "Dr. Michael Chen is an expert Neurologist focusing on stroke management and epilepsy. He is dedicated to providing patient-centered care using the latest neurological advancements."
    },
    "dr-emily-davis": {
        name: "Dr. Emily Davis",
        specialty: "Pediatrics",
        exp: "10+ Years Experience",
        availability: "Mon - Sat",
        education: "MD - Pediatrics, University of Pennsylvania",
        languages: "English, French",
        rating: 4.7,
        reviews: 310,
        about: "Dr. Emily Davis loves working with children and ensuring their healthy growth and development. She provides comprehensive pediatric care from newborn issues to adolescent health."
    }
};

export default function DoctorProfile() {
    const params = useParams();
    const router = useRouter();
    const slug = (Array.isArray(params?.id) ? params.id[0] : params?.id) || "";
    const doctorKey = slug || "dr-sarah-johnson";
    const doctor = doctorsData[doctorKey] || doctorsData["dr-sarah-johnson"];

    const [startingCall, setStartingCall] = useState(false);

    const startTelemedicine = async () => {
        setStartingCall(true);
        try {
            const res = await fetch("/api/telesessions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    doctorId: "65af3f8e5627250012345678", // Placeholder DB ID
                    doctorName: doctor.name,
                    patientName: "Mukul Anand",
                    patientEmail: "mukul@gmail.com",
                    startTime: new Date(),
                    status: 'active'
                })
            });
            if (res.ok) {
                const session = await res.json();
                router.push(`/telemedicine/${session.meetingId}`);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setStartingCall(false);
        }
    };

    return (
        <main className="bg-slate-50 min-h-screen selection:bg-blue-100">
            <Navbar />

            <section className="pt-32 pb-24 relative overflow-hidden">
                {/* Background Art */}
                <div className="absolute top-0 right-0 -mr-40 h-[100vh] w-[100vh] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    {/* Breadcrumb / Back */}
                    <Link href="/doctors" className="inline-flex items-center gap-2 text-slate-400 font-black text-xs uppercase tracking-[0.2em] mb-12 hover:text-blue-600 transition-colors">
                        <ArrowLeft size={16} /> Back to Directory
                    </Link>

                    <div className="grid lg:grid-cols-12 gap-12">

                        {/* Left Side: Basic Info Card */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white rounded-[3rem] border-2 border-slate-100 p-8 shadow-2xl relative overflow-hidden text-center"
                            >
                                <div className="absolute top-0 left-0 w-full h-2 bg-blue-600" />

                                <div className="h-32 w-32 bg-slate-900 text-white rounded-[2.5rem] flex items-center justify-center text-5xl font-black mx-auto mb-8 shadow-2xl">
                                    {doctor.name.split(' ').pop()?.charAt(0)}
                                </div>

                                <h1 className="text-2xl font-black text-slate-900 mb-2">{doctor.name}</h1>
                                <p className="text-blue-600 font-extrabold text-sm uppercase tracking-widest mb-6">{doctor.specialty}</p>

                                <div className="flex items-center justify-center gap-2 mb-8 bg-slate-50 rounded-2xl py-3 border border-slate-100">
                                    <Star className="text-yellow-500 fill-current" size={18} />
                                    <span className="text-lg font-black text-slate-700">{doctor.rating}</span>
                                    <span className="text-sm font-bold text-slate-400">({doctor.reviews} Reviews)</span>
                                </div>

                                <div className="space-y-4 text-left">
                                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50/50 border border-transparent">
                                        <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-blue-600">
                                            <Mail size={18} />
                                        </div>
                                        <span className="text-sm font-bold text-slate-500 truncate">{doctor.name.toLowerCase().replace(/\s/g, '.') + "@medicalhub.com"}</span>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50/50 border border-transparent">
                                        <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-blue-600">
                                            <ShieldCheck size={18} />
                                        </div>
                                        <span className="text-sm font-bold text-slate-500 truncate">Verified Specialist</span>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <Link href="/book-appointment">
                                        <button className="w-full py-5 rounded-[2rem] bg-slate-900 text-white font-black text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-xl mb-4">
                                            Book Visit
                                            <Calendar size={20} />
                                        </button>
                                    </Link>
                                    <button
                                        onClick={startTelemedicine}
                                        disabled={startingCall}
                                        className="w-full py-5 rounded-[2rem] bg-rose-600 text-white font-black text-lg hover:bg-rose-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-rose-100 disabled:opacity-50"
                                    >
                                        {startingCall ? <Loader2 className="animate-spin" size={20} /> : <Video size={20} />}
                                        Consult Now
                                    </button>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side: Detailed Profile */}
                        <div className="lg:col-span-8 space-y-10">

                            {/* Summary Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-white rounded-[3rem] border-2 border-slate-100 p-8 sm:p-14 shadow-sm"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                                        <Sparkles size={24} />
                                    </div>
                                    <h2 className="text-3xl font-black text-slate-900 tracking-tight">Professional Profile</h2>
                                </div>

                                <p className="text-lg text-slate-500 font-bold leading-relaxed mb-12">
                                    {doctor.about}
                                </p>

                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                                                <Award size={20} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Medical Training</p>
                                                <p className="font-extrabold text-slate-900">{doctor.education}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center">
                                                <Activity size={20} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Expertise</p>
                                                <p className="font-extrabold text-slate-900">{doctor.exp}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
                                                <Clock size={20} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Availability</p>
                                                <p className="font-extrabold text-slate-900">{doctor.availability}, Weekly</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
                                                <MapPin size={20} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Main Facility</p>
                                                <p className="font-extrabold text-slate-900">HealthHub Main OPD, Block 2C</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Verification Footer */}
                            <div className="bg-slate-900 rounded-[3rem] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 h-40 w-40 bg-blue-600 rounded-full blur-3xl opacity-20 -mr-10 -mt-10" />
                                <div className="flex items-center gap-6">
                                    <div className="h-14 w-14 bg-white/20 rounded-[1.25rem] flex items-center justify-center backdrop-blur-md shrink-0">
                                        <CheckCircle2 size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black">Verified Healthcare Expert</h3>
                                        <p className="text-slate-400 font-bold text-sm">This profile has been verified for medical credentials and valid practice license.</p>
                                    </div>
                                </div>
                                <button className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black whitespace-nowrap hover:bg-blue-50 transition-all hover:scale-105">
                                    View License
                                </button>
                            </div>

                            {/* Ratings Section */}
                            <div className="pt-10">
                                <RatingSystem doctorId={slug} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
