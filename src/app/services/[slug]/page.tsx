"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/app/page.module.css";
import {
    Activity,
    Heart,
    Brain,
    Bone,
    User,
    Stethoscope,
    CheckCircle,
    Clock,
    Calendar
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
    "specialized": {
        title: "Specialized Medical Treatments",
        icon: <Stethoscope size={48} className="text-blue-600" />,
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
    // Ensure slug is a string (it could be string | string[])
    const slug = (Array.isArray(params?.slug) ? params.slug[0] : params?.slug) || "cardiology";

    // Normalized lookup (handle casing if needed, though usually slugs are lower)
    const service = servicesData[slug.toLowerCase()] || servicesData["cardiology"];

    return (
        <main className={styles.main} style={{ background: 'var(--background)' }}>
            <Navbar />

            {/* Hero Section for Service */}
            <section className={styles.hero} style={{ padding: '140px 1rem 80px', background: '#ffffff' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        style={{ display: 'inline-flex', padding: '1.5rem', background: 'var(--card)', borderRadius: '50%', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', marginBottom: '2rem', color: 'var(--primary)' }}
                    >
                        {service.icon}
                    </motion.div>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--foreground)' }}
                    >
                        {service.title}
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: '1.2rem', color: 'var(--secondary-foreground)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}
                    >
                        {service.description}
                    </motion.p>
                </div>
            </section>

            {/* Stats Section */}
            <section style={{ padding: '40px 1rem', background: '#ffffff', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>{service.stats.patients}</p>
                        <p style={{ color: 'var(--secondary-foreground)', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase' }}>Happy Patients</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>{service.stats.surgeries}</p>
                        <p style={{ color: 'var(--secondary-foreground)', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase' }}>Successful Surgeries</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>{service.stats.experience}</p>
                        <p style={{ color: 'var(--secondary-foreground)', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase' }}>Experience</p>
                    </div>
                </div>
            </section>

            {/* Details Grid */}
            <section className={styles.section} style={{ padding: '80px 1rem' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>

                        {/* Key Features */}
                        <div>
                            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Activity color="var(--primary)" /> Treatments & Procedures
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {service.features.map((feature: string, i: number) => (
                                    <motion.div
                                        key={i}
                                        initial={{ x: -20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'var(--card)', borderRadius: '0.5rem', border: '1px solid var(--border)' }}
                                    >
                                        <CheckCircle size={20} color="#16a34a" />
                                        <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Doctors & Booking */}
                        <div>
                            <div className={styles.card} style={{ position: 'sticky', top: '100px', background: 'var(--card)', padding: '2rem' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Expert Doctors</h3>
                                <div style={{ marginBottom: '2rem' }}>
                                    {service.doctors.map((doc: string, i: number) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <User size={20} />
                                            </div>
                                            <div>
                                                <p style={{ fontWeight: '600' }}>{doc}</p>
                                                <p style={{ fontSize: '0.85rem', color: 'var(--secondary-foreground)' }}>Senior Consultant</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Clock size={18} /> OPD Hours
                                    </h4>
                                    <p style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ color: 'var(--secondary-foreground)' }}>Mon - Fri</span>
                                        <strong>9:00 AM - 6:00 PM</strong>
                                    </p>
                                    <p style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ color: 'var(--secondary-foreground)' }}>Sat - Sun</span>
                                        <strong>10:00 AM - 2:00 PM</strong>
                                    </p>

                                    <Link href="/book-appointment" style={{ width: '100%', display: 'block' }}>
                                        <button className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
                                            <Calendar size={20} style={{ marginRight: '0.5rem' }} /> Book Appointment
                                        </button>
                                    </Link>
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
