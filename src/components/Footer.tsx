import Link from "next/link";
import { Activity, MapPin, Phone } from "lucide-react";
import styles from "@/app/page.module.css";

export default function Footer() {
    return (
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
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/doctors">Doctors</Link></li>
                        <li><Link href="/book-appointment">Book Appointment</Link></li>
                        <li><Link href="/login">Login</Link></li>
                    </ul>
                </div>

                <div className={styles.footerCol}>
                    <h4>Services</h4>
                    <ul className={styles.footerList}>
                        <li>Emergency Care</li>
                        <li>Cardiology</li>
                        <li>Neurology</li>
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
                            <span>+91 9102774718</span>
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
    );
}
