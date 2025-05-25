import express from "express";
// config
import configViewEngine from "./configs/viewEngine.mjs";
// routes
import webRoutes from "./routes/web.mjs";

const app = express(); // tạo app express
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;

// run lên server trên port đã khởi tạo trước đấy
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});

// config template engine
configViewEngine(app);

// routes
app.use("/", webRoutes); // => tham số "/" sẽ cho biết toàn bộ các routes sẽ đứng sau nó. VD: /test/abc

