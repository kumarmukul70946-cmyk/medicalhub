import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();

        // If in Demo Mode (simulated success)
        if (razorpay_order_id.includes("order_demo")) {
            return NextResponse.json({ success: true, message: "Demo Mode Success" });
        }

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
            .update(body.toString())
            .digest("hex");

        const isAuthentic = expectedSignature === razorpay_signature;

        if (isAuthentic) {
            // Here you would typically update your database to mark the appointment as paid
            return NextResponse.json({ success: true, message: "Payment verified successfully" });
        } else {
            return NextResponse.json({ success: false, message: "Invalid signature, verification failed" }, { status: 400 });
        }
    } catch (error) {
        console.error("Razorpay verification error:", error);
        return NextResponse.json({ success: false, message: "Internal server error during verification" }, { status: 500 });
    }
}
