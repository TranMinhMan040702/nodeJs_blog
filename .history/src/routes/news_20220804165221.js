const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController.js");

router.use("/", newsController);
