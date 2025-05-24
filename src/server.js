const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express(); // tạo app express
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;

// config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

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
