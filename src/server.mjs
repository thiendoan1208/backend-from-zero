import express from "express";
import configViewEngine from "./configs/viewEngine.mjs";
import webRoutes from "./routes/web.mjs";
import mysql from "mysql2/promise";

const app = express(); // tạo app express
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;

// connection
const connection = await mysql.createConnection({
  host: "localhost",
  port: 3308,
  user: "root",
  password: "123456",
  database: "hoidanit",
});

// A simple SELECT query
try {
  const [results, fields] = await connection.query("SELECT * from Users u;");

  console.log("result: ", results); // results contains rows returned by server
  console.log("field: ", fields); // fields contains extra meta data about results, if available
} catch (err) {
  console.log(err);
}

// run lên server trên port đã khởi tạo trước đấy
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});

// config template engine
configViewEngine(app);

// routes
app.use("/", webRoutes); // => tham số "/" sẽ cho biết toàn bộ các routes sẽ đứng sau nó. VD: /test/abc
