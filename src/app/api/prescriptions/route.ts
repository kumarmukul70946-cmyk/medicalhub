import dbConnect from "@/lib/mongodb";
import Prescription from "@/models/Prescription";
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

        const prescriptions = await Prescription.find(query).sort({ date: -1 });
        return NextResponse.json(prescriptions);
    } catch (error) {
        const err = error as Error;
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        await dbConnect();
        const body = await req.json();
        const prescription = await Prescription.create(body);
        return NextResponse.json(prescription, { status: 201 });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
