const express = require("express");

const server = express();

// portas que são usadas
// 3000
// 5000
// 8000
// 8080

// 127.0.0.1
// localhost
// devsamurai

server.get("/hello", (req, res) => {
  // return res.send("<h1>Rafael Marcelo Reimberg</h1> - <h2>testando o servidor Express</h2>");
  return res.json({
    title: "Rafael Marcelo Reimberg",
    message: "Testendo o res.josn"
  });
});

// json['title']
// -> "Hello World"

server.listen(3000);
