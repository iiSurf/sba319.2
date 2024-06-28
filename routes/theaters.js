import express from 'express';
import Theaters from '../models/theaters.js';
const router = express.Router();

router
    .route('/')
    .get(async (req, res) => {
        try {
            const theaters = await Theaters.find({});
            res.status(200).json(theaters);
        } catch (error) {
            res.status(500).json({message: 'Server is not responding'});
        }
    })
    .post(async (req, res) => {
        try {
            const newTheater = new Theaters(req.body);
            await newTheater.save();
            res.status(201).json(newTheater);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    });
router
    .route('/:id')
    .get(async (req, res) => {
        try {
            const theater = await Theaters.findById(req.params.id);
            if (!theater) return res.status(404).json({message: 'Theater not found'});
            res.status(200).json({message: 'Server not responding'});
        } catch (error) {
            res.status(500).json({message: 'Server not responding'});
        }
    })
    .put(async (req, res) => {
        try {
            const updatedTheater = await Theaters.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
            if (!updatedTheater) return res.status(404).json({message: 'Theater not found'});
            res.status(200).json({updatedTheater});
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    })
    .delete(async (req, res) => {
        try {
            const deletedTheater = await Theaters.findByIdAndDelete(req.params.id);
            if (!deletedTheater) return res.status(404).json({message: 'Theater not found'});
            res.status(200).json({message: 'Theater deleted'});
        } catch (error) {
            res.status(500).json({message: 'Server not responding'});
        }
    });

export default router;