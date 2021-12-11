const express = require("express");
const cors = require("cors");
const app = express();

const port = 80;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Simple server working!");
});

app.listen(port, () => {
  console.log("Application running on port ", port);
});
