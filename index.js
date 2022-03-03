const express = require("express");
const app = express();
const importData = require("./db.json");
const cors = require("cors");
let port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
  })
);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/products", (req, res) => {
  res.send(importData.products);
});

app.get(`/products/:id`, (req, res) => {
  res.send(
    importData.products.find(
      (product) => product.id === parseInt(req.params.id)
    )
  );
});
app.listen(port, () => {
  console.log(`Example app is listening on  port http://localhost:${port}`);
});
