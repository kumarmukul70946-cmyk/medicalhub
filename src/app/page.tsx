"use client";

import HomeSections from "@/components/HomeSections";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <HomeSections />

      {/* RETAINING PACKAGES SECTION (Styled with Tailwind to match) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-black text-blue-600 uppercase tracking-widest">Pricing Plans</p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">Care Packages</h2>
            <p className="mt-4 text-slate-500 font-medium max-w-2xl mx-auto text-lg">Proactive healthcare for long-term family wellness</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Health",
                price: "₹1,500",
                features: ["Essential screening", "Blood tests", "Vital signs", "Basic Consultation"],
                popular: false
              },
              {
                name: "Comprehensive",
                price: "₹5,000",
                features: ["Advanced diagnostics", "Specialist consultation", "Cardiac screening", "Full blood work"],
                popular: true
              },
              {
                name: "Executive Check",
                price: "₹8,000",
                features: ["Premier package", "Personalized Plan", "Genetic Screening", "Priority support"],
                popular: false
              }
            ].map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-[2.5rem] p-10 border-2 transition-all duration-300 ${pkg.popular
                  ? 'border-blue-600 bg-white shadow-2xl scale-105 z-10'
                  : 'border-slate-100 bg-slate-50/30 hover:border-slate-200'
                  }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-black uppercase tracking-widest px-6 py-2 rounded-full">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-black text-slate-900 mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-black text-slate-900">{pkg.price}</span>
                  <span className="text-slate-400 font-bold text-sm">/ checkup</span>
                </div>

                <ul className="space-y-4 mb-10">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-600 font-semibold">
                      <CheckCircle size={18} className="text-blue-600 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href={`/payment?plan=${encodeURIComponent(pkg.name)}&price=${encodeURIComponent(pkg.price)}`}>
                  <button className={`w-full py-4 rounded-2xl font-black text-lg transition-all ${pkg.popular
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1'
                    : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600'
                    }`}>
                    Select Plan
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </main>
  );
}
