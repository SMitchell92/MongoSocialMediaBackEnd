"use strict";
// import { Thought, User } from '../models/index.js';
// import { Request, Response } from 'express';
//   export const getthoughts = async (_req: Request, res: Response) => {
//     try {
//       const thoughts = await Thought.find();
//       res.json(thoughts);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }
//   export const getSingleThought = async (req: Request, res: Response) => {
//     try {
//       const thought = await Thought.findOne({ _id: req.params.thoughtId });
//       if (!thought) {
//         res.status(404).json({ message: 'No thought with that ID' });
//       } else {
//         res.json(thought);
//       }
//     } catch (err) {
//       res.status(500).json(err)
//     }
//   }
//   // create a new thought
//   export const createThought = async (req: Request, res: Response) => {
//     try {
//       const thought = await Thought.create(req.body);
//       const user = await User.findOneAndUpdate(
//         { _id: req.body.userId },
//         { $addToSet: { thoughts: thought._id } },
//         { new: true }
//       );
//       if (!user) {
//          res
//           .status(404)
//           .json({ message: 'Thought created, but found no user with that ID' });
//       } else {  
//         res.json('Created the thought 🎉');
//       }
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   }
