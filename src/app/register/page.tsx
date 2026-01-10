"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/app/page.module.css";
import { useState } from "react";
import { Link } from "lucide-react";
import NextLink from "next/link"; // Renamed to avoid collision

export default function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate register delay
        setTimeout(() => {
            setIsLoading(false);
            window.location.href = '/login';
        }, 1500);
    };

    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.section} style={{ paddingTop: '120px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--background)' }}>
                <div className={styles.card} style={{ width: '100%', maxWidth: '400px', padding: '2.5rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Create Account</h1>
                        <p style={{ color: 'var(--secondary-foreground)' }}>Join HealthHub for better healthcare</p>
                    </div>

                    <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ flex: 1 }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>First Name</label>
                                <input type="text" required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', background: 'var(--secondary)' }} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Last Name</label>
                                <input type="text" required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', background: 'var(--secondary)' }} />
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email Address</label>
                            <input type="email" placeholder="john@example.com" required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', background: 'var(--secondary)' }} />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Password</label>
                            <input type="password" placeholder="Min 8 characters" required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', background: 'var(--secondary)' }} />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Confirm Password</label>
                            <input type="password" placeholder="••••••••" required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', background: 'var(--secondary)' }} />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ marginTop: '0.5rem' }}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Creating Account...' : 'Register'}
                        </button>

                        <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--secondary-foreground)' }}>
                            Already have an account? <NextLink href="/login" style={{ color: 'var(--primary)', cursor: 'pointer' }}>Login</NextLink>
                        </p>
                    </form>
                </div>
            </section>

            <Footer />
        </main>
    );
}
