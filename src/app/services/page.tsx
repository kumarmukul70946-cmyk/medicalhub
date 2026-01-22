"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    Stethoscope, Pill, FlaskConical, FileText,
    Activity, Calendar, Heart, Brain, Bone, User,
    ArrowRight, ShieldCheck
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const allServices = [
    {
        title: "Cardiology",
        slug: "cardiology",
        icon: <Heart size={32} />,
        color: "text-red-500",
        bg: "bg-red-50",
        desc: "Comprehensive heart care including diagnostics and complex surgeries."
    },
    {
        title: "Neurology",
        slug: "neurology",
        icon: <Brain size={32} />,
        color: "text-blue-500",
        bg: "bg-blue-50",
        desc: "Advanced treatment for brain, spine, and nervous system disorders."
    },
    {
        title: "Orthopedics",
        slug: "orthopedics",
        icon: <Bone size={32} />,
        color: "text-orange-500",
        bg: "bg-orange-50",
        desc: "Specialized care for joint replacements, sports injuries, and trauma."
    },
    {
        title: "Pediatrics",
        slug: "pediatrics",
        icon: <User size={32} />,
        color: "text-green-500",
        bg: "bg-green-50",
        desc: "Compassionate healthcare for infants, children, and adolescents."
    },
    {
        title: "Digital Pharmacy",
        slug: "pharmacy",
        icon: <Pill size={32} />,
        color: "text-pink-500",
        bg: "bg-pink-50",
        desc: "Genuine medicines delivered to your doorstep within 2 hours."
    },
    {
        title: "Lab Tests",
        slug: "lab-tests",
        icon: <FlaskConical size={32} />,
        color: "text-purple-500",
        bg: "bg-purple-50",
        desc: "Home sample collection with accurate, next-day digital reports."
    },
    {
        title: "Emergency Care",
        slug: "emergency",
        icon: <Activity size={32} />,
        color: "text-rose-600",
        bg: "bg-rose-50",
        desc: "24/7 rapid response trauma and critical care services."
    },
    {
        title: "Health Wallet",
        slug: "health-wallet",
        icon: <FileText size={32} />,
        color: "text-cyan-500",
        bg: "bg-cyan-50",
        desc: "Secure encrypted storage for your entire medical history."
    }
];

export default function ServicesPage() {
    return (
        <main className="bg-slate-50 min-h-screen">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-20 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
                            <ShieldCheck size={14} /> World-Class Healthcare
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                            Our Medical <span className="text-blue-600">Services</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-slate-500 font-medium max-w-2xl mx-auto">
                            From primary care to complex surgeries, MedicalHub provides the highest standard of medical excellence for your entire family.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {allServices.map((service, i) => (
                            <motion.div
                                key={service.slug}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="group h-full flex flex-col p-8 rounded-[2.5rem] bg-white border-2 border-slate-50 hover:border-blue-100 hover:shadow-2xl transition-all"
                                >
                                    <div className={`h-16 w-16 mb-8 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-500 font-bold text-sm leading-relaxed mb-8 flex-1">
                                        {service.desc}
                                    </p>
                                    <div className="pt-6 border-t border-slate-50 flex items-center justify-between text-blue-600 font-black text-xs uppercase tracking-widest">
                                        View Details
                                        <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-20 p-10 lg:p-16 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 h-64 w-64 bg-blue-600 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20" />
                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-black mb-6">Can&apos;t find what you&apos;re looking for?</h2>
                                <p className="text-slate-400 font-bold text-lg leading-relaxed">
                                    Our hospitality team is available 24/7 to help you find the right specialist or service. Contact us for personalized assistance.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                                <button className="px-8 py-5 rounded-2xl bg-white text-slate-900 font-black text-lg hover:bg-blue-50 transition-all">
                                    Call Helpline
                                </button>
                                <button className="px-8 py-5 rounded-2xl bg-blue-600 text-white font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20">
                                    Chat with Us
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
