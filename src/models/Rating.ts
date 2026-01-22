import mongoose from 'mongoose';

const RatingSchema = new mongoose.Schema({
    patientName: { type: String, required: true },
    patientId: { type: String }, // Can be email or ID
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    stars: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String },
    date: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.models.Rating || mongoose.model('Rating', RatingSchema);
