import dbConnect from "@/lib/mongodb";
import TeleSession from "@/models/TeleSession";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        await dbConnect();
        const { searchParams } = new URL(req.url);
        const email = searchParams.get('email');

        let query = {};
        if (email) {
            query = { patientEmail: email };
        }

        const sessions = await TeleSession.find(query).sort({ startTime: -1 });
        return NextResponse.json(sessions);
    } catch (error) {
        const err = error as Error;
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        await dbConnect();
        const body = await req.json();
        const session = await TeleSession.create({
            ...body,
            meetingId: Math.random().toString(36).substring(7).toUpperCase()
        });
        return NextResponse.json(session, { status: 201 });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
