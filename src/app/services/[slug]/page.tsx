"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    Activity,
    Heart,
    Brain,
    Bone,
    User,
    Calendar,
    ArrowRight,
    Pill,
    FlaskConical,
    FileText,
    CheckCircle,
    Clock
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

interface Service {
    title: string;
    icon: React.ReactNode;
    description: string;
    features: string[];
    doctors: string[];
    stats: {
        patients: string;
        surgeries: string;
        experience: string;
    };
}

// Mock Database of Services
const servicesData: Record<string, Service> = {
    "cardiology": {
        title: "Cardiology & Cardiac Surgery",
        icon: <Heart size={48} className="text-red-500" />,
        description: "Our Cardiology department offers comprehensive care for heart-related conditions. From non-invasive diagnostics to complex open-heart surgeries, our team of world-class cardiologists ensures the best outcomes.",
        features: [
            "24/7 Cardiac Emergency Unit",
            "Angiography & Angioplasty",
            "Pacemaker Implantation",
            "Open Heart Bypass Surgery",
            "Heart Failure Management"
        ],
        doctors: ["Dr. Sarah Johnson", "Dr. Robert Smith"],
        stats: {
            patients: "15k+",
            surgeries: "5000+",
            experience: "20+ Years"
        }
    },
    "neurology": {
        title: "Neurology & Neurosurgery",
        icon: <Brain size={48} className="text-blue-500" />,
        description: "We provide advanced diagnosis and treatment for disorders of the nervous system. Our neurosurgeons are equipped with the latest technology for brain and spine surgeries.",
        features: [
            "Stroke Management Unit",
            "Epilepsy & Seizure Clinic",
            "Brain Tumor Surgery",
            "Spine Surgery & Rehab",
            "Parkinson's Disease Care"
        ],
        doctors: ["Dr. Michael Chen", "Dr. Emily Davis"],
        stats: {
            patients: "10k+",
            surgeries: "3000+",
            experience: "15+ Years"
        }
    },
    "orthopedics": {
        title: "Orthopedics & Joint Replacement",
        icon: <Bone size={48} className="text-orange-500" />,
        description: "Get back to moving freely with our specialized orthopedic care. We excel in joint replacements, sports injuries, and trauma care with minimally invasive techniques.",
        features: [
            "Total Knee & Hip Replacement",
            "Sports Medicine & Arthroscopy",
            "Fracture & Trauma Care",
            "Spine & Back Pain Therapy",
            "Pediatric Orthopedics"
        ],
        doctors: ["Dr. James Wilson", "Dr. Linda Brown"],
        stats: {
            patients: "20k+",
            surgeries: "8000+",
            experience: "25+ Years"
        }
    },
    "pediatrics": {
        title: "Pediatrics & Child Care",
        icon: <User size={48} className="text-green-500" />,
        description: "Compassionate care for your little ones. Our pediatric department handles everything from routine vaccinations to complex neonatal intensive care.",
        features: [
            "Vaccination & Immunization",
            "Neonatal ICU (NICU)",
            "Pediatric Surgery",
            "Growth & Development Monitoring",
            "Child Nutrition Counseling"
        ],
        doctors: ["Dr. Emily Davis", "Dr. Mark White"],
        stats: {
            patients: "30k+",
            surgeries: "N/A",
            experience: "18+ Years"
        }
    },
    "emergency": {
        title: "Emergency & Critical Care",
        icon: <Activity size={48} className="text-red-600" />,
        description: "Our 24/7 Emergency Department provides immediate, life-saving care with a rapid response team. We are equipped with advanced life support systems and trauma centers.",
        features: [
            "24/7 Ambulance Service",
            "Trauma & Accident Care",
            "Cardiac Emergency Unit",
            "Ventilator Support",
            "Poison Control Center"
        ],
        doctors: ["Dr. James Wilson", "Dr. Roberts"],
        stats: {
            patients: "50k+",
            surgeries: "12k+",
            experience: "24/7 Ops"
        }
    },
    "preventive": {
        title: "Preventive Care & Wellness",
        icon: <Heart size={48} className="text-green-600" />,
        description: "Prevention is better than cure. Our comprehensive health checkup packages are designed to detect early signs of lifestyle diseases and ensure long-term wellness.",
        features: [
            "Full Body Checkups",
            "Diabetes Screening",
            "Cancer Screening",
            "Lifestyle Counseling",
            "Vaccinations for Adults"
        ],
        doctors: ["Dr. Roberts", "Dr. Linda Brown"],
        stats: {
            patients: "25k+",
            surgeries: "N/A",
            experience: "15+ Years"
        }
    },
    "pharmacy": {
        title: "24/7 Digital Pharmacy",
        icon: <Pill size={48} className="text-pink-500" />,
        description: "Get genuine medicines delivered to your doorstep in minutes. Our digital pharmacy ensures you never miss a dose with easy uploads and automated refills.",
        features: [
            "2-Hour Home Delivery",
            "100% Genuine Medicines",
            "Automated Refill Reminders",
            "Prescription Vault",
            "Deep Discounts on Monthly Orders"
        ],
        doctors: ["Dr. Mark White", "Pharmacist Ravi"],
        stats: {
            patients: "200k+",
            surgeries: "N/A",
            experience: "Verified Quality"
        }
    },
    "lab-tests": {
        title: "Diagnostic Lab Services",
        icon: <FlaskConical size={48} className="text-purple-500" />,
        description: "Accurate diagnostics from the comfort of your home. We provide a full range of tests with digital reports delivered directly to your profile.",
        features: [
            "Home Sample Collection",
            "NABL Accredited Labs",
            "Next-Day Digital Reports",
            "Blood, Urine & DNA Tests",
            "Radiology & Imaging Support"
        ],
        doctors: ["Dr. Sarah Johnson", "Lab Specialist Anita"],
        stats: {
            patients: "80k+",
            surgeries: "N/A",
            experience: "Precision Driven"
        }
    },
    "health-wallet": {
        title: "Digital Health Wallet",
        icon: <FileText size={48} className="text-cyan-500" />,
        description: "Your entire medical life in one secure place. No more carrying files; access your records, prescriptions, and billing history anytime, anywhere.",
        features: [
            "Encrypted Record Storage",
            "Family Profile Management",
            "Quick Sharing with Doctors",
            "Billing & Claims Tracking",
            "Universal Health ID Integration"
        ],
        doctors: ["Support Team", "Data Privacy Officer"],
        stats: {
            patients: "120k+",
            surgeries: "N/A",
            experience: "Level 4 Security"
        }
    },
    "follow-ups": {
        title: "Smart Recovery & Follow-ups",
        icon: <Calendar size={48} className="text-teal-500" />,
        description: "Healthcare doesn't end with a visit. Our smart system tracks your recovery and ensures you follow your post-consultation plan perfectly.",
        features: [
            "Automated Checkup Reminders",
            "Recovery Milestone Tracking",
            "Direct Chat with Assistants",
            "Vitals Monitoring Alerts",
            "Personalized Health Tips"
        ],
        doctors: ["Dr. Roberts", "Care Manager Neha"],
        stats: {
            patients: "45k+",
            surgeries: "N/A",
            experience: "Outcome Focused"
        }
    },
    "specialized": {
        title: "Specialized Medical Treatments",
        icon: <Activity size={48} className="text-blue-600" />,
        description: "We offer advanced medical treatments across various specialties. From non-invasive procedures to complex surgeries, our expert teams ensure world-class care.",
        features: [
            "Cardiology & Cardiac Surgery",
            "Neurology & Neurosurgery",
            "Orthopedics & Joint Care",
            "Gastroenterology",
            "Nephrology & Dialysis"
        ],
        doctors: ["Dr. Sarah Johnson", "Dr. Michael Chen"],
        stats: {
            patients: "100k+",
            surgeries: "25k+",
            experience: "30+ Years"
        }
    }
};

