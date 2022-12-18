require("dotenv").config();
//console.log(process.env) // remove this after you've confirmed it is working

const test = process.env;

const express = require("express");
const path = require("path");
// https://expressjs.com/en/5x/api.html#app.use
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// https://expressjs.com/en/5x/api.html#app.listen
app.listen(port, () => {
  console.log(`Server running http://localhost:${port}`);
});
