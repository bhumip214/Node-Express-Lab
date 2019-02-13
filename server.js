const express = require("express");
const cors = require("cors");

const postsRouter = require("./posts-router");

const server = express();

server.use(express.json());

server.use(cors());

server.use("/api/posts", postsRouter);

server.get("/", (req, res) => {
  res.send(`
    <h2> Lambda: Node Express lab </h2>
  `);
});

// export default server; ES6(2015) Modules
module.exports = server;
