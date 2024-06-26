import express from 'express';
import dotenv from 'dotenv';
import Movies from './routes/movies.js'
import Theaters from './routes/theaters.js'
import Users from './routes/users.js'
import { connectDB } from './dbFolder/connections.js';
dotenv.config();
const app = express();


const PORT = process.env.PORT || 3200;

connectDB();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Howdy Dowdy Partner');
});



app.use('/movies', Movies);
app.use('/theaters', Theaters);
app.use('/users', Users);

app.use((err, req, res, next) => {
    res.status(500).send('Server ran in to an error. My bad!');
});

app.listen(PORT, function (err) {
    if (err) res.status(500).send('Server is not Running');
    else console.log('Server is running');
});

