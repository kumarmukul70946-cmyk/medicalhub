"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/app/page.module.css";
import dStyles from "./Dashboard.module.css";
import {
    User,
    Calendar,
    Activity,
    Settings,
    LogOut,
    Bell,
    Sparkles,
    Heart,
    Thermometer
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Dashboard() {
    const patient = {
        name: "John Doe",
        id: "PAT-2024-001",
        age: 34,
        bloodGroup: "O+",
        email: "john.doe@example.com",
        phone: "+91 9102774718"
    };

    const appointments = [
        { doctor: "Dr. Sarah Johnson", dept: "Cardiology", date: "Jan 12, 2026", time: "10:00 AM", status: "Confirmed" },
        { doctor: "Dr. Michael Chen", dept: "Neurology", date: "Jan 20, 2026", time: "02:30 PM", status: "Pending" }
    ];

    return (
        <main className={`${styles.main} ${dStyles.mainContainer}`}>
            <Navbar />

            <section className={`${styles.section} ${dStyles.dashboardSection}`}>
                <div className="container">
                    <div className={dStyles.flexColumn}>

                        {/* Dashboard Header */}
                        <div className={dStyles.headerRow}>
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={dStyles.titleWrapper}
                                >
                                    <h1 className={dStyles.title}>Health Dashboard</h1>
                                    <Sparkles size={28} color="#2563EB" />
                                </motion.div>
                                <p className={dStyles.subtitle}>Good morning, <span className={dStyles.patientName}>{patient.name}</span>. Here is your health overview.</p>
                            </div>
                            <div className={dStyles.actionButtons}>
                                <button className={`btn btn-outline ${dStyles.iconBtn}`} title="Notifications">
                                    <Bell size={20} color="#0F172A" />
                                </button>
                                <button className={`btn btn-outline ${dStyles.iconBtn}`} title="Settings">
                                    <Settings size={20} color="#0F172A" />
                                </button>
                                <Link href="/login">
                                    <button className={`btn btn-outline ${dStyles.logoutBtn}`}>
                                        <LogOut size={18} />
                                        Logout
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className={dStyles.dashboardGrid}>

                            {/* Left Column: Patient Profile & Vitals */}
                            <div className={`${dStyles.flexColumn} gap-8`}>

                                {/* Profile Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={dStyles.profileCard}
                                >
                                    <div className={dStyles.avatarWrapper}>
                                        <div className={dStyles.avatar}>
                                            <User size={40} />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold text-slate-900">{patient.name}</h2>
                                            <div className={dStyles.patientIdBadge}>
                                                ID: {patient.id}
                                            </div>
                                        </div>
                                    </div>

                                    <div className={dStyles.grid2Col}>
                                        <div>
                                            <p className="text-xs text-slate-500 uppercase font-black tracking-widest mb-1">Age</p>
                                            <p className="font-extrabold text-lg text-slate-900">{patient.age} Yrs</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 uppercase font-black tracking-widest mb-1">Blood Group</p>
                                            <p className="font-extrabold text-lg text-slate-900">{patient.bloodGroup}</p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Health Vitals Section */}
                                <div className={dStyles.vitalsSection}>
                                    <h3 className={dStyles.vitalsTitle}>
                                        <Heart size={24} color="#EF4444" fill="#EF4444" /> Live Health Vitals
                                    </h3>
                                    <div className={dStyles.vitalsGrid}>
                                        <div className={dStyles.vitalCard}>
                                            <Activity size={24} color="#2563EB" className="mb-4 mx-auto" />
                                            <p className="text-sm text-slate-500 font-bold mb-1">Heart Rate</p>
                                            <p className="text-3xl font-black text-slate-900 text-center">72 <span className="text-sm text-slate-400">bpm</span></p>
                                        </div>
                                        <div className={dStyles.vitalCard}>
                                            <Thermometer size={24} color="#F59E0B" className="mb-4 mx-auto" />
                                            <p className="text-sm text-slate-500 font-bold mb-1">Body Temp</p>
                                            <p className="text-3xl font-black text-slate-900 text-center">98.6 <span className="text-sm text-slate-400">°F</span></p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Right Column: Appointments */}
                            <div className={`${dStyles.flexColumn} gap-8`}>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={dStyles.profileCard}
                                >
                                    <div className="flex justify-between items-center mb-10">
                                        <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                                            <Calendar size={28} color="#2563EB" /> Appointments
                                        </h3>
                                        <Link href="/book-appointment">
                                            <button className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 hover:-translate-y-0.5 transition-all">
                                                + Book New
                                            </button>
                                        </Link>
                                    </div>

                                    <div className={`${dStyles.flexColumn} gap-5`}>
                                        {appointments.map((appt, i) => (
                                            <div key={i} className={dStyles.appointmentItem}>
                                                <div className={dStyles.appointmentDate}>
                                                    <p className="text-[10px] font-black uppercase">{appt.date.split(' ')[0]}</p>
                                                    <p className="text-xl font-black">{appt.date.split(' ')[1].replace(',', '')}</p>
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-extrabold text-slate-900">{appt.doctor}</h4>
                                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{appt.dept}</p>
                                                </div>
                                                <div className={`${dStyles.statusBadge} ${appt.status === 'Confirmed' ? dStyles.statusConfirmed : dStyles.statusPending}`}>
                                                    {appt.status}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
