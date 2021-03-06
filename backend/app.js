const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const postsRoutes = require("./routes/posts");
const app = express();
const path=require('path');

mongoose
  .connect(
    "mongodb+srv://anirudh:anjinsan@universitycluster-unp7v.mongodb.net/unirecord?retryWrites=true&w=majority",{
      useNewUrlParser: true,
      useUnifiedTopology: true}
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/",express.static(path.join(__dirname,"public")))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postsRoutes);
app.use((req,res,next)=>{
  res.sendFile(path.join(__dirname,"public","index.html"));
});

module.exports = app;
