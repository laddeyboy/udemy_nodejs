const express = require("express");
const { check, body } = require("express-validator");

const authController = require("../controllers/auth");
const User = require("../models/user");

const router = express.Router();

const {
  getLogin,
  getSignup,
  postLogin,
  postSignup,
  postLogout
} = authController;

router.get("/login", getLogin);
router.get("/signup", getSignup);

router.post(
  "/login",
  [
    check("email")
      .isEmail()
      .withMessage("Not a valid email")
      .normalizeEmail(),
    body("password", "Password is invalid format")
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim()
  ],
  postLogin
);

router.post(
  "/signup",
  [
    check("email")
      .isEmail()
      .withMessage("YOU SUCK....SUCKA") // this withMessage only applies to isEmail
      .custom((value, { req }) => {
        // if (value === "test@test.com") {
        //   throw new Error("This email is not available");
        // }
        // return true;
        return User.findOne({ email: value }).then(userDoc => {
          if (userDoc) {
            return Promise.reject("Email is already taken");
          }
        });
      })
      .normalizeEmail(),
    body("password", "Password is WRONG WRONG WRONG") // this 2 param is error msg for ALL validators
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim(),
    // .withMessage("Password is WRONG WRONG WRONG")
    body("confirmPassword")
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("Passwords have to match!");
        }
        return true;
      })
      .trim()
  ],
  postSignup
);
router.post("/logout", postLogout);

module.exports = router;
