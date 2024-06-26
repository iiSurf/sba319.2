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


export default new mongoose.model('Movies', moviesSchema);