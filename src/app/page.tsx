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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className={styles.badge}>
              <CheckCircle size={14} className={styles.badgeIcon} /> World-Class Healthcare
            </div>
            <h1 className={styles.heroTitle}>
              Our Medical <br />
              <span>Services</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Comprehensive healthcare solutions designed to meet all your medical needs with excellence and compassion.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/book-appointment">
                <button className="btn btn-primary">
                  Book Appointment
                  <ArrowRight size={18} />
                </button>
              </Link>
              <Link href="#services">
                <button className="btn btn-outline">
                  Our Services
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className={styles.heroImageWrapper}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className={styles.heroCard}>
              <img
                src="/hero-image.png"
                alt="Medical Team"
                loading="eager"
              />

              {/* Floating Badge */}
              <motion.div
                className={styles.floatingBadge}
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                <div className={styles.floatingIcon}>
                  <Heart size={28} fill="currentColor" />
                </div>
                <div>
                  <p className={styles.floatingTextLabel}>Trusted by</p>
                  <p className={styles.floatingTextValue}>10,000+ Patients</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className={styles.services}>
        <div className={styles.packagesHeader}>
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
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
                <div className={styles.serviceLink}>
                  Learn More <ArrowRight size={16} />
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
