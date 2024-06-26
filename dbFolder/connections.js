import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export function connectDB () {
    mongoose.connect(process.env.ATLAS_URI);

    const conn = mongoose.connection;
    conn.on('error', (e) => console.error(e));
    conn.on('open', () => console.log('Connected to the Database!'));
    conn.off('close', () => console.log('Disconnected to Database!!'));
};



// useNewUrlParser: true,
// useUnifiedTopology: true,
// useCreateIndex: true,
// useFindAndModify: false,