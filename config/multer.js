const multer = require("multer");
const path = require("path");

// Set storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  // accept file
  const allowedTypes = /jpeg|jpg|png|webp/;
  const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = allowedTypes.test(file.mimetype);

  console.log(path.extname(file.originalname).toLowerCase());
  console.log(file.mimetype);
  console.log(mimeType);
  console.log(ext);
  if (ext && mimeType) {
    cb(null, true);
  } else {
    cb(new Error("only images are allowed"));
  }
};

module.exports = multer({ storage, fileFilter });
