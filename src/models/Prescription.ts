import mongoose from 'mongoose';

const PrescriptionSchema = new mongoose.Schema({
    patientName: { type: String, required: true },
    patientEmail: { type: String, required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    doctorName: { type: String, required: true },
    date: { type: Date, default: Date.now },
    medications: [{
        name: { type: String, required: true },
        dosage: { type: String, required: true },
        duration: { type: String, required: true },
        instructions: { type: String }
    }],
    notes: { type: String },
    fileURL: { type: String }, // For generated PDF or uploaded image
}, { timestamps: true });

export default mongoose.models.Prescription || mongoose.model('Prescription', PrescriptionSchema);
