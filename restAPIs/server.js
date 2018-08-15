const http = require("http");
const app = require("./app");
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

// mongoose.connect(
//   "mongodb://localhost:27017/postdb",
//   { useNewUrlParser: true }
// );
//
// app.get("/", (req, res) => {
//   // res.send("Hello World");
//   res.sendFile(`${__dirname}/index.html`);
// });

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
