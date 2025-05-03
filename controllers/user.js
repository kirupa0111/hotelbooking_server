import User from "../models/User.js";

//UPDATE USER
export const updateUser = async (req, res, next) => {
  const newUser = new User(req.body);
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

//DELETE USER
export const deleteUser = async (req, res, next) => {
  const newUser = new User(req.body);
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("user has been deleted");
  } catch (err) {
    next(err);
  }
};

// GET USER
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
    console.log(user);
  } catch (err) {
    next(err);
  }
};

// GET ALL USERS
export const getUsers = async (req, res, next) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
