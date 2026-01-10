"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/app/page.module.css";
import { User, Activity, Clock, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function DoctorsPage() {
    const doctors = [
        { name: "Dr. Sarah Johnson", specialty: "Cardiologist", exp: "15 Years Experience", availability: "Mon - Fri" },
        { name: "Dr. Michael Chen", specialty: "Neurologist", exp: "12 Years Experience", availability: "Tue - Sat" },
        { name: "Dr. Emily Davis", specialty: "Pediatrician", exp: "10 Years Experience", availability: "Mon - Sat" },
        { name: "Dr. James Wilson", specialty: "Orthopedic Surgeon", exp: "20 Years Experience", availability: "Mon - Fri" },
        { name: "Dr. Priya Patel", specialty: "Dermatologist", exp: "8 Years Experience", availability: "Wed - Sun" },
        { name: "Dr. Roberts", specialty: "General Physician", exp: "25 Years Experience", availability: "Daily" },
    ];

    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.section} style={{ paddingTop: '120px', background: 'var(--background)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h1 className="section-title">Our Expert Doctors</h1>
                        <p className="section-subtitle">Meet our team of board-certified specialists dedicated to your health.</p>
                    </div>

                    <div className={styles.servicesGrid}>
                        {doctors.map((doc, idx) => (
                            <div key={idx} className={styles.serviceCard} style={{ cursor: 'default' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <User size={30} color="var(--primary)" />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{doc.name}</h3>
                                        <p style={{ color: 'var(--primary)', fontWeight: '500' }}>{doc.specialty}</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary-foreground)', fontSize: '0.9rem' }}>
                                        <ShieldCheck size={16} />
                                        <span>{doc.exp}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary-foreground)', fontSize: '0.9rem' }}>
                                        <Clock size={16} />
                                        <span>{doc.availability}</span>
                                    </div>
                                </div>

                                <Link href={`/doctors/${doc.name.toLowerCase().replace(/\./g, '').replace(/\s+/g, '-')}`} style={{ width: '100%' }}>
                                    <button className="btn btn-outline" style={{ width: '100%' }}>View Profile</button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
