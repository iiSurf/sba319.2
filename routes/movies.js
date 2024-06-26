import express from 'express';
import Movies from '../models/movies.js';
const router = express.Router();

router
    .route('/')
    .get( async (req, res) => {

        // const readMovies = await Movies.find({}).limit(5);
        // console.log(readMovies);
        // res.send(readMovies);
        try {
            // res.send('Testing.... Testing..... TESTING!!!!! ~ Patrick Star');
            const readMovies = await Movies.find({}).limit(5);
            // console.log(readMovies);
            res.send(readMovies);
        } catch (error) {
            res.status(500).send('Server not responding');
        }
        
    });

router
    .route('/:movies')
    .get( async (req, res) => {
        try {
            const readMovies = await Movies.find({title: req.params.movies}).limit(5);
            res.send(readMovies);

        } catch (error) {
            res.status(500).send('Server not responding');
        }
    })
router
    .route('/:movies')
    .post( async (req, res) => {
        try {
            const movies = await Movies.find({title: req.params.movies}).limit(5);
            res.send(readMovies);

        } catch (error) {
            res.status(500).send('Server not responding');
        }
    })



// router.get('/:id', (req, res) => {
    
// })

export default router;