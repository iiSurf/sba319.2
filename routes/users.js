import express from 'express';
import Users from '../models/users.js';
const router = express.Router();

router
    .route('/')
    .get( async (req, res) => {
        try {
            const users = await Users.find({});
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Server not responding'});
        }
    })
    

export default router;