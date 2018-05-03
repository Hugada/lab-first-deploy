const express = require("express");
const siteController = express.Router();

siteController.get("/", (req, res, next) => {
  res.render("site/index", { apiKey: "AIzaSyCldns-IRePPnasgxcbrxoNVUTbbB3ohg4" });
});

module.exports = siteController;
