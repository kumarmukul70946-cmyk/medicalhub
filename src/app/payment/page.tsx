"use client";

import { useState, Suspense, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/app/page.module.css";
import { Lock, CheckCircle, ShieldCheck, ArrowRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

declare global {
    interface Window {
        Razorpay: any;
    }
}

function PaymentContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const planName = searchParams.get('plan') || 'General Consultation';
    const planPrice = searchParams.get('price') || '500';
    const numericPrice = parseInt(planPrice.replace(/[^0-9]/g, '')) || 500;
    const totalPrice = Math.round(numericPrice * 1.18); // Including GST

    const [processing, setProcessing] = useState(false);
    const [success, setSuccess] = useState(false);
    const [scriptLoaded, setScriptLoaded] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        script.onload = () => setScriptLoaded(true);
        document.body.appendChild(script);
    }, []);

    const handleRazorpayPayment = async () => {
        if (!scriptLoaded) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        setProcessing(true);

        try {
            // 1. Create order on server
            const res = await fetch("/api/razorpay/order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: totalPrice }),
            });

            const order = await res.json();

            if (order.error) throw new Error(order.error);

            // 2. Handle Demo Mode Fallback
            if (order.demo) {
                console.warn("Running in Demo Mode. Simulating Razorpay Modal...");
                setTimeout(() => {
                    setSuccess(true);
                    setTimeout(() => router.push('/dashboard'), 3000);
                }, 1500);
                return;
            }

            // 3. Open Razorpay Checkout Modal
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_placeholder",
                amount: order.amount,
                currency: order.currency,
                name: "HealthHub Medical",
                description: `Payment for ${planName}`,
                order_id: order.id,
                handler: function (response: any) {
                    // This function runs on payment success
                    console.log("Payment Success:", response);
                    setSuccess(true);
                    setTimeout(() => router.push('/dashboard'), 3000);
                },
                prefill: {
                    name: "Test User",
                    email: "test@example.com",
                    contact: "9999999999",
                },
                theme: {
                    color: "#2563EB",
                },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (error) {
            console.error("Payment failed:", error);
            alert("Something went wrong with the payment process.");
        } finally {
            setProcessing(false);
        }
    };

    if (success) {
        return (
            <main className={styles.main}>
                <Navbar />
                <section className={styles.section} style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className={styles.card}
                        style={{ textAlign: 'center', padding: '4rem', maxWidth: '540px', background: '#FFFFFF', borderRadius: '24px', boxShadow: 'var(--shadow-deep)' }}
                    >
                        <div style={{ margin: '0 auto 2rem', width: '100px', height: '100px', borderRadius: '50%', background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <CheckCircle size={56} color="#22c55e" />
                        </div>
                        <h1 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '1rem', color: '#0F172A', letterSpacing: '-0.02em' }}>Transaction Successful</h1>
                        <p style={{ color: '#64748B', fontSize: '1.125rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                            Your booking for <strong>{planName}</strong> is confirmed. A summary has been sent to your email.
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', color: '#2563EB', fontWeight: '600' }}>
                            <Loader2 className="animate-spin" size={20} />
                            Redirecting to your patient dashboard...
                        </div>
                    </motion.div>
                </section>
                <Footer />
            </main>
        );
    }

    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.section} style={{ padding: '140px 1.5rem 100px', backgroundColor: '#FFFFFF' }}>
                <div className="container" style={{ maxWidth: '1100px' }}>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>

                        {/* Summary Section */}
                        <div style={{ order: 2 }}>
                            <div className={styles.card} style={{ background: '#F8FAFC', padding: '2.5rem', borderRadius: '24px', border: '1px solid #E2E8F0', boxShadow: 'var(--shadow-soft)' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '2rem', color: '#0F172A' }}>Service Summary</h3>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ color: '#64748B' }}>Medical Plan</span>
                                        <span style={{ fontWeight: '700', color: '#0F172A' }}>{planName}</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ color: '#64748B' }}>Base Amount</span>
                                        <span style={{ fontWeight: '700', color: '#0F172A' }}>₹{numericPrice}</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ color: '#64748B' }}>Taxes (GST 18%)</span>
                                        <span style={{ fontWeight: '700', color: '#0F172A' }}>₹{Math.round(numericPrice * 0.18)}</span>
                                    </div>

                                    <div style={{ margin: '1rem 0', borderTop: '1px solid #E2E8F0' }} />

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0F172A' }}>Total Payable</span>
                                        <span style={{ fontSize: '1.75rem', fontWeight: '900', color: '#2563EB' }}>₹{totalPrice}</span>
                                    </div>
                                </div>

                                <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', display: 'flex', gap: '1rem' }}>
                                    <ShieldCheck size={32} color="#22c55e" style={{ flexShrink: 0 }} />
                                    <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: '1.5' }}>
                                        Secure end-to-end encrypted payment powered by Razorpay. Your data is handled with 256-bit SSL security.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Checkout Action Section */}
                        <div style={{ order: 1 }}>
                            <div style={{ marginBottom: '3rem' }}>
                                <h1 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '1rem', color: '#0F172A', letterSpacing: '-0.04em' }}>Complete Your <br />Booking</h1>
                                <p style={{ fontSize: '1.125rem', color: '#64748B', lineHeight: '1.6', maxWidth: '400px' }}>
                                    Secure your appointment with our world-class medical specialists in just a few clicks.
                                </p>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#0F172A', fontWeight: '600' }}>
                                    <div style={{ background: '#2563EB', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem' }}>1</div>
                                    Choose Payment Gateway
                                </div>

                                <div
                                    style={{ padding: '2rem', borderRadius: '20px', border: '2px solid #2563EB', background: 'rgba(37, 99, 235, 0.02)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                                        <img src="https://razorpay.com/favicon.png" alt="Razorpay" style={{ width: '32px' }} />
                                        <div>
                                            <h4 style={{ fontWeight: '800', color: '#0F172A' }}>Razorpay Secure</h4>
                                            <p style={{ fontSize: '0.85rem', color: '#64748B' }}>UPI, Cards, Netbanking & Wallets</p>
                                        </div>
                                    </div>
                                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '5px solid #2563EB' }} />
                                </div>

                                <button
                                    onClick={handleRazorpayPayment}
                                    disabled={processing || !scriptLoaded}
                                    className="btn btn-primary"
                                    style={{
                                        width: '100%',
                                        padding: '1.25rem',
                                        fontSize: '1.125rem',
                                        borderRadius: '16px',
                                        color: '#FFFFFF',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.75rem',
                                        border: 'none'
                                    }}
                                >
                                    {processing ? (
                                        <>
                                            <Loader2 className="animate-spin" size={22} />
                                            Initializing...
                                        </>
                                    ) : (
                                        <>
                                            Pay ₹{totalPrice} Now
                                            <ArrowRight size={22} />
                                        </>
                                    )}
                                </button>

                                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', opacity: 0.5 }}>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" style={{ height: '14px' }} />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" style={{ height: '20px' }} />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" style={{ height: '18px' }} />
                                </div>
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
