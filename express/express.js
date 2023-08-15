const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World Asim");
});
app.post("/post", function (req, res) {
  res.send("task complet");
});
app.delete("/delete", function (req, res) {
  res.send("Hello World ");
});
// app.get("/", function (req, res) {
//   res.send("Hello World Asim");
// });

app.listen(3000);
console.log("app running on port 3000");
