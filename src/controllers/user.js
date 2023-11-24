import passport from 'passport';
import bcrypt from 'bcrypt';
import User from '../models/user.js'


// Controller to add a new user
export const registerUser = async (req, res) => {
  const { name, email, image, oAuthId } = req.body;
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    // If the user already exists, return a conflict status
    return res.status(200).json({ message: 'User with this email already exists', user: existingUser });
  }
  const newUser = new User({ name, email, image, oAuthId });

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};


// Controller to get a specific user by email
export const getUserByEmail = async (req, res) => {
  try {
    const user = await User.find({email:req.params.id});
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
// Controller to get a specific user by Id
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};





