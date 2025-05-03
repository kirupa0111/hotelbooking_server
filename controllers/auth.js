import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";
import sendMail from "../utils/sendMail.js";
// Register new user in users table

export const register = async (req, res, next) => {
  const { username, email, country, password, img, city, phone } = req.body;

  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = new User({
      username,
      email,
      country,
      city,
      phone,
      img,
      password: hash,
    });
    await newUser.save();

    //send mail to user after registration
    await sendMail(
      email,
      "Welcome to HotelBooking!",
      "Welcome to HotelBooking App we are glad to have you on board."
    );

    res.status(200).send("user Registered succesfully ");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user)
      return next(
        createError(404, "User not found! please register your details")
      );

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );
    const { password, isAdmin, ...otherDetails } = user._doc;

    res
      .status(200)
      .json({ details: { ...otherDetails }, token: token, isAdmin });
    console.log(details);
  } catch (err) {
    next(err);
  }
};

// export const login = async (req, res, next) => {
//   try {
//     const user = await User.findOne({ username: req.body.username });
//     if (!user) return next(createError(404, "User not found!"));
//     res.status(200).send("User has been created");

//     const isPasswordCorrect = await bcrypt.compare(
//       req.body.password,
//       user.password
//     );
//     if (!isPasswordCorrect)
//       return next(createError(400, "Wrong password or username!"));

//     // const token = jwt.sign(
//     //   { id: user._id, isAdmin: user.isAdmin },
//     //   process.env.JWT
//     // );

//     // const { password, isAdmin, ...otherDetails } = user._doc;
//     // res
//     //   .cookie("access_token", token, {
//     //     httpOnly: true,
//     //   })
//     //   .status(200)
//     //   .json({ ...otherDetails });
//     res.status(200).send(user);
//   } catch (err) {
//     next(err);
//   }
// };
