Utlizando o nodemon

1. instalando o nodemon

command: yarn add nodemon -D

comando para executar o arquivo com o nodemon

npx nodemon index.js

detalhe, usando esse pacote, ele irá ajustar o seu projeto sem precisar matar a aplicacao.
Fara a atualizacao normal quando fazer a mudanca no seu projeto.

Dentro do arquivo peckage.json

colocar o

"scripts": {
  "dev": "nodemon index.js"
}

e nas proximas vezes usar chamando o arquivo com yarn dev
que irá executar o projeto.


