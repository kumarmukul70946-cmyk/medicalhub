import { NextResponse } from 'next/server';

const medicalDatabase: any = {
    fever: {
        keywords: ['fever', 'temperature', 'bukhar', 'tapman'],
        en: {
            meds: "Paracetamol (e.g., Crocin, Dolo) or Ibuprofen for pain relief.",
            home: "Drink plenty of fluids (water, electrolytes), rest, and use a cool compress on the forehead.",
            warning: "If fever exceeds 102°F (39°C) or lasts > 3 days, consult a doctor immediately."
        },
        hi: {
            meds: "Paracetamol (jaise Crocin, Dolo) ya Ibuprofen.",
            home: "Khoob paani piyein, aaram karein, aur maathe par thandi patti rakhein.",
            warning: "Agar bukhar 102°F se zyada ho ya 3 din se zyada rahe, to turant doctor ko dikhayein."
        }
    },
    headache: {
        keywords: ['headache', 'migraine', 'sar dard', 'sir dard'],
        en: {
            meds: "Aspirin, Ibuprofen, or Paracetamol.",
            home: "Rest in a dark/quiet room, stay hydrated, apply balm or cold pack.",
            warning: "Seek help if headache is sudden, severe, or affects vision."
        },
        hi: {
            meds: "Aspirin, Ibuprofen, ya Paracetamol.",
            home: "Andhere kamre mein aaram karein, paani piyein, aur balm lagayein.",
            warning: "Agar sar dard achanak aur tez ho, to turant doctor se milen."
        }
    },
    cold: {
        keywords: ['cold', 'flu', 'cough', 'sardi', 'khansi', 'jukam'],
        en: {
            meds: "Decongestants, Cough syrups, Vitamin C supplements.",
            home: "Steam inhalation, salt water gargles, warm soups, and ginger tea.",
            warning: "Visit a doctor if you experience breathing difficulty or chest pain."
        },
        hi: {
            meds: "Cough syrup, Vitamin C ki goli.",
            home: "Bhaap lein (steam), namak ke paani se gargle karein, garam soup piyein.",
            warning: "Agar saans lene mein takleef ho to doctor ke paas jayen."
        }
    },
    pain: {
        keywords: ['pain', 'ache', 'dard'],
        en: {
            meds: "Pain relievers like Ibuprofen or sprays for muscle pain.",
            home: "Rest the area, apply ice (acute) or heat (chronic/stiff).",
            warning: "Consult a specialist if pain is sharp or persisting."
        },
        hi: {
            meds: "Dard nivarak dawayein (painkillers) ya spray.",
            home: "Aaram karein, barf (ice) ya garam patti se senk karein.",
            warning: "Agar dard zyada ho to doctor se salah lein."
        }
    }
};

export async function POST(req: Request) {
    try {
        const { message } = await req.json();
        const lowerMsg = message.toLowerCase();

        // Simulate Delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        // 1. Check for specific medical conditions
        for (const key in medicalDatabase) {
            const condition = medicalDatabase[key];
            if (condition.keywords.some((k: string) => lowerMsg.includes(k))) {
                // Detect Language (Simple check for Hindi keywords in input)
                const isHindi = ['bukhar', 'dard', 'sardi', 'khansi', 'jukam', 'kaise', 'kya'].some(h => lowerMsg.includes(h));
                const lang = isHindi ? 'hi' : 'en';
                const data = condition[lang];

                const labels = isHindi
                    ? { m: "💊 Dawa (Medicines)", h: "🏠 Gharelu Upay (Home Remedies)", w: "⚠️ Savdhani (Precautions)" }
                    : { m: "💊 Common Medicines", h: "🏠 Home Remedies", w: "⚠️ Precautions" };

                const reply = `${labels.m}: ${data.meds}\n\n${labels.h}: ${data.home}\n\n${labels.w}: ${data.warning}\n\n(Disclaimer: This is AI advice, not a doctor's prescription.)`;
                return NextResponse.json({ reply });
            }
        }

        // 2. Standard Responses
        let reply = "I'm not sure. Please consult a doctor.";

        if (lowerMsg.includes('consult') || lowerMsg.includes('doctor') || lowerMsg.includes('specialist')) {
            reply = "👨‍⚕️ Yes, I can connect you with our specialists:\n\n1. Dr. Sarah Johnson (Cardiologist)\n2. Dr. Michael Chen (Neurologist)\n3. Dr. Emily Davis (Pediatrician)\n\nTo consult them, please click the 'Book Appointment' button above or type 'book appointment'.";
        } else if (lowerMsg.includes('emergency')) {
            reply = "🚨 For emergencies, call +91 6200721151 immediately or visit our 24/7 Emergency Dept.";
        } else if (lowerMsg.includes('appointment') || lowerMsg.includes('book')) {
            reply = "📅 You can book an appointment via the 'Book Appointment' button or call +91 6200721151.";
        } else if (lowerMsg.includes('contact') || lowerMsg.includes('location')) {
            reply = "📍 We are at HealthHub Medical, Vadodara, 391760. Email: info@healthhub.com.";
        } else if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('namaste')) {
            reply = "Hello! I can help with Medicines, Home Remedies, and Appointments. Try asking 'Medicine for fever' or 'Bukhar ki dawa'.";
        } else {
            reply = "I can help with Medicines (Cures), Home Remedies, and Appointments. Try asking about 'fever', 'headache', or 'cold'.";
        }

        return NextResponse.json({ reply });
    } catch (error) {
        return NextResponse.json({ reply: "Sorry, system error." }, { status: 500 });
    }
}
