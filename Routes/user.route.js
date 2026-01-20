const express = require("express");
const router = express.Router();

const upload = require("../config/multer");
const { registerUser, getUserById } = require("../controllers/user.controller");

router.post(
  "/register",
  upload.single("myFile"), // MUST MATCH FORM FIELD
  registerUser
);

router.get("/:id", getUserById);

module.exports = router;