export default function ServiceDetail() {
    const params = useParams();
    const slug = (Array.isArray(params?.slug) ? params.slug[0] : params?.slug) || "cardiology";
    const service = servicesData[slug.toLowerCase()] || servicesData["cardiology"];

    return (
        <main className="bg-slate-50 min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-white pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-blue-50/50 blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="h-24 w-24 rounded-[2rem] bg-blue-50 flex items-center justify-center text-blue-600 mb-8 shadow-xl shadow-blue-100"
                        >
                            {service.icon}
                        </motion.div>

                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6"
                        >
                            {service.title}
                        </motion.h1>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg lg:text-xl text-slate-500 font-medium leading-relaxed"
                        >
                            {service.description}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <div className="bg-white border-y border-slate-100 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-12 lg:gap-32 text-center">
                        <div>
                            <p className="text-3xl font-black text-blue-600 mb-1">{service.stats.patients}</p>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Happy Patients</p>
                        </div>
                        <div>
                            <p className="text-3xl font-black text-blue-600 mb-1">{service.stats.surgeries}</p>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Successful Surgeries</p>
                        </div>
                        <div>
                            <p className="text-3xl font-black text-blue-600 mb-1">{service.stats.experience}</p>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Years of Experience</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-16">
                        {/* Treatments */}
                        <div className="lg:col-span-3">
                            <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-4">
                                <Activity className="text-blue-600" size={32} />
                                Treatments & Procedures
                            </h2>

                            <div className="grid sm:grid-cols-1 gap-4">
                                {service.features.map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ x: -20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="group p-6 rounded-3xl bg-white border-2 border-slate-50 hover:border-blue-100 hover:shadow-xl transition-all flex items-center gap-4"
                                    >
                                        <div className="h-10 w-10 rounded-xl bg-green-50 text-green-500 flex items-center justify-center shrink-0">
                                            <CheckCircle size={20} strokeWidth={3} />
                                        </div>
                                        <span className="text-lg font-bold text-slate-700">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar: Doctors & Booking */}
                        <div className="lg:col-span-2">
                            <div className="sticky top-32 space-y-8">
                                <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 -mr-10 -mt-10 h-40 w-40 bg-blue-600 rounded-full blur-3xl opacity-20" />

                                    <h3 className="text-2xl font-black mb-8 relative">Consulting Specialists</h3>
                                    <div className="space-y-6 relative">
                                        {service.doctors.map((doc, i) => (
                                            <div key={i} className="flex items-center gap-4">
                                                <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl font-black text-blue-400">
                                                    {doc.split(' ').pop()?.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-extrabold text-lg">{doc}</p>
                                                    <p className="text-sm font-bold text-blue-400 uppercase tracking-widest">Senior Consultant</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-10 pt-10 border-t border-white/10 space-y-6">
                                        <div className="flex items-center justify-between text-sm">
                                            <div className="flex items-center gap-3 font-bold text-white/60">
                                                <Clock size={18} className="text-blue-400" />
                                                Mon — Fri
                                            </div>
                                            <span className="font-black">9:00 AM — 6:00 PM</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <div className="flex items-center gap-3 font-bold text-white/60">
                                                <Calendar size={18} className="text-blue-400" />
                                                Sat — Sun
                                            </div>
                                            <span className="font-black">10:00 AM — 2:00 PM</span>
                                        </div>

                                        <Link href="/book-appointment" className="block">
                                            <button className="w-full py-4 rounded-2xl bg-blue-600 text-white font-black text-lg hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                                                Book Appointment
                                                <ArrowRight size={20} />
                                            </button>
                                        </Link>
                                    </div>
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
