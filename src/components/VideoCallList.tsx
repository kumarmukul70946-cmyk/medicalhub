"use client";

import { useEffect, useState } from "react";
import { Video, Clock, Loader2, PlayCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

interface TeleSession {
    _id: string;
    doctorName: string;
    startTime: string;
    status: 'pending' | 'active' | 'completed' | 'cancelled';
    meetingId: string;
}

export default function VideoCallList({ email }: { email: string }) {
    const [sessions, setSessions] = useState<TeleSession[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/telesessions?email=${email}`)
            .then((res) => res.json())
            .then((data) => {
                setSessions(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [email]);

    if (loading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin text-blue-600" /></div>;

    return (
        <div className="space-y-4">
            {sessions.length === 0 ? (
                <div className="p-6 rounded-2xl bg-blue-50 border-2 border-dashed border-blue-200 text-center">
                    <Video size={24} className="mx-auto text-blue-400 mb-2" />
                    <p className="text-blue-600 font-bold text-xs uppercase tracking-widest">No Active Consultations</p>
                </div>
            ) : (
                sessions.map((s) => (
                    <div key={s._id} className="p-4 rounded-2xl bg-white border-2 border-slate-100 hover:border-blue-200 transition-all">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                <p className="font-black text-slate-800 text-sm">{s.doctorName}</p>
                            </div>
                            <div className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase rounded-lg">
                                {s.status}
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                            <span className="flex items-center gap-1"><Clock size={12} /> {new Date(s.startTime).toLocaleTimeString()}</span>
                            <span className="flex items-center gap-1">ID: {s.meetingId}</span>
                        </div>

                        <div className="flex gap-2">
                            <button
                                className="flex-1 py-2 bg-blue-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                                onClick={() => window.open(`/telemedicine/${s.meetingId}`, '_blank')}
                            >
                                <PlayCircle size={14} /> Join Now
                            </button>
                            <button className="px-3 py-2 bg-slate-100 text-slate-400 rounded-xl hover:bg-red-50 hover:text-red-600 transition-all">
                                <XCircle size={14} />
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
