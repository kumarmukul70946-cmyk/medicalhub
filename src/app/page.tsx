"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Phone,
  CheckCircle,
  ArrowRight,
  Heart,
  Stethoscope,
  Calendar
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className={styles.badge}>
              Professional Healthcare Services
            </div>
            <h1 className={styles.heroTitle}>
              Your Trusted Partner <br />
              <span>in Health & Wellness</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Experience world-class healthcare with top-rated doctors and cutting-edge technology. Simple, reliable, and patient-centered.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/book-appointment">
                <button className="btn btn-primary">
                  Book Appointment
                  <Calendar size={18} />
                </button>
              </Link>
              <Link href="#services">
                <button className="btn btn-outline" style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}>
                  Explore Services
                  <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Hero Illustration Placeholder - Modern Clean Look */}
          <motion.div
            className={styles.heroImageWrapper}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.heroCard} style={{ border: 'none', boxShadow: 'none', background: 'transparent' }}>
              <div style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', borderRadius: '2rem', padding: '3rem', position: 'relative' }}>
                <img
                  src="/hero-image.png"
                  alt="Medical Professional"
                  loading="eager"
                  style={{ borderRadius: '1.5rem', boxShadow: 'var(--shadow-deep)' }}
                />
                <div style={{ position: 'absolute', top: '-20px', right: '-20px', padding: '1rem', background: 'white', borderRadius: '1rem', boxShadow: 'var(--shadow-soft)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ background: '#22c55e', width: '12px', height: '12px', borderRadius: '50%' }} />
                  <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>24/7 Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className={styles.services}>
        <div className={styles.packagesHeader}>
          <h2 className="section-title">Comprehensive Healthcare</h2>
          <p className="section-subtitle" style={{ fontSize: '1.1rem', color: '#64748b', textAlign: 'center', marginBottom: '4rem' }}>
            We provide a wide range of medical services to ensure your family&apos;s health and safety.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {[
            {
              icon: <Activity size={32} />,
              title: "Emergency Care",
              desc: "Immediate medical attention for critical situations available round the clock.",
              link: "/services/emergency"
            },
            {
              icon: <Stethoscope size={32} />,
              title: "Specialized Doctors",
              desc: "Consult with our expert specialists across various medical disciplines.",
              link: "/services/specialized"
            },
            {
              icon: <Heart size={32} />,
              title: "Routine Checkups",
              desc: "Preventive health screenings and routine examinations for all ages.",
              link: "/services/preventive"
            }
          ].map((service, i) => (
            <Link key={i} href={service.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <motion.div
                className={styles.serviceCard}
                whileHover={{ y: -10 }}
              >
                <div className={styles.iconBox} style={{ background: '#eff6ff', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                  {service.icon}
                </div>
                <h3 className={styles.serviceTitle} style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>{service.title}</h3>
                <p className={styles.serviceDesc} style={{ fontSize: '1rem', color: '#64748b', marginBottom: '2rem' }}>{service.desc}</p>
                <div className={styles.serviceLink} style={{ color: 'var(--primary)', fontWeight: '600' }}>
                  View Details <ArrowRight size={18} />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Emergency Section */}
      <section className={styles.emergency}>
        <div className={styles.emergencyOverlay} />

        <div className={styles.emergencyContent}>
          <div className={styles.emergencyText}>
            <div className={styles.emergencyBadge}>
              24/7 AVAILABILITY
            </div>
            <h2 className={styles.emergencyTitle}>Emergency & Critical Care</h2>
            <p className={styles.emergencyDesc}>
              Our emergency department is staffed round-the-clock with experienced emergency physicians, nurses, and support staff. We&apos;re equipped to handle all types of medical emergencies with speed and expertise.
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
            <h3 className={styles.emergencyServicesTitle}>Services</h3>
            <div className={styles.emergencyServicesList}>
              {[
                { name: 'Cardiology & Cardiac Surgery', link: '/services/cardiology' },
                { name: 'Neurology & Neurosurgery', link: '/services/neurology' },
                { name: 'Orthopedics', link: '/services/orthopedics' },
                { name: 'Pediatrics', link: '/services/pediatrics' }
              ].map((item, i) => (
                <Link key={i} href={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className={styles.miniCard}>
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
        <div className={styles.packagesHeader}>
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
              <h3 className={styles.packageName}>{pkg.name}</h3>
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
