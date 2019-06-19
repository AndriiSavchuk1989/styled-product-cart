const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const path = require("path");

const MongoClient = require("mongodb").MongoClient;

const app = express();

app.use(express.static("static"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
