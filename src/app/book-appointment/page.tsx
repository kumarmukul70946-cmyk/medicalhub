"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/app/page.module.css";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function AppointmentPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.section} style={{ paddingTop: '120px', minHeight: '80vh', background: 'var(--background)' }}>
                <div className="container" style={{ maxWidth: '600px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h1 className="section-title">Book an Appointment</h1>
                        <p className="section-subtitle">Schedule a visit with one of our specialists.</p>
                    </div>

                    {submitted ? (
                        <div className={styles.card} style={{ textAlign: 'center', padding: '3rem' }}>
                            <CheckCircle size={64} color="var(--primary)" style={{ margin: '0 auto 1.5rem' }} />
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Appointment Request Sent!</h2>
                            <p style={{ color: 'var(--secondary-foreground)', marginBottom: '2rem' }}>
                                We have received your request. Our team will contact you shortly to confirm the date and time.
                            </p>
                            <button
                                className="btn btn-primary"
                                onClick={() => setSubmitted(false)}
                            >
                                Book Another
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className={styles.card} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

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
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Phone Number</label>
                                <input type="tel" required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', background: 'var(--secondary)' }} />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Department</label>
                                <select style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', background: 'var(--secondary)' }}>
                                    <option>General Medicine</option>
                                    <option>Cardiology</option>
                                    <option>Neurology</option>
                                    <option>Pediatrics</option>
                                    <option>Orthopedics</option>
                                </select>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Preferred Date</label>
                                <input type="date" required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', background: 'var(--secondary)' }} />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message (Optional)</label>
                                <textarea rows={3} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', background: 'var(--secondary)' }}></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                                Request Appointment
                            </button>
                        </form>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
