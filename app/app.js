"use strict";

//모듈
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//라우팅
const home = require("./src/routes/home")

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/", home); // use-> 미들웨어를 등록해주는 메소드
app.use("/login", home); // use-> 미들웨어를 등록해주는 메소드
app.use(express.static(`${__dirname}/src/public`));


module.exports = app;