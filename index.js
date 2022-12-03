const express = require("express");
const bodyParser = require("body-parser");
const { response } = require("express");
const app = express();
const port = 3000;
const client = require("./config/dbConfig");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authRoutes = require("./routes/auth.routes");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.listen(port, () => {
  console.log(`server running on port ${port}.`);
});
authRoutes(app);
client.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected");
  }
});
app.get("/", (request, response) => {
  response.json({ message: "hey , i am running" });
});
