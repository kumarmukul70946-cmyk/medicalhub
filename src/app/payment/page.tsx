"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
    ShieldCheck,
    ArrowLeft,
    CheckCircle2,
    Lock,
    Stethoscope,
    User,
    Loader2,
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

declare global {
    interface Window {
        Razorpay: new (options: unknown) => { open: () => void };
    }
}

function PaymentContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [processing, setProcessing] = useState(false);
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [success, setSuccess] = useState(false);

    const planName = searchParams.get("plan") || "General Consultation";
    const priceText = searchParams.get("price") || "₹499";
    const rawPrice = parseInt(priceText.replace(/[^\d]/g, ""));

    const GST_RATE = 0.18;
    const PLATFORM_FEE = 19;

    const baseAmount = rawPrice;
    const gstAmount = Math.round(baseAmount * GST_RATE);
    const totalAmount = baseAmount + gstAmount + PLATFORM_FEE;

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        script.onload = () => setScriptLoaded(true);
        document.body.appendChild(script);

        return () => {
            const existingScript = document.body.querySelector(`script[src*="razorpay"]`);
            if (existingScript) document.body.removeChild(existingScript);
        };
    }, []);

    const handlePayment = async () => {
        try {
            setProcessing(true);

            // 1. Create Order
            const orderRes = await fetch("/api/razorpay/order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: totalAmount }),
            });

            const order = await orderRes.json();
            if (order.error) throw new Error(order.error);

            // 2. Handle Demo Mode Fallback
            if (order.demo) {
                console.warn("Project in Demo Mode. Simulating Razorpay...");
                setTimeout(() => {
                    setSuccess(true);
                    setTimeout(() => router.push('/dashboard'), 3000);
                }, 2000);
                return;
            }

            // 3. Open Razorpay Modal
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_placeholder",
                amount: order.amount,
                currency: order.currency,
                name: "MedicalHub",
                description: `Payment for ${planName}`,
                image: "/logo.png",
                order_id: order.id,
                handler: async function (response: { razorpay_payment_id: string; razorpay_order_id: string; razorpay_signature: string }) {
                    // Verify payment
                    const verifyRes = await fetch("/api/razorpay/verify", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(response),
                    });
                    const verifyData = await verifyRes.json();
                    if (verifyData.success) {
                        setSuccess(true);
                        setTimeout(() => router.push('/dashboard'), 3000);
                    } else {
                        alert("Verification Failed!");
                    }
                },
                prefill: {
                    name: "Mukul Anand",
                    email: "mukul@gmail.com",
                    contact: "9102774718",
                },
                theme: { color: "#2563EB" },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (error) {
            console.error("Payment error:", error);
            alert("Something went wrong with the payment process.");
        } finally {
            setProcessing(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center p-4">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center"
                >
                    <div className="h-24 w-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 size={64} strokeWidth={3} />
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 mb-4">Payment Successful!</h1>
                    <p className="text-slate-500 font-bold mb-8 text-lg">Your appointment has been confirmed. Redirecting to dashboard...</p>
                    <Loader2 className="animate-spin text-blue-600 mx-auto" size={40} />
                </motion.div>
            </div>
        );
    }

    return (
        <main className="bg-slate-50 min-h-screen">
            <Navbar />

            <section className="pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-12">
                        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 font-black text-sm uppercase tracking-widest hover:text-blue-600 transition-colors mb-4">
                            <ArrowLeft size={16} /> Back to Plans
                        </Link>
                        <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                            Confirm your <span className="text-blue-600">Booking</span>
                        </h1>
                        <p className="mt-4 text-slate-500 font-bold text-lg">Secure your health slot with trust and precision.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10">
                        {/* Details Column */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Patient Info */}
                            <div className="bg-white rounded-[2.5rem] border-2 border-slate-100 p-8 shadow-sm">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                        <User size={24} strokeWidth={2.5} />
                                    </div>
                                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">Patient Details</h2>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                        <input title="Full Name" type="text" defaultValue="Mukul Anand" className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-4 font-bold text-slate-700 focus:bg-white focus:border-blue-600 transition-all outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                                        <input title="Phone Number" type="text" defaultValue="+91 9102774718" className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-4 font-bold text-slate-700 focus:bg-white focus:border-blue-600 transition-all outline-none" />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                                        <input title="Email Address" type="email" defaultValue="mukul@gmail.com" className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-4 font-bold text-slate-700 focus:bg-white focus:border-blue-600 transition-all outline-none" />
                                    </div>
                                </div>
                            </div>

                            {/* Booking Info */}
                            <div className="bg-white rounded-[2.5rem] border-2 border-slate-100 p-8 shadow-sm">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="h-12 w-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
                                        <Stethoscope size={24} strokeWidth={2.5} />
                                    </div>
                                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">Appointment Info</h2>
                                </div>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                                    <div className="p-4 rounded-3xl bg-slate-50/50 border border-slate-100">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Service</p>
                                        <p className="text-sm font-black text-slate-800">{planName}</p>
                                    </div>
                                    <div className="p-4 rounded-3xl bg-slate-50/50 border border-slate-100">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Date</p>
                                        <p className="text-sm font-black text-slate-800 leading-tight">Tomorrow, Jan 23</p>
                                    </div>
                                    <div className="p-4 rounded-3xl bg-slate-50/50 border border-slate-100">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Slot</p>
                                        <p className="text-sm font-black text-slate-800">11:30 AM</p>
                                    </div>
                                    <div className="p-4 rounded-3xl bg-slate-50/50 border border-slate-100">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Mode</p>
                                        <p className="text-sm font-black text-blue-600 uppercase">Hospital Visit</p>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Banner */}
                            <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-200">
                                <div className="flex items-center gap-6">
                                    <div className="h-14 w-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                                        <ShieldCheck size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black">Data Encryption Standard</h3>
                                        <p className="opacity-80 font-bold text-sm">Your medical data and payments are 256-bit AES encrypted.</p>
                                    </div>
                                </div>
                                <div className="flex -space-x-3 isolate">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="h-12 w-12 rounded-full border-2 border-blue-600 bg-blue-100 flex items-center justify-center text-xs font-black text-blue-600 ring-2 ring-white">
                                            {i}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Summary Card */}
                        <div className="space-y-6">
                            <div className="bg-white rounded-[2.5rem] border-2 border-slate-100 p-8 shadow-2xl relative sticky top-32">
                                <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">Payment Summary</h3>

                                <div className="space-y-4 mb-10 pb-10 border-b border-slate-50 font-bold">
                                    <div className="flex justify-between items-center text-slate-500">
                                        <span>Base Consultation</span>
                                        <span className="text-slate-900">₹{baseAmount}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-slate-500">
                                        <span>GST (18%)</span>
                                        <span className="text-slate-900">₹{gstAmount}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-slate-500">
                                        <span>Platform Fee</span>
                                        <span className="text-slate-900">₹{PLATFORM_FEE}</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-end mb-10">
                                    <div>
                                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Total Payable</p>
                                        <p className="text-4xl font-black text-slate-900 tracking-tight leading-none">₹{totalAmount}</p>
                                    </div>
                                    <div className="h-10 w-10 flex items-center justify-center text-blue-600 bg-blue-50 rounded-xl">
                                        <Lock size={20} strokeWidth={2.5} />
                                    </div>
                                </div>

                                <button
                                    onClick={handlePayment}
                                    disabled={processing || !scriptLoaded}
                                    title="Securely pay for your appointment"
                                    className="w-full py-5 rounded-2xl bg-blue-600 text-white font-black text-lg shadow-xl shadow-blue-100 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                                >
                                    {processing ? (
                                        <>
                                            <Loader2 className="animate-spin" size={24} />
                                            Initializing...
                                        </>
                                    ) : (
                                        <>
                                            Pay ₹{totalAmount} Securely
                                            <ArrowRight size={22} />
                                        </>
                                    )}
                                </button>

                                <div className="mt-8 flex items-center justify-center gap-4 opacity-40 grayscale">
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" width={40} height={16} className="h-4 w-auto" />
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" width={40} height={24} className="h-6 w-auto" />
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png" alt="UPI" width={60} height={16} className="h-4 w-auto" />
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
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <Loader2 className="animate-spin text-blue-600" size={48} />
            </div>
        }>
            <PaymentContent />
        </Suspense>
    );
}
