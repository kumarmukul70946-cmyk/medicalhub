import mongoose from 'mongoose';

const TeleSessionSchema = new mongoose.Schema({
    patientName: { type: String, required: true },
    patientEmail: { type: String, required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    doctorName: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date },
    status: { type: String, enum: ['pending', 'active', 'completed', 'cancelled'], default: 'pending' },
    meetingId: { type: String }, // For signaling or third-party meeting room ID
}, { timestamps: true });

export default mongoose.models.TeleSession || mongoose.model('TeleSession', TeleSessionSchema);
