const express = require("express");
const router = express.Router();
router.use(express.json());

//MIDDLEWARE
router.use((req, res, next) => {
  console.log("Product Route Accessed");
  next();
});

let products = [
  { id: 1, name: "Pen" },
  { id: 2, name: "Notebook" },
];

//We will use MongoDB rather than in-memory
// // GET all products
// router.get("/", (req, res) => {
//   res.json(products);
// });

// // POST a new product
// router.post("/", (req, res) => {
//   const newProduct = { id: Date.now(), name: req.body.name };
//   products.push(newProduct);
//   res.status(201).json(newProduct);
// });

//////////////////
//Here is MongoDB
//////////////////
const Product = require("../models/Product");

// CREATE
router.post("/", async (req, res) => {
  const product = new Product(req.body);
  const saved = await product.save();
  res.status(201).json(saved);
});

// READ
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
