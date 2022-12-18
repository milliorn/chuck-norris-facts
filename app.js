// https://www.npmjs.com/package/dotenv
require("dotenv").config();

const express = require("express");
const path = require("path");

// https://expressjs.com/en/5x/api.html#app.use
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.static(path.join(__dirname, "public")));

// https://expressjs.com/en/5x/api.html#app.listen
app.listen(port, () => {
  console.log(`Server running http://localhost:${port}`);
});
