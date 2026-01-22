"use client";

import { useState, useEffect } from "react";
import { Star, Send, Loader2, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Rating {
    _id: string;
    patientName: string;
    stars: number;
    comment: string;
    date: string;
}

export default function RatingSystem({ doctorId }: { doctorId: string }) {
    const [ratings, setRatings] = useState<Rating[]>([]);
    const [loading, setLoading] = useState(true);
    const [stars, setStars] = useState(0);
    const [comment, setComment] = useState("");
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        fetch(`/api/ratings?doctorId=${doctorId}`)
            .then(res => res.json())
            .then(data => {
                setRatings(Array.isArray(data) ? data : []);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [doctorId]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (stars === 0) return alert("Please select a rating");

        setSubmitting(true);
        try {
            const res = await fetch("/api/ratings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    doctorId,
                    patientName: "Mukul Anand", // In a real app, get from auth
                    stars,
                    comment
                })
            });

            if (res.ok) {
                const newRating = await res.json();
                setRatings([newRating, ...ratings]);
                setStars(0);
                setComment("");
            }
        } catch (err) {
            console.error(err);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="space-y-12">
            {/* Feedback Form */}
            <div className="bg-slate-50 rounded-[2.5rem] p-8 border-2 border-slate-100">
                <h3 className="text-xl font-black text-slate-900 mb-6 font-display">Rate your experience</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <button
                                key={s}
                                type="button"
                                title={`Rate ${s} stars`}
                                onClick={() => setStars(s)}
                                className="transition-transform active:scale-90"
                            >
                                <Star
                                    size={32}
                                    className={`${s <= stars ? "text-yellow-500 fill-yellow-500" : "text-slate-200"
                                        } transition-colors`}
                                />
                            </button>
                        ))}
                    </div>

                    <div className="relative">
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Share your thoughts about the consultation..."
                            className="w-full rounded-2xl border-2 border-slate-100 p-4 text-sm font-bold text-slate-700 outline-none focus:border-blue-600 transition-all min-h-[120px]"
                        />
                    </div>

                    <button
                        disabled={submitting}
                        className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black text-sm flex items-center justify-center gap-3 hover:bg-blue-700 transition-all disabled:opacity-50"
                    >
                        {submitting ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                        Submit Feedback
                    </button>
                </form>
            </div>

            {/* Reviews List */}
            <div className="space-y-6">
                <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                    Patient Stories <span className="text-blue-600">({ratings.length})</span>
                </h3>

                {loading ? (
                    <div className="flex justify-center py-10"><Loader2 className="animate-spin text-blue-600" /></div>
                ) : ratings.length === 0 ? (
                    <p className="text-slate-400 font-bold italic">No reviews yet. Be the first to share your experience!</p>
                ) : (
                    <div className="grid gap-6">
                        <AnimatePresence>
                            {ratings.map((r, i) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={r._id || i}
                                    className="bg-white p-6 rounded-3xl border-2 border-slate-50 shadow-sm"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                                                <User size={20} />
                                            </div>
                                            <div>
                                                <p className="font-black text-slate-900 text-sm">{r.patientName}</p>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                                    {new Date(r.date).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-0.5">
                                            {[1, 2, 3, 4, 5].map((s) => (
                                                <Star
                                                    key={s}
                                                    size={14}
                                                    className={`${s <= r.stars ? "text-yellow-500 fill-yellow-500" : "text-slate-100"}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-slate-500 font-bold text-sm leading-relaxed">{r.comment}</p>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}
            </div>
        </div>
    );
}
