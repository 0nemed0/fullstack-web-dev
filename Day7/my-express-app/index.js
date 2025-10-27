const express = require("express");
const app = express();

app.use(express.json());

//MIDDLEWARE STARTS WITH FUNCTION
function logger(req, res, next) {
  console.log(`Text : ${req.method} ${req.url}`);
  next(); // continue to the route handler
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Welcome to my API!");
});

app.get("/hello", (req, res) => {
  res.send("Hi !!");
});

app.get("/about", (req, res) => {
  res.send("This is the about page.");
});

app.get("/users", (req, res) => {
  res.json([{ name: "Ali" }, { name: "Siti" }]);
});

app.get("/me", (req, res) => {
  res.json([{ name: "Haniff" }, { role: "Developer" }]);
});

app.get("/hobbies", (req, res) => {
  res.json(["Coding", "Testing"]);
});

app.post("/submit", (req, res) => {
  res.send("Form submitted !");
});

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

app.use(express.json());

app.post("/message", (req, res) => {
  const message = req.body.text;
  res.send(`You said: ${message}`);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
