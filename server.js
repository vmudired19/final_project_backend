const express = require("express");
const app = express();
const config = require("config");
const cors = require("cors");
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const budgetModel = require("./models/budgetModel");

const userModel = require("./models/userModel");
const users = require("./routes/users");
const auth = require("./routes/auth");
const budget = require("./routes/budget");
const feedback = require("./routes/feedback");

const feedbackModel = require("./models/feedbackModel");

const accessTokenKey = "My super secret key";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var url =
  "mongodb+srv://vmudired:suYARHSYNZ9SPzj0@cluster0.jiik9cj.mongodb.net/budgetdata?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Now connected to MongoDB!"))
  .catch((err) => console.error("Something went wrong", err));

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://68.183.139.30:3000");
//   res.setHeader("Access-Control-Allow-Headers", "Content-type,Authorization");
//   next();
// });
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://front-1-8gxj.onrender.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


app.use(express.json());
app.use("/users", users);
app.use("/auth", auth);
app.use("/budget", budget);
app.use("/feedback", feedback);
app.use("", express.static("public"));

app.listen(port, () => {
  console.log("App is running on port " + port);
});
