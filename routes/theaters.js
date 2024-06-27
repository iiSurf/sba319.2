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
        
    })

export default router;