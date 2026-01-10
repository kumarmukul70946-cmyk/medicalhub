"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Phone,
  CheckCircle,
  ArrowRight,
  Heart,
  Stethoscope
} from "lucide-react";
import Chatbot from "@/components/Chatbot";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroText}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#dbeafe', color: '#2563eb', padding: '0.5rem 1rem', borderRadius: '999px', marginBottom: '1.5rem', fontWeight: '500', fontSize: '0.9rem' }}>
              <CheckCircle size={16} /> World-Class Healthcare
            </div>
            <h1 className={styles.heroTitle}>
              Our Medical <br />
              <span style={{ color: 'var(--primary)' }}>Services</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Comprehensive healthcare solutions designed to meet all your medical needs with excellence and compassion.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/book-appointment">
                <button className="btn btn-primary">
                  Book Appointment
                </button>
              </Link>
              <Link href="#services">
                <button className="btn btn-outline">
                  Learn More
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className={styles.heroImageWrapper}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.heroCard}>
              <img
                src="/hero-image.png"
                alt="Medical Team"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  background: 'white',
                  padding: '1rem',
                  borderRadius: '1rem',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'black'
                }}
              >
                <div style={{ background: '#dcfce7', padding: '0.5rem', borderRadius: '50%', color: '#16a34a' }}>
                  <Heart size={24} fill="#16a34a" />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: '500' }}>Trusted by</p>
                  <p style={{ fontWeight: 'bold' }}>10,000+ Patients</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className={styles.services}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">Comprehensive Healthcare Services</h2>
          <p className="section-subtitle">From routine checkups to specialized treatments, we provide complete medical care</p>
        </div>

        <div className={styles.servicesGrid}>
          {[
            {
              icon: <Activity size={32} />,
              title: "Emergency & Critical Care",
              desc: "24/7 emergency services with state-of-the-art facilities and expert medical teams.",
              link: "/services/emergency"
            },
            {
              icon: <Stethoscope size={32} />,
              title: "Specialized Treatments",
              desc: "Advanced medical specialties including cardiology, neurology, and more.",
              link: "/services/specialized"
            },
            {
              icon: <Heart size={32} />,
              title: "Preventive Care",
              desc: "Comprehensive health checkups and preventive medicine for long-term wellness.",
              link: "/services/preventive"
            }
          ].map((service, i) => (
            <Link key={i} href={service.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <motion.div
                className={styles.serviceCard}
                whileHover={{ y: -5 }}
              >
                <div className={styles.iconBox}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>{service.title}</h3>
                <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>{service.desc}</p>
                <div style={{ color: 'var(--primary)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Learn More <ArrowRight size={16} />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Emergency Section */}
      <section className={styles.emergency} style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Background Image Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/emergency-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          zIndex: 0
        }} />

        <div className={styles.emergencyContent} style={{ position: 'relative', zIndex: 1 }}>
          <div className={styles.emergencyText}>
            <div style={{ display: 'inline-block', padding: '0.25rem 1rem', background: 'rgba(220, 38, 38, 0.2)', color: '#f87171', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 'bold', border: '1px solid rgba(220, 38, 38, 0.3)', marginBottom: '1rem' }}>
              24/7 AVAILABILITY
            </div>
            <h2 className={styles.emergencyTitle}>Emergency & Critical Care</h2>
            <p style={{ color: '#cbd5e1', fontSize: '1.125rem', lineHeight: '1.7' }}>
              Our emergency department is staffed round-the-clock with experienced emergency physicians, nurses, and support staff. We're equipped to handle all types of medical emergencies with speed and expertise.
            </p>
            <div className={styles.emergencyList}>
              {['Ambulance Services', 'Expert Emergency Team', 'Advanced Equipment', 'Emergency Contact'].map((item, i) => (
                <div key={i} className={styles.emergencyItem}>
                  <CheckCircle size={20} color="#4ade80" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <button className={styles.emergencyBtn}>
              <Phone size={24} />
              +91 9102774718
            </button>
          </div>

          <div className={styles.emergencyServices}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Services</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { name: 'Cardiology & Cardiac Surgery', link: '/services/cardiology' },
                { name: 'Neurology & Neurosurgery', link: '/services/neurology' },
                { name: 'Orthopedics', link: '/services/orthopedics' },
                { name: 'Pediatrics', link: '/services/pediatrics' }
              ].map((item, i) => (
                <Link key={i} href={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', transition: 'background 0.2s' }} className="hover:bg-white/10">
                    <span>{item.name}</span>
                    <ArrowRight size={16} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className={styles.packages}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">Preventive Care Packages</h2>
          <p className="section-subtitle">Proactive healthcare for long-term wellness</p>
        </div>

        <div className={styles.packagesGrid}>
          {[
            { name: "Basic Health Check", price: "₹1,500", features: ["Essential screening", "Blood tests", "Vital signs", "Basic Consultation"] },
            { name: "Comprehensive", price: "₹5,000", features: ["Advanced diagnostics", "Specialist consultation", "Cardiac screening", "Full blood work"], popular: true },
            { name: "Executive Check", price: "₹8,000", features: ["Premier package", "Personalized Plan", "Genetic Screening", "Priority support"] }
          ].map((pkg, i) => (
            <div key={i} className={`${styles.packageCard} ${pkg.popular ? styles.packagePopular : ''}`}>
              {pkg.popular && <span className={styles.popularBadge}>Most Popular</span>}
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{pkg.name}</h3>
              <div className={styles.price}>{pkg.price}</div>
              <ul className={styles.features}>
                {pkg.features.map((f, j) => (
                  <li key={j} className={styles.feature}>
                    <CheckCircle size={16} color="var(--accent)" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href={`/payment?plan=${encodeURIComponent(pkg.name)}&price=${encodeURIComponent(pkg.price)}`} style={{ width: '100%' }}>
                <button className={`btn ${pkg.popular ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%' }}>
                  Choose Plan
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <Chatbot />
    </main>
  );
}
