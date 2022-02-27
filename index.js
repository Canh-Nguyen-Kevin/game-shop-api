const express = require("express");
const app = express();
const importData = require("./db.json");
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/products", (req, res) => {
  res.send(importData.products);
});
app.get("/products/id", (req, res) => {
  res.send(importData.products.id);
});
app.listen(port, () => {
  console.log(`Example app is listening on  port https://localhost:${port}`);
});
