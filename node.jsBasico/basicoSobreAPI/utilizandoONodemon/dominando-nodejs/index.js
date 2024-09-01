const express = require("express");
const server = express();

// http://localhost:3000/hello?nome=Rafael&idade=37
// Query params = ?nome=Rafael&idade=37


server.get("/hello", (req, res) => {
  // const nome = req.query.nome;
  const { nome, idade } = req.query;

  return res.json({
    title: `Olá ${nome}`,
    message: "Testendo e usando o nodemon",
    age: idade
  });
});

// http://localhost:3000/hello/Rafael
// Route params = /hello:nome

server.get("/hello/:nome", (req, res) => {

  const { nome } = req.params;

  return res.json({
    title: `Olá ${nome}`,
    message: "Testendo e usando o nodemon",
  });

});

server.listen(3000);

// 08:23
