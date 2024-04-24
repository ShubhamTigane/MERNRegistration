const express = require("express");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRouter");
const cors = require('cors')
const cookieParser = require('cookie-parser')
dotenv.config();

const app = express();

app.use(cookieParser())
app.use(cors({origin:'http://localhost:3000', credentials:true} ))
app.use(express.json())

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected");
  } catch (error) {
    console.log(error);
  } 
};
app.use("/api/user", userRoute);

app.listen(4000, () => {
  connect();
  console.log("listening");
});
