const UserModel = require("../models/user");
const JWT = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const { text } = require("express");


exports.postRegister = async (req, res, next) => {
  try {
    const image = req.file;
    console.log(image);
    const findUser = await UserModel.findOne({ username: req.body.username });

    if (findUser) throw new Error("This user is already exsits");

    const user = await new UserModel({
      ...req.body,
    });

    const newUser = user.save();

    if (!newUser) throw new Error("Some error occured");

    const mailOptions = {
      from: "hiltonH0tel@gmail.com",
      to: req.body.email,
      subject: "Sending Email using Node.js",
      text: "Welcome to our hotel",
    };

    req.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("Error:", error);
      } else {
        console.log("Email sent: ", info.response);
      }
    });

    return res.status(201).json({ massage: "User Created.", user: newUser });
  } catch (error) {
    if (!error.statusCode) error.statusCode = 500;
    next(error);
  }
};

exports.postImage = async (req, res, next) => {
  console.log(req.file);
};



exports.postLogin = async (req, res, next) => {
  try {
    const findUser = await UserModel.findOne({ username: req.body.username });

    if (!findUser) return res.redirect(401, "/login");

    const checkPass = findUser.comparePassword(req.body.password);

    if (!checkPass) return res.redirect(400, "/login");

    req.session.isLoggedIn = true;

    return res.redirect(204, "/");
  } catch (error) {
    if (!error.statusCode) error.statusCode = 500;
    next(error);
  }
};



exports.postResetpassword = async (req, res, next) => {
  try {

    const Isuser = await UserModel.findOne({ email: req.body.email });

    if (!Isuser) return res.redirect(400, "/reset-password");

    const token = crypto.randomBytes(32).toString("hex");

    const templatePath = path.join("views", "resetPassword.html");

    const html = fs.readFileSync(
      templatePath,
      { encoding: "utf-8" },
      (err, html) => {
        if (err) {
          console.log("Error reading HTML file", err);
          return `<a href="localhost/reset-password/${token}">Reset Password</a>`;
        }
        return html;
      }
    );

    const mailOptions = {
      from: "hiltonH0tel@gmail.com",
      to: req.body.email,
      subject: "Sending Email using Node.js",
      html: html,
    };

    // Send the email
    req.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("Error:", error);
      } else {
        console.log("Email sent: ", info.response);
      }
    });

    return res.redirect(201, "/resetpassword");
  } catch (error) {
    if (!error.statusCode) error.statusCode = 500;
    next(error);
  }
};
