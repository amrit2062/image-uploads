const User = require("../models/user");

exports.registerUser = async (req, res) => {
  try {
    const { name, email } = req.body;
console.log("BODY", req.body);
    // validate
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and email are required",
      });
    }

    // check image
    if (!req.file) {
        console.log("FILE:", req.file);
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    const user = await User.create({
      name,
      email,
      imageUrl: `/uploads/${req.file.filename}`,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// GET user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Invalid user ID",
    });
  }
};
