const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth");

const { getLogin, postLogin } = authController;

router.get("/login", getLogin);
router.post("/login", postLogin);

module.exports = router;
