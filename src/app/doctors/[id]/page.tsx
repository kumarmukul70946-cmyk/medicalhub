"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/app/page.module.css";
import { User, Activity, Clock, ShieldCheck, Mail, Phone, MapPin, Award } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Mock Data
const doctorsData: any = {
    "dr-sarah-johnson": {
        name: "Dr. Sarah Johnson",
        specialty: "Cardiologist",
        exp: "15 Years Experience",
        availability: "Mon - Fri",
        education: "MD - Cardiology, Johns Hopkins University",
        languages: "English, Spanish",
        about: "Dr. Sarah Johnson is a renowned Cardiologist with over 15 years of experience in diagnosing and treating complex heart conditions. She specializes in interventional cardiology and has performed over 1,000 successful procedures."
    },
    "dr-michael-chen": {
        name: "Dr. Michael Chen",
        specialty: "Neurologist",
        exp: "12 Years Experience",
        availability: "Tue - Sat",
        education: "DM - Neurology, Harvard Medical School",
        languages: "English, Mandarin",
        about: "Dr. Michael Chen is an expert Neurologist focusing on stroke management and epilepsy. He is dedicated to providing patient-centered care using the latest neurological advancements."
    },
    "dr-emily-davis": {
        name: "Dr. Emily Davis",
        specialty: "Pediatrician",
        exp: "10 Years Experience",
        availability: "Mon - Sat",
        education: "MD - Pediatrics, University of Pennsylvania",
        languages: "English, French",
        about: "Dr. Emily Davis loves working with children and ensuring their healthy growth and development. She provides comprehensive pediatric care from newborn issues to adolescent health."
    },
    "dr-james-wilson": {
        name: "Dr. James Wilson",
        specialty: "Orthopedic Surgeon",
        exp: "20 Years Experience",
        availability: "Mon - Fri",
        education: "MS - Orthopedics, Stanford University",
        languages: "English, German",
        about: "Dr. James Wilson is a leading Orthopedic Surgeon specializing in joint replacement and sports injuries. He uses minimally invasive techniques to ensure faster recovery for his patient."
    },
    "dr-priya-patel": {
        name: "Dr. Priya Patel",
        specialty: "Dermatologist",
        exp: "8 Years Experience",
        availability: "Wed - Sun",
        education: "MD - Dermatology, Yale University",
        languages: "English, Hindi, Gujarati",
        about: "Dr. Priya Patel is a skilled Dermatologist treating a wide range of skin, hair, and nail disorders. She is known for her aesthetic treatments and compassionate patient care."
    },
    "dr-roberts": {
        name: "Dr. Roberts",
        specialty: "General Physician",
        exp: "25 Years Experience",
        availability: "Daily",
        education: "MBBS, MD - Internal Medicine",
        languages: "English",
        about: "Dr. Roberts is a highly experienced General Physician dedicated to primary care and preventative medicine. He has a holistic approach to treating chronic diseases."
    }
};

export default function DoctorProfile() {
    const params = useParams();
    const slug = (Array.isArray(params?.id) ? params.id[0] : params?.id) || "";
    // Simple normalization to match data keys
    const doctorKey = slug || "dr-sarah-johnson";
    const doctor = doctorsData[doctorKey] || doctorsData["dr-sarah-johnson"];

    return (
        <main className={styles.main} style={{ background: 'var(--background)' }}>
            <Navbar />

            <section className={styles.section} style={{ paddingTop: '140px' }}>
                <div className="container">
                    <div className={styles.card} style={{ maxWidth: '900px', margin: '0 auto', overflow: 'hidden' }}>

                        {/* Header */}
                        <div style={{ padding: '2rem', background: 'var(--secondary)', borderBottom: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', textAlign: 'center' }}>
                            <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                <User size={60} color="var(--primary)" />
                            </div>
                            <div>
                                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{doctor.name}</h1>
                                <p style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: '500' }}>{doctor.specialty}</p>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary-foreground)' }}>
                                    <ShieldCheck size={18} /> {doctor.exp}
                                </span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary-foreground)' }}>
                                    <Clock size={18} /> {doctor.availability}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div style={{ padding: '2rem', display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>

                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <User size={24} color="var(--primary)" /> About Doctor
                                </h3>
                                <p style={{ lineHeight: '1.7', color: 'var(--secondary-foreground)', marginBottom: '2rem' }}>
                                    {doctor.about}
                                </p>

                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <Award size={24} color="var(--primary)" /> Education
                                </h3>
                                <p style={{ lineHeight: '1.7', color: 'var(--secondary-foreground)', marginBottom: '2rem' }}>
                                    {doctor.education}
                                </p>

                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <Activity size={24} color="var(--primary)" /> Languages
                                </h3>
                                <p style={{ lineHeight: '1.7', color: 'var(--secondary-foreground)' }}>
                                    {doctor.languages}
                                </p>
                            </div>

                            <div style={{ background: 'var(--background)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)', height: 'fit-content' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Key Details</h3>

                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                                    <li style={{ display: 'flex', gap: '1rem' }}>
                                        <Mail size={20} color="var(--primary)" />
                                        <div>
                                            <p style={{ fontWeight: '500' }}>Email</p>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--secondary-foreground)' }}>{doctor.name.toLowerCase().replace(/\s/g, '.').replace('dr.', '')}@healthhub.com</p>
                                        </div>
                                    </li>
                                    <li style={{ display: 'flex', gap: '1rem' }}>
                                        <Phone size={20} color="var(--primary)" />
                                        <div>
                                            <p style={{ fontWeight: '500' }}>Phone</p>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--secondary-foreground)' }}>+91 9102774718</p>
                                        </div>
                                    </li>
                                    <li style={{ display: 'flex', gap: '1rem' }}>
                                        <MapPin size={20} color="var(--primary)" />
                                        <div>
                                            <p style={{ fontWeight: '500' }}>Location</p>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--secondary-foreground)' }}>Block A, OPD 2</p>
                                        </div>
                                    </li>
                                </ul>

                                <Link href="/book-appointment">
                                    <button className="btn btn-primary" style={{ width: '100%' }}>Book Appointment</button>
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
