import mongoose from 'mongoose';

const DoctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    rating: { type: Number, default: 4.5 },
    reviews: { type: Number, default: 0 },
    experience: { type: Number, required: true },
    fee: { type: Number, required: true },
    location: { type: String, required: true },
    timing: { type: String, required: true },
    available: { type: Boolean, default: true },
    image: { type: String },
    about: { type: String },
}, { timestamps: true });

export default mongoose.models.Doctor || mongoose.model('Doctor', DoctorSchema);
