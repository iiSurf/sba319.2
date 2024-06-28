import express from 'express';
import Users from '../models/users.js';
// import { get } from 'mongoose';
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
    .post( async (req, res) => {
        try {
            const newUser = new Users(req.body);
            await newUser.save();
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ message: error.message});
        }
    });
router
    .route('/:id')
    .get(async (req, res) => {
        try {
            const user = await Users.findById(req.params.id);
            if (!user) return res.status(404).json({ message: 'User not found'});
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Server not responding'});
        }
    })
    .put(async (req, res) => {
        try {
            const updatedUser = await Users.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
            if (!updatedUser) return res.status(404).json({message: 'User not found'});
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    })
    .delete(async (req, res) => {
        try {
            const deletedUser = await Users.findByIdAndDelete(req.params.id);
            if (!deletedUser) return res.status(404).json({message: 'User not found'});
            res.status(200).json({message: 'User deleted'});
        } catch (error) {
            res.status(500).json({message: 'Server not responding'});
        }
    });
    
    

export default router;