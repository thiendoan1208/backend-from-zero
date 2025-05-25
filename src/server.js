const express = require("express");
require("dotenv").config();
const path = require("path");

const app = express(); // tạo app express
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;

// config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// config static file
app.use(express.static(path.join(__dirname, "public")));

// Khai báo routes
app.get("/", (req, res) => {
  // 2 obj trong môi trường node.js
  res.send("Hello World!");
});

app.get("/abc", (req, res) => {
  res.render("sample.ejs");
});

// run lên server trên port đã khởi tạo trước đấy
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
