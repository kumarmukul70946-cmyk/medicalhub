"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Activity, Menu, X, Calendar, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Doctors", href: "/doctors" },
        { name: "Appointments", href: "/book-appointment" },
    ];

    return (
        <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.container}>
                {/* Left: Logo */}
                <Link href="/" className={styles.logo}>
                    <Activity size={32} />
                    <span>HealthHub</span>
                </Link>

                {/* Center: Desktop Menu */}
                <nav className={styles.menu}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={styles.menuLink}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Right: Desktop Actions */}
                <div className={styles.actions}>
                    <Link href="/login">
                        <button className={`btn btn-outline ${styles.loginBtn}`}>
                            <User size={18} />
                            Patient Login
                        </button>
                    </Link>
                    <Link href="/book-appointment">
                        <button className={`btn btn-primary ${styles.bookBtn}`}>
                            <Calendar size={18} />
                            Book Appointment
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className={styles.mobileMenu}
                    >
                        <div className={styles.mobileMenuLinks}>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={styles.mobileNavLink}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className={styles.mobileActions}>
                            <Link href="/login" onClick={() => setIsOpen(false)}>
                                <button className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                                    Patient Login
                                </button>
                            </Link>
                            <Link href="/book-appointment" onClick={() => setIsOpen(false)}>
                                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                    Book Appointment
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
