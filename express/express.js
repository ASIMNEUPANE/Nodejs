const express = require("express");
const app = express();

app.get("/:name/:lastName", function (req, res) {
  console.log({ req });
  const { name, lastName } = req.params;

  res.send(`task complet ${name} + ${lastName}`);
});

app.delete("/delete", function (req, res) {
  res.send("Hello World ");
});
app.get("/", function (req, res) {
  res.send("Hello World Asim");
});

app.listen(3000);
console.log("app running on port 3000");
