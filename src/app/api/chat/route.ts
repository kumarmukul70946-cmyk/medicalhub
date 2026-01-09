import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { message } = await req.json();
        const lowerMsg = message.toLowerCase();

        let reply = "I'm not sure about that. Please contact our support.";

        if (lowerMsg.includes('emergency')) {
            reply = "For emergencies, please call +91 6200721151 immediately or visit our 24/7 Emergency Department.";
        } else if (lowerMsg.includes('appointment') || lowerMsg.includes('book')) {
            reply = "You can book an appointment through our website's 'Book Appointment' section or call us at +91 6200721151.";
        } else if (lowerMsg.includes('service') || lowerMsg.includes('department')) {
            reply = "We offer Cardiology, Neurology, Pediatrics, Dental Care, and more. Visit our Services section for details.";
        } else if (lowerMsg.includes('contact') || lowerMsg.includes('address') || lowerMsg.includes('location')) {
            reply = "We are located at HealthHub Medical, Vadodara, 391760. Email us at info@healthhub.com.";
        } else if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
            reply = "Hello! How can I assist you with your healthcare needs today?";
        } else {
            reply = "I can help you with appointments, emergency contacts, services, and location information. How can I assist?";
        }

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return NextResponse.json({ reply });
    } catch (error) {
        return NextResponse.json(
            { reply: "Sorry, something went wrong." },
            { status: 500 }
        );
    }
}
