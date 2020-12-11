require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5500;
app.use(express.static("build"));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Crane");
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
