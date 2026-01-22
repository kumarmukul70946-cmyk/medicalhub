"use client";

import { useEffect, useState } from "react";
import { Download, Loader2, Calendar } from "lucide-react";
import jsPDF from "jspdf";

interface Medication {
    name: string;
    dosage: string;
    duration: string;
    instructions: string;
}

interface Prescription {
    _id: string;
    doctorName: string;
    date: string;
    medications: Medication[];
    notes?: string;
}

export default function PrescriptionList({ email }: { email: string }) {
    const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/prescriptions?email=${email}`)
            .then((res) => res.json())
            .then((data) => {
                setPrescriptions(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [email]);

    const downloadPDF = (p: Prescription) => {
        const doc = new jsPDF();
        doc.setFontSize(22);
        doc.text("MedicalHub Digital Prescription", 20, 20);
        doc.setFontSize(12);
        doc.text(`Doctor: ${p.doctorName}`, 20, 40);
        doc.text(`Patient: ${email}`, 20, 50);
        doc.text(`Date: ${new Date(p.date).toLocaleDateString()}`, 20, 60);

        doc.text("Medications:", 20, 80);
        p.medications.forEach((m, i) => {
            doc.text(`${i + 1}. ${m.name} - ${m.dosage} (${m.duration})`, 30, 90 + (i * 10));
            if (m.instructions) {
                doc.text(`Instructions: ${m.instructions}`, 35, 95 + (i * 10));
            }
        });

        if (p.notes) {
            doc.text("Notes:", 20, 150);
            doc.text(p.notes, 30, 160);
        }

        doc.save(`prescription-${p._id}.pdf`);
    };

    if (loading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin text-blue-600" /></div>;

    return (
        <div className="space-y-4">
            {prescriptions.length === 0 ? (
                <p className="text-slate-400 text-sm font-bold italic">No prescriptions found.</p>
            ) : (
                prescriptions.map((p) => (
                    <div key={p._id} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-transparent hover:border-slate-100 transition-all">
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center text-indigo-500 shadow-sm font-black text-[10px] uppercase">
                                PDF
                            </div>
                            <div>
                                <p className="font-black text-slate-800 text-sm">Dr. {p.doctorName}</p>
                                <p className="text-[10px] font-bold text-slate-400 tracking-wider flex items-center gap-1 uppercase">
                                    <Calendar size={10} /> {new Date(p.date).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => downloadPDF(p)}
                            className="h-10 w-10 flex items-center justify-center rounded-xl bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                        >
                            <Download size={18} />
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}
