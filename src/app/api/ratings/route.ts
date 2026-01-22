import dbConnect from "@/lib/mongodb";
import Rating from "@/models/Rating";
import Doctor from "@/models/Doctor";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        await dbConnect();
        const { searchParams } = new URL(req.url);
        const doctorId = searchParams.get('doctorId');

        let query = {};
        if (doctorId) {
            query = { doctorId };
        }

        const ratings = await Rating.find(query).sort({ date: -1 });
        return NextResponse.json(ratings);
    } catch (error) {
        const err = error as Error;
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        await dbConnect();
        const body = await req.json();
        const rating = await Rating.create(body);

        // Update doctor average rating
        const ratings = await Rating.find({ doctorId: body.doctorId });
        const avgRating = ratings.reduce((acc, curr) => acc + curr.stars, 0) / ratings.length;

        await Doctor.findByIdAndUpdate(body.doctorId, {
            rating: avgRating.toFixed(1),
            reviews: ratings.length
        });

        return NextResponse.json(rating, { status: 201 });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
