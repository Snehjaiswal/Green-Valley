/*
 * Title:   Login System Advanced 
 * Author:     Sneh Jaiswal
 * Created On: Fri Jun 17 2022 10:57:37 am
 */



"use strict";
require("./app/utils/mongooseConnecter.util");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// Home Route
app.get("/home", (req, res) => res.send("Welcome every one...."));

// Routes Or API's
app.use("/api/login", require("./app/routes/Login.route"));
app.use("/api/otp", require("./app/routes/otp.router"));

app.get('/',(req,res)=>{
  console.log("okk",'-----',res);
  res.send("okk")
})
const port = 7071
// Server start
app.listen(port, () =>
  console.log(`Server is running on http://127.0.0.1:${port}`)
);
