"use client";

import Link from "next/link";
import { useState } from "react";
import { Activity, Menu, X, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import styles from "@/app/page.module.css";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className={styles.nav}>
            <div className={styles.navContainer}>
                <Link href="/" className={styles.logo}>
                    <Activity className="text-primary" size={32} />
                    <span>HealthHub</span>
                </Link>

                <div className={styles.navLinks}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="/doctors" className={styles.navLink}>Doctors</Link>
                    <Link href="/book-appointment" className={styles.navLink}>Appointments</Link>
                </div>

                <div className={styles.navActions}>
                    <Link href="/login">
                        <button className="btn btn-outline">Patient Login</button>
                    </Link>
                    <Link href="/book-appointment">
                        <button className="btn btn-primary">
                            <Calendar size={18} style={{ marginRight: '0.5rem' }} />
                            Book Appointment
                        </button>
                    </Link>
                </div>

                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={styles.mobileMenu}
                >
                    <div className={styles.mobileMenuLinks}>
                        <Link href="/" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Home</Link>
                        <Link href="/doctors" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Doctors</Link>
                        <Link href="/book-appointment" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Appointments</Link>
                        <div className={styles.mobileMenuActions}>
                            <Link href="/book-appointment" style={{ width: '100%' }}>
                                <button className="btn btn-primary" style={{ width: '100%' }}>Book Appointment</button>
                            </Link>
                            <Link href="/login" style={{ width: '100%' }}>
                                <button className="btn btn-outline" style={{ width: '100%' }}>Patient Login</button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
