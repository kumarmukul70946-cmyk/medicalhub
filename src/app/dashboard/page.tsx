"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/app/page.module.css";
import {
    User,
    Calendar,
    Activity,
    Clock,
    Settings,
    LogOut,
    ChevronRight,
    Bell,
    Sparkles
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

    const assignedDoctors = [
        { name: "Dr. Sarah Johnson", specialty: "Cardiologist", contact: "+91 6200..." },
        { name: "Dr. Roberts", specialty: "General Physician", contact: "+91 6200..." }
    ];

    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.section} style={{ paddingTop: '100px', paddingBottom: '40px', minHeight: '100vh' }}>
                <div className="container">
                    <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column' }}>

                        {/* Dashboard Header */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                                >
                                    <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Dashboard</h1>
                                    <Sparkles size={24} color="var(--primary)" />
                                </motion.div>
                                <p style={{ color: 'var(--secondary-foreground)', opacity: 0.8 }}>Welcome back, {patient.name}</p>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button className="btn btn-outline" style={{ padding: '0.75rem', borderRadius: '50%' }} aria-label="Notifications">
                                    <Bell size={20} />
                                </button>
                                <button className="btn btn-outline" style={{ padding: '0.75rem', borderRadius: '50%' }} aria-label="Settings">
                                    <Settings size={20} />
                                </button>
                                <Link href="/login">
                                    <button className="btn btn-outline" style={{ padding: '0.75rem', borderRadius: '50%', borderColor: '#ef4444', color: '#ef4444', background: 'rgba(239, 68, 68, 0.05)' }} aria-label="Logout">
                                        <LogOut size={20} />
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>

                            {/* Left Column: Patient Profile & Vitals */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                                {/* Profile Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={styles.card}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                                        <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', boxShadow: '0 4px 12px rgba(14, 165, 233, 0.25)' }}>
                                            <User size={48} />
                                        </div>
                                        <div>
                                            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{patient.name}</h2>
                                            <p style={{ color: 'var(--secondary-foreground)', fontSize: '0.95rem', background: 'var(--secondary)', padding: '0.25rem 0.75rem', borderRadius: '999px', display: 'inline-block', marginTop: '0.5rem' }}>
                                                ID: {patient.id}
                                            </p>
                                        </div>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                                        <div>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--secondary-foreground)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Age</p>
                                            <p style={{ fontWeight: '600', fontSize: '1.1rem' }}>{patient.age} Years</p>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--secondary-foreground)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Blood Group</p>
                                            <p style={{ fontWeight: '600', fontSize: '1.1rem' }}>{patient.bloodGroup}</p>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--secondary-foreground)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone</p>
                                            <p style={{ fontWeight: '600', fontSize: '1.1rem' }}>{patient.phone}</p>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--secondary-foreground)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</p>
                                            <p style={{ fontWeight: '600', fontSize: '1rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={patient.email}>{patient.email}</p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Health Vitals Preview */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className={styles.card}
                                >
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <Activity size={24} color="var(--primary)" /> Health Vitals
                                    </h3>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                                        <div style={{ background: 'rgba(14, 165, 233, 0.1)', padding: '1.25rem 0.5rem', borderRadius: '1rem', textAlign: 'center' }}>
                                            <p style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--primary)', marginBottom: '0.5rem' }}>Heart Rate</p>
                                            <p style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--foreground)' }}>72 <span style={{ fontSize: '0.9rem', color: 'var(--secondary-foreground)' }}>bpm</span></p>
                                        </div>
                                        <div style={{ background: 'rgba(22, 163, 74, 0.1)', padding: '1.25rem 0.5rem', borderRadius: '1rem', textAlign: 'center' }}>
                                            <p style={{ fontSize: '0.85rem', fontWeight: '600', color: '#16a34a', marginBottom: '0.5rem' }}>Blood Pressure</p>
                                            <p style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--foreground)' }}>120/80</p>
                                        </div>
                                        <div style={{ background: 'rgba(234, 88, 12, 0.1)', padding: '1.25rem 0.5rem', borderRadius: '1rem', textAlign: 'center' }}>
                                            <p style={{ fontSize: '0.85rem', fontWeight: '600', color: '#ea580c', marginBottom: '0.5rem' }}>Weight</p>
                                            <p style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--foreground)' }}>75 <span style={{ fontSize: '0.9rem', color: 'var(--secondary-foreground)' }}>kg</span></p>
                                        </div>
                                    </div>
                                </motion.div>

                            </div>

                            {/* Right Column: Appointments & Reports */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                                {/* Upcoming Appointments */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className={styles.card}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                            <Calendar size={24} color="var(--accent)" /> Upcoming Appointments
                                        </h3>
                                        <Link href="/book-appointment">
                                            <button className="btn btn-outline" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>+ New</button>
                                        </Link>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                        {appointments.map((appt, i) => (
                                            <div key={i} style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                padding: '1.25rem',
                                                border: '1px solid var(--border)',
                                                borderRadius: '1rem',
                                                gap: '1.25rem',
                                                background: 'var(--background)'
                                            }}>
                                                <div style={{ background: 'var(--secondary)', padding: '0.5rem 1rem', borderRadius: '0.75rem', textAlign: 'center', minWidth: '70px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                                    <p style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--primary)', textTransform: 'uppercase' }}>{appt.date.split(' ')[0]}</p>
                                                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', lineHeight: '1', color: 'var(--foreground)' }}>{appt.date.split(' ')[1].replace(',', '')}</p>
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <h4 style={{ fontWeight: '700', fontSize: '1.05rem', marginBottom: '0.25rem' }}>{appt.doctor}</h4>
                                                    <p style={{ fontSize: '0.9rem', color: 'var(--secondary-foreground)' }}>{appt.dept}</p>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--secondary-foreground)' }}>
                                                        <Clock size={14} /> {appt.time}
                                                    </div>
                                                </div>
                                                <div>
                                                    <span style={{
                                                        padding: '0.4rem 1rem',
                                                        borderRadius: '999px',
                                                        fontSize: '0.8rem',
                                                        fontWeight: '600',
                                                        background: appt.status === 'Confirmed' ? 'rgba(22, 163, 74, 0.1)' : 'rgba(234, 88, 12, 0.1)',
                                                        color: appt.status === 'Confirmed' ? '#16a34a' : '#ea580c'
                                                    }}>
                                                        {appt.status}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Assigned Doctors */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className={styles.card}
                                >
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <User size={24} color="var(--primary)" /> My Doctors
                                    </h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {assignedDoctors.map((doc, i) => (
                                            <Link key={i} href="/doctors" style={{ textDecoration: 'none' }}>
                                                <div style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    padding: '1rem',
                                                    borderRadius: '0.75rem',
                                                    transition: 'background 0.2s',
                                                    cursor: 'pointer'
                                                }} className="hover:bg-secondary">
                                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                                        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold', border: '2px solid var(--border)' }}>
                                                            {doc.name[4]}
                                                        </div>
                                                        <div>
                                                            <p style={{ fontWeight: '700', fontSize: '1rem' }}>{doc.name}</p>
                                                            <p style={{ fontSize: '0.9rem', color: 'var(--secondary-foreground)' }}>{doc.specialty}</p>
                                                        </div>
                                                    </div>
                                                    <ChevronRight size={20} color="var(--secondary-foreground)" />
                                                </div>
                                            </Link>
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
