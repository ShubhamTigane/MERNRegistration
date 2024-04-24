const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  res.send("test ok");
};

const register = async (req, res) => {
  try {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);

    const newUser = new User({
      ...req.body,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).send("registered");
  } catch (error) {
    console.log(error);
  }
};

const login = async (req,res) => {
  try {
    const user =  await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).send("no user found");
    
    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if(!isCorrect) {
      return res.status(404).send(" wrong credentials");
    }

    const token = jwt.sign({
      id: user._id,
    },process.env.JWT );
    res.cookie("accessToken", token).status(200).send("token");
  } catch (error) {
    console.log(error);
  }
};

const logout = (req, res) => {
  res
    .clearCookie("accessToken", { sameSite: "none", secure: true })
    .status(200)
    .send("user logged out");
};

module.exports = { register, login, logout, test };
