import express from 'express';
import Movies from '../models/movies.js';
const router = express.Router();

router
    .route('/')
    .get( async (req, res) => {
        // res.send(readMovies);
        try {
            const movies = await Movies.find({}).limit(15);
            // console.log(readMovies);
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json({message: 'Server not responding'});
        }
    })
    .post( async (req, res) => {
        try {
            const newMovie = new Movies(req.body);
            await newMovie.save();
            res.status(201).json(newMovie);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    })
router
    .route('/:id')
    .get(async (req, res) => {
        try {
            const movie = await Movies.findById(req.params.id);
            if (!movie) return res.status(404).json({message: 'Movie not found'});
            res.status(200).json(movie);
        } catch (error) {
            res.status(500).json({message: 'Server not responding'});
        }
    })
    .put(async (req, res) => {
        try {
            const updatedMovie = await Movies.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true});
            if (!updatedMovie) return res.status(404).json({message: 'Movie not found'});
            res.status(200).json(updatedMovie);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    })
    .delete(async (req, res) => {
        try {
            const deletedMovie = await Movies.findByIdAndDelete(req.params.id);
            if (!deletedMovie) return res.status(404).json({message: 'Movie not found'});
            res.status(200).json({message: 'Movie deleted'});
        } catch (error) {
            res.status(500).json({message: 'Server not responding'});
        }
    });

export default router;