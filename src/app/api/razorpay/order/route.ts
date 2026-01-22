import Razorpay from "razorpay";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { amount, currency = "INR" } = await req.json();

        const keyId = process.env.RAZORPAY_KEY_ID;
        const keySecret = process.env.RAZORPAY_KEY_SECRET;

        // Check if using placeholder keys or missing keys
        if (!keyId || keyId.includes("placeholder") || !keySecret) {
            return NextResponse.json({
                id: "order_demo_" + Math.random().toString(36).substring(7),
                amount: amount * 100,
                currency,
                demo: true
            });
        }

        const razorpayInstance = new Razorpay({
            key_id: keyId,
            key_secret: keySecret,
        });

        const options = {
            amount: amount * 100,
            currency,
            receipt: "receipt_" + Math.random().toString(36).substring(7),
        };

        const order = await razorpayInstance.orders.create(options);
        return NextResponse.json(order);
    } catch (error) {
        console.error("Razorpay error:", error);
        return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
    }
}
