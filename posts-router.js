const express = require("express");

const Posts = require("./data/db.js");

const router = express.Router();

router.use(express.json());

// GET request
router.get("/", (req, res) => {
  Posts.find()
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      res.status(500).json({
        message: "The posts information could not be retrieved."
      });
    });
});

module.exports = router;
