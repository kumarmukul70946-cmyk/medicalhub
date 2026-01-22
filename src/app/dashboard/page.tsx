"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/app/page.module.css";
import dStyles from "./Dashboard.module.css";
import {
    User,
    Calendar,
    Activity,
    Clock,
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
        <main className={styles.main} style={{ background: '#F8FAFC' }}>
            <Navbar />

            <section className={styles.section} style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh' }}>
                <div className="container">
                    <div style={{ display: 'flex', gap: '2.5rem', flexDirection: 'column' }}>

                        {/* Dashboard Header */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}
                                >
                                    <h1 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#0F172A', letterSpacing: '-0.04em' }}>Health Dashboard</h1>
                                    <Sparkles size={28} color="#2563EB" />
                                </motion.div>
                                <p style={{ color: '#64748B', fontSize: '1.125rem' }}>Good morning, <span style={{ color: '#0F172A', fontWeight: '700' }}>{patient.name}</span>. Here is your health overview.</p>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button className="btn btn-outline" style={{ width: '48px', height: '48px', padding: 0, borderRadius: '14px', background: 'white' }} title="Notifications">
                                    <Bell size={20} color="#0F172A" />
                                </button>
                                <button className="btn btn-outline" style={{ width: '48px', height: '48px', padding: 0, borderRadius: '14px', background: 'white' }} title="Settings">
                                    <Settings size={20} color="#0F172A" />
                                </button>
                                <Link href="/login">
                                    <button className="btn btn-outline" style={{ padding: '0 1.25rem', borderRadius: '14px', borderColor: '#FEE2E2', color: '#EF4444', background: '#FEF2F2', height: '48px' }}>
                                        <LogOut size={18} />
                                        Logout
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className={dStyles.dashboardGrid}>

                            {/* Left Column: Patient Profile & Vitals */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                                {/* Profile Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={dStyles.profileCard}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
                                        <div style={{ width: '80px', height: '80px', borderRadius: '20px', background: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', boxShadow: '0 8px 16px rgba(37, 99, 235, 0.2)' }}>
                                            <User size={40} />
                                        </div>
                                        <div>
                                            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0F172A' }}>{patient.name}</h2>
                                            <div style={{ color: '#2563EB', fontSize: '0.85rem', fontWeight: '700', background: '#EFF6FF', padding: '0.35rem 0.75rem', borderRadius: '8px', marginTop: '0.5rem', border: '1px solid #DBEAFE' }}>
                                                ID: {patient.id}
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                        <div>
                                            <p style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', fontWeight: '700', marginBottom: '0.25rem' }}>Age</p>
                                            <p style={{ fontWeight: '800', fontSize: '1.125rem', color: '#0F172A' }}>{patient.age} Yrs</p>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', fontWeight: '700', marginBottom: '0.25rem' }}>Blood Group</p>
                                            <p style={{ fontWeight: '800', fontSize: '1.125rem', color: '#0F172A' }}>{patient.bloodGroup}</p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Health Vitals Section */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0F172A', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <Heart size={24} color="#EF4444" fill="#EF4444" /> Live Health Vitals
                                    </h3>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                        <div className={dStyles.vitalCard} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0' }}>
                                            <Activity size={24} color="#2563EB" style={{ marginBottom: '1rem' }} />
                                            <p style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: '600' }}>Heart Rate</p>
                                            <p style={{ fontSize: '1.75rem', fontWeight: '900', color: '#0F172A' }}>72 <span style={{ fontSize: '1rem', color: '#94A3B8' }}>bpm</span></p>
                                        </div>
                                        <div className={dStyles.vitalCard} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0' }}>
                                            <Thermometer size={24} color="#F59E0B" style={{ marginBottom: '1rem' }} />
                                            <p style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: '600' }}>Body Temp</p>
                                            <p style={{ fontSize: '1.75rem', fontWeight: '900', color: '#0F172A' }}>98.6 <span style={{ fontSize: '1rem', color: '#94A3B8' }}>°F</span></p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Right Column: Appointments */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={dStyles.profileCard}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0F172A', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                            <Calendar size={28} color="#2563EB" /> Appointments
                                        </h3>
                                        <Link href="/book-appointment">
                                            <button className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', borderRadius: '12px', fontSize: '0.9rem' }}>+ Book New</button>
                                        </Link>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                        {appointments.map((appt, i) => (
                                            <div key={i} className={dStyles.appointmentItem}>
                                                <div style={{ padding: '0.75rem', borderRadius: '12px', background: '#F1F5F9', color: '#2563EB', textAlign: 'center', minWidth: '64px' }}>
                                                    <p style={{ fontSize: '0.75rem', fontWeight: '800' }}>{appt.date.split(' ')[0]}</p>
                                                    <p style={{ fontSize: '1.25rem', fontWeight: '900' }}>{appt.date.split(' ')[1].replace(',', '')}</p>
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <h4 style={{ fontWeight: '800', color: '#0F172A', fontSize: '1.125rem' }}>{appt.doctor}</h4>
                                                    <p style={{ fontSize: '0.875rem', color: '#64748B', fontWeight: '500' }}>{appt.dept}</p>
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
