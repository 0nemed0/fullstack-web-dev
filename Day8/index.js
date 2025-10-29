const express = require("express");
const app = express();
const productRoutes = require("./routes/products");
const logger = require("./middleware/logger");
const User = require("./models/User");

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://haniffbinhamid_db_user:ZeYnnqvZvBG39rg2@cohort4.pyfwgbb.mongodb.net/?appName=Cohort4"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Connection error:", err));

//HASHING
const bcrypt = require("bcrypt");

app.use(express.json());
app.post("/register", async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);
  const user = new User({ email: req.body.email, password: hashed });
  await user.save();
  res.status(201).send("User registered");
});

app.use(logger);

app.use("/products", productRoutes);

app.listen(3000, () => console.log("Server running"));
