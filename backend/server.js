require("dotenv").config();
const express = require("express");
const  { v4 } =require('uuid');
const jwt = require('jsonwebtoken');
const app = express();
const authRoutes = require("./routes/authRoutes");
const mongoose = require("mongoose");
const isLoggedIn = require("./middleware/authGuard");
const cookieParser = require("cookie-parser");

app.use((req,res,next)=>{
  req.transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: "kijjvszyfaxtfkrn",
    },
  });
  next();
})
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);

app.use((req, res) => {
  res.send("<h1>404.. page not found</h1>");
});

app.use((err,req,res,next)=>{
  res.status(err.statusCode).json({msg:err.message});
})

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => {
    app.listen(process.env.PORT, (req, res) => {
      console.log(`server is listen to port:${process.env.PORT}`);
      console.log(`http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
