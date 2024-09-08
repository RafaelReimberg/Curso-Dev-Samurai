module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "secret",
  database: "teste-dominando-nodejs",
  define: {
    timestamp: true, // cria duas colunas: createdAt e updatedAt
    underscored: true, // nomenclatura _ (nao camelCase)
    underscoredAll: true,
  },
};
