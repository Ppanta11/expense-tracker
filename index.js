const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const Expense = require("./models/expense");

const app = express();
const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter(req, file, cb) {

    if (!file.mimetype.startsWith("image/")) {
      return cb(new Error("File must be an image"), false);
    }
    cb(null, true);
  },
});

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());


mongoose
  .connect("mongodb://127.0.0.1:27017/expense-tracker")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));


app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.post("/api/upload-banner", upload.single("bannerImage"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded");
  }


  const imageUrl = `/uploads/${req.file.filename}`;
  res.json({ imageUrl });
});
app.listen(3000, () => console.log("Server running on port 3000"));
