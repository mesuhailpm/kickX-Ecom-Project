import express from "express";
import login from "./Routes/login.js";
import singup from "./Routes/signup.js";

const app = express();
// const port = 3080;

// app.listen(port);
app.use(express.json());

console.log("hey");

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/login", login);
app.use("/signup", singup);

app.all("*", (req, res) => {
  res.status(404).send("Invalid URL");
});
