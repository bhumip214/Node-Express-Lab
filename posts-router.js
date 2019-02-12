const express = require("express");

const Posts = require("./data/db.js");

const router = express.Router();

router.use(express.json());

module.exports = router;
