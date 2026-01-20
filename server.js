const express = require("express");
require("dotenv").config();
const app = express();

const routes = require("./Routes/index");
const db = require("./config/db");


app.use(express.json());
app.use(express.urlencoded({ extended: true })); // REQUIRED

// test main route
app.get("/", (req, res) => {
  res.send("Welcome to multer  image file upload with mongodb");
});

app.use("/uploads", express.static("uploads"));
app.use("/api", routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
