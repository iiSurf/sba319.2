import mongoose from 'mongoose';

const moviesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    runtime: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

moviesSchema.index({ title: 1});

export default new mongoose.model('Movies', moviesSchema);