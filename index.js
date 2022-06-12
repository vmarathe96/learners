const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const leanerRoute = require("./app/api/route/learners");
const couserRoute = require("./app/api/route/courses");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
app.set("secretKey", "hdjsakfhdjsk");
const learnerValidation = (req, res, next) => {
  jwt.verify(
    req.headers["x-access-token"],
    req.app.get("secretKey"),
    (err, decoded) => {
      if (err) {
        res.json({
          message: err,
        });
      }
      next();
    }
  );
};
app.use(logger("dev"));
app.use(bodyParser.json());
app.use("/learner", leanerRoute);

app.use("/course", learnerValidation, couserRoute);

app.get("/home", (req, res) => {
  res.json({
    APP: "JWT Based API Application",
    message: "Successfully Running the Application",
  });
});

const mongoURI =
"mongodb://vishal:marathe96@ac-jl18qfr-shard-00-00.2g1jd89.mongodb.net:27017,ac-jl18qfr-shard-00-01.2g1jd89.mongodb.net:27017,ac-jl18qfr-shard-00-02.2g1jd89.mongodb.net:27017/?ssl=true&replicaSet=atlas-ukwwhg-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Successfully Connected to the Database");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT || 5000, () => {
  console.log("Successfully Running on the PORT: 5000");
});