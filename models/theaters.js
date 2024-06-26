import mongoose from 'mongoose';

const theatersSchema = new mongoose.Schema({
    location: {
        type: String, // Try Object if string does not work
        required: true,
    },
    theaterId: {
        type: Number,
        required: true,
        unique: true,
    },
},    {
    timestamps:true,
});

theatersSchema.index({ theaterId: 1});

export default new mongoose.model('theaters', theatersSchema);