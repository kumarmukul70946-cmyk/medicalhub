"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
    Mic, MicOff, Video as VideoIcon, VideoOff, PhoneOff,
    Settings, Users, MessageSquare, Shield, Maximize2,
    MoreVertical, Share2, Loader2
} from "lucide-react";

export default function TelemedicineRoom() {
    const params = useParams();
    const router = useRouter();
    const [isMuted, setIsMuted] = useState(false);
    const [isVideoOff, setIsVideoOff] = useState(false);
    const [status, setStatus] = useState("Connecting...");
    const [timer, setTimer] = useState(0);
    const localVideoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const videoElement = localVideoRef.current;
        // Simulate camera access
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then(stream => {
                if (videoElement) {
                    videoElement.srcObject = stream;
                }
                setStatus("Secure Connection Established");
            })
            .catch(err => {
                console.error("Camera access denied", err);
                setStatus("Camera/Mic Access Required");
            });

        const interval = setInterval(() => {
            setTimer(prev => prev + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
            // Stop camera on unmount
            if (videoElement?.srcObject) {
                (videoElement.srcObject as MediaStream).getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleEndCall = () => {
        router.push("/dashboard");
    };

    // Use params if needed, or just acknowledge it
    const meetingId = params?.id;

    return (
        <main className="bg-slate-950 min-h-screen text-white overflow-hidden flex flex-col">
            {/* Top Header */}
            <header className="p-6 flex items-center justify-between bg-gradient-to-b from-black/50 to-transparent absolute top-0 w-full z-20">
                <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center">
                        <Shield size={20} className="text-white" />
                    </div>
                    <div>
                        <h1 className="font-black text-lg tracking-tight">MedicalHub Secure Consultation</h1>
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{status} | ID: {meetingId}</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl font-black text-sm">
                        {formatTime(timer)}
                    </div>
                    <button title="Settings" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <Settings size={20} />
                    </button>
                    <button title="More Options" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <MoreVertical size={20} />
                    </button>
                </div>
            </header>

            {/* Main Video Grid */}
            <div className="flex-1 relative flex items-center justify-center p-4 pt-24 pb-32">
                <div className="w-full h-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 relative">

                    {/* Remote Patient (Doctor View Simulator) */}
                    <div className="relative rounded-[2.5rem] bg-slate-900 overflow-hidden border-2 border-slate-800 shadow-2xl group">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="h-24 w-24 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                                    <Loader2 className="text-blue-600 animate-spin" size={48} />
                                </div>
                                <p className="text-slate-500 font-bold">Waiting for Doctor to join...</p>
                            </div>
                        </div>
                        <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/40 backdrop-blur-md rounded-xl font-black text-xs uppercase tracking-[0.2em]">
                            Dr. Remote Participant
                        </div>
                    </div>

                    {/* Local Stream */}
                    <div className="relative rounded-[2.5rem] bg-slate-800 overflow-hidden border-2 border-slate-700 shadow-2xl group">
                        <video
                            ref={localVideoRef}
                            autoPlay
                            playsInline
                            muted
                            className={`h-full w-full object-cover ${isVideoOff ? 'hidden' : 'block'}`}
                        />
                        {isVideoOff && (
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
                                <div className="h-24 w-24 bg-slate-800 text-slate-500 rounded-full flex items-center justify-center text-3xl font-black">
                                    M
                                </div>
                            </div>
                        )}
                        <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/40 backdrop-blur-md rounded-xl font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-blue-500" />
                            You (Mukul Anand)
                        </div>
                        <div className="absolute top-6 right-6 flex gap-2">
                            <button title="Toggle Fullscreen" className="p-2 bg-black/40 backdrop-blur-md rounded-lg hover:bg-black/60 transition-colors">
                                <Maximize2 size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Controls */}
            <footer className="p-8 absolute bottom-0 w-full flex items-center justify-center gap-6 z-20">
                <div className="flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 shadow-2xl">
                    <button
                        title={isMuted ? "Unmute Mic" : "Mute Mic"}
                        onClick={() => setIsMuted(!isMuted)}
                        className={`h-14 w-14 rounded-2xl flex items-center justify-center transition-all ${isMuted ? 'bg-rose-600 text-white shadow-lg shadow-rose-900/40' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                    >
                        {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
                    </button>
                    <button
                        title={isVideoOff ? "Turn Video On" : "Turn Video Off"}
                        onClick={() => setIsVideoOff(!isVideoOff)}
                        className={`h-14 w-14 rounded-2xl flex items-center justify-center transition-all ${isVideoOff ? 'bg-rose-600 text-white shadow-lg shadow-rose-900/40' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                    >
                        {isVideoOff ? <VideoOff size={24} /> : <VideoIcon size={24} />}
                    </button>

                    <div className="w-px h-8 bg-white/10 mx-2" />

                    <button title="Participants" className="h-14 w-14 rounded-2xl bg-white/10 hover:bg-white/20 text-white transition-all">
                        <Users size={24} className="mx-auto" />
                    </button>
                    <button title="Chat" className="h-14 w-14 rounded-2xl bg-white/10 hover:bg-white/20 text-white transition-all">
                        <MessageSquare size={24} className="mx-auto" />
                    </button>
                    <button title="Share Screen" className="h-14 w-14 rounded-2xl bg-white/10 hover:bg-white/20 text-white transition-all">
                        <Share2 size={24} className="mx-auto" />
                    </button>

                    <div className="w-px h-8 bg-white/10 mx-2" />

                    <button
                        title="End Call"
                        onClick={handleEndCall}
                        className="h-14 px-8 bg-rose-600 hover:bg-rose-700 text-white rounded-2xl font-black uppercase tracking-widest flex items-center gap-3 transition-all shadow-xl shadow-rose-900/20"
                    >
                        <PhoneOff size={24} />
                        End Call
                    </button>
                </div>
            </footer>

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)] pointer-events-none" />
        </main>
    );
}
