"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/app/page.module.css";
import { CreditCard, Lock, CheckCircle, Smartphone, Globe, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

function PaymentContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const planName = searchParams.get('plan') || 'Health Package';
    const planPrice = searchParams.get('price') || '0';

    const [paymentMethod, setPaymentMethod] = useState('card');
    const [processing, setProcessing] = useState(false);
    const [success, setSuccess] = useState(false);

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        setProcessing(true);

        // Simulate payment processing
        setTimeout(() => {
            setProcessing(false);
            setSuccess(true);
            // Redirect after showing success
            setTimeout(() => router.push('/dashboard'), 3000);
        }, 2000);
    };

    if (success) {
        return (
            <main className={styles.main} style={{ background: 'var(--background)' }}>
                <Navbar />
                <section className={styles.section} style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className={styles.card}
                        style={{ textAlign: 'center', padding: '3rem', maxWidth: '500px', background: 'var(--card)' }}
                    >
                        <div style={{ margin: '0 auto 1.5rem', width: '80px', height: '80px', borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <CheckCircle size={48} color="#16a34a" />
                        </div>
                        <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--foreground)' }}>Payment Successful!</h1>
                        <p style={{ color: 'var(--secondary-foreground)', marginBottom: '1.5rem' }}>
                            Your transaction for <strong>{planName}</strong> was completed successfully.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--secondary-foreground)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            <Lock size={14} /> Redirecting to dashboard...
                        </p>
                    </motion.div>
                </section>
                <Footer />
            </main>
        );
    }

    return (
        <main className={styles.main} style={{ background: 'var(--background)' }}>
            <Navbar />

            <section className={styles.section} style={{ paddingTop: '100px', paddingBottom: '60px' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--foreground)' }}>Secure Checkout</h1>
                        <p style={{ color: 'var(--secondary-foreground)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            <Lock size={16} color="#16a34a" /> SSL Encrypted Transaction
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Order Summary */}
                        <div style={{ order: 2 }}>
                            <div className={styles.card} style={{ position: 'sticky', top: '100px', background: 'var(--card)', color: 'var(--card-foreground)' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>Order Summary</h3>

                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <span style={{ color: 'var(--secondary-foreground)' }}>Package</span>
                                    <span style={{ fontWeight: '600' }}>{planName}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <span style={{ color: 'var(--secondary-foreground)' }}>Consultation Fee</span>
                                    <span style={{ fontWeight: '600', color: '#16a34a' }}>Free</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                    <span style={{ color: 'var(--secondary-foreground)' }}>Taxes</span>
                                    <span style={{ fontWeight: '600' }}>₹{(parseInt(planPrice.replace(/[^0-9]/g, '')) * 0.18).toFixed(0)}</span>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '2px dashed var(--border)', paddingTop: '1rem', marginTop: '1rem' }}>
                                    <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Total</span>
                                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                                        ₹{(parseInt(planPrice.replace(/[^0-9]/g, '')) * 1.18).toFixed(0)}
                                    </span>
                                </div>

                                <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '0.5rem', display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                                    <ShieldCheck size={24} color="var(--primary)" style={{ flexShrink: 0 }} />
                                    <p style={{ fontSize: '0.85rem', color: 'var(--secondary-foreground)' }}>
                                        Your health data is protected by bank-grade encryption security protocols.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Payment Details */}
                        <div style={{ order: 1 }}>
                            <div className={styles.card} style={{ background: 'var(--card)', color: 'var(--card-foreground)' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Payment Method</h3>

                                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                                    <button
                                        onClick={() => setPaymentMethod('card')}
                                        style={{
                                            flex: 1,
                                            padding: '1rem',
                                            borderRadius: '0.5rem',
                                            border: `2px solid ${paymentMethod === 'card' ? 'var(--primary)' : 'var(--border)'}`,
                                            background: paymentMethod === 'card' ? 'rgba(14, 165, 233, 0.05)' : 'transparent',
                                            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', fontWeight: '600',
                                            color: 'var(--foreground)'
                                        }}
                                    >
                                        <CreditCard size={24} /> Card
                                    </button>
                                    <button
                                        onClick={() => setPaymentMethod('upi')}
                                        style={{
                                            flex: 1,
                                            padding: '1rem',
                                            borderRadius: '0.5rem',
                                            border: `2px solid ${paymentMethod === 'upi' ? 'var(--primary)' : 'var(--border)'}`,
                                            background: paymentMethod === 'upi' ? 'rgba(14, 165, 233, 0.05)' : 'transparent',
                                            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', fontWeight: '600',
                                            color: 'var(--foreground)'
                                        }}
                                    >
                                        <Smartphone size={24} /> UPI
                                    </button>
                                    <button
                                        onClick={() => setPaymentMethod('netbanking')}
                                        style={{
                                            flex: 1,
                                            padding: '1rem',
                                            borderRadius: '0.5rem',
                                            border: `2px solid ${paymentMethod === 'netbanking' ? 'var(--primary)' : 'var(--border)'}`,
                                            background: paymentMethod === 'netbanking' ? 'rgba(14, 165, 233, 0.05)' : 'transparent',
                                            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', fontWeight: '600',
                                            color: 'var(--foreground)'
                                        }}
                                    >
                                        <Globe size={24} /> Net Banking
                                    </button>
                                </div>

                                <form onSubmit={handlePayment} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    {paymentMethod === 'card' && (
                                        <>
                                            <div>
                                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Card Number</label>
                                                <div style={{ position: 'relative' }}>
                                                    <input
                                                        type="text"
                                                        placeholder="0000 0000 0000 0000"
                                                        required
                                                        style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: '0.5rem', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)' }}
                                                    />
                                                    <CreditCard size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--secondary-foreground)' }} />
                                                </div>
                                            </div>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                                <div>
                                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Expiry Date</label>
                                                    <input type="text" placeholder="MM/YY" required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)' }} />
                                                </div>
                                                <div>
                                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>CVV</label>
                                                    <input type="password" placeholder="123" required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)' }} />
                                                </div>
                                            </div>
                                            <div>
                                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Card Holder Name</label>
                                                <input type="text" placeholder="John Doe" required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)' }} />
                                            </div>
                                        </>
                                    )}

                                    {paymentMethod === 'upi' && (
                                        <div>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>UPI ID</label>
                                            <input type="text" placeholder="username@upi" required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)' }} />
                                            <p style={{ fontSize: '0.85rem', color: 'var(--secondary-foreground)', marginTop: '0.5rem' }}>Google Pay, PhonePe, Paytm, BHIM supported.</p>
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        style={{ marginTop: '1rem', width: '100%', padding: '1rem', fontSize: '1.1rem' }}
                                        disabled={processing}
                                    >
                                        {processing ? 'Processing Payment...' : `Pay ₹${(parseInt(planPrice.replace(/[^0-9]/g, '')) * 1.18).toFixed(0)}`}
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default function PaymentPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PaymentContent />
        </Suspense>
    );
}
