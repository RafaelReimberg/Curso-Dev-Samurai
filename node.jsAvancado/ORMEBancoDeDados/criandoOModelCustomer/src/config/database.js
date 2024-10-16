module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  // username: "empresarial",
  password: "secret",
  // password: "Rafa@1906",
  database: "develop",
  define: {
    timestamp: true, // cria duas colunas: createdAt e updatedAt
    underscored: true,
    underscoredAll: true,
  },
};
