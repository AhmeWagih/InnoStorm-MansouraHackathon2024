const express = require("express");

const router = express.Router();

const authController = require("../controllers/authController");

router.route("/login").post(authController.postLogin);

router
  .route("/register")
  .post(authController.postRegister);

router.route("/resetpassword").post(authController.postResetpassword);

router.route("/image").post(authController.postImage);
router.route("/image/delete").post(authController.postImage);

module.exports = router;
