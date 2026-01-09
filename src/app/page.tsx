"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  Phone,
  Calendar,
  CheckCircle,
  ArrowRight,
  Menu, X, Heart, ShieldCheck, Stethoscope, MapPin
} from "lucide-react";
import { useState } from "react";
import Chatbot from "@/components/Chatbot";
import styles from "./page.module.css";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className={styles.main}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <Activity className="text-primary" size={32} />
            <span>HealthHub</span>
          </div>

          <div className={styles.navLinks}>
            <Link href="#" className={styles.navLink}>Home</Link>
            <Link href="#about" className={styles.navLink}>About</Link>
            <Link href="#services" className={styles.navLink}>Services</Link>
            <Link href="#doctors" className={styles.navLink}>Doctors</Link>
            <Link href="#contact" className={styles.navLink}>Contact</Link>
          </div>

          <div className={styles.navActions}>
            <button className="btn btn-outline">Patient Login</button>
            <button className="btn btn-primary">
              <Calendar size={18} style={{ marginRight: '0.5rem' }} />
              Book Appointment
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

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
              <button className="btn btn-primary">
                Book Appointment
              </button>
              <button className="btn btn-outline">
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div
            className={styles.heroImageWrapper}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.heroCard}>
              <div style={{ textAlign: 'center' }}>
                <Heart size={64} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Trusted by</h3>
                <p style={{ fontSize: '1.25rem', color: '#64748b' }}>10,000+ Patients</p>
              </div>
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
              desc: "24/7 emergency services with state-of-the-art facilities and expert medical teams."
            },
            {
              icon: <Stethoscope size={32} />,
              title: "Specialized Treatments",
              desc: "Advanced medical specialties including cardiology, neurology, and more."
            },
            {
              icon: <Heart size={32} />,
              title: "Preventive Care",
              desc: "Comprehensive health checkups and preventive medicine for long-term wellness."
            }
          ].map((service, i) => (
            <motion.div
              key={i}
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
          ))}
        </div>
      </section>

      {/* Emergency Section */}
      <section className={styles.emergency}>
        <div className={styles.emergencyContent}>
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
              +91 6200721151
            </button>
          </div>

          <div className={styles.emergencyServices}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Services</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['Cardiology & Cardiac Surgery', 'Neurology & Neurosurgery', 'Orthopedics', 'Pediatrics'].map((item, i) => (
                <div key={i} style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>{item}</span>
                  <ArrowRight size={16} />
                </div>
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
              <button className={`btn ${pkg.popular ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%' }}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerCol}>
            <div className={styles.logo} style={{ marginBottom: '1rem', color: 'white' }}>
              <Activity />
              <span>HealthHub</span>
            </div>
            <p style={{ lineHeight: '1.6', opacity: 0.8 }}>
              Providing exceptional healthcare services with compassion and cutting-edge technology.
            </p>
          </div>

          <div className={styles.footerCol}>
            <h4>Quick Links</h4>
            <ul className={styles.footerList}>
              <li><Link href="#">Home</Link></li>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>Services</h4>
            <ul className={styles.footerList}>
              <li>Emergency Care</li>
              <li>Cardiology</li>
              <li>Aurology</li>
              <li>Pediatrics</li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>Contact Info</h4>
            <ul className={styles.footerList}>
              <li style={{ display: 'flex', gap: '0.75rem' }}>
                <MapPin size={20} color="var(--primary)" />
                <span>HealthHub Medical, Vadodara, 391760</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem' }}>
                <Phone size={20} color="var(--primary)" />
                <span>+91 6200721151</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem' }}>
                <span>@</span>
                <span>info@healthhub.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          © 2026 HealthHub Medical. All rights reserved.
        </div>
      </footer>

      <Chatbot />
    </main>
  );
}
