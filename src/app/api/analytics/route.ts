import dbConnect from "@/lib/mongodb";
import TeleSession from "@/models/TeleSession";
import Rating from "@/models/Rating";
import Prescription from "@/models/Prescription";
import Doctor from "@/models/Doctor";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await dbConnect();

        const totalDoctors = await Doctor.countDocuments();
        const totalSessions = await TeleSession.countDocuments();
        const activeSessions = await TeleSession.countDocuments({ status: 'active' });
        const totalPrescriptions = await Prescription.countDocuments();
        const averageRating = await Rating.aggregate([
            { $group: { _id: null, avgStars: { $avg: "$stars" } } }
        ]);

        const stats = {
            totalDoctors,
            totalSessions,
            activeSessions,
            totalPrescriptions,
            avgRating: averageRating.length > 0 ? averageRating[0].avgStars.toFixed(1) : 0,
            recentSessions: await TeleSession.find().sort({ createdAt: -1 }).limit(5),
        };

        return NextResponse.json(stats);
    } catch (error) {
        const err = error as Error;
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
