const readline = require("readline");
const terminal = readline.createInterface({
  output: process.stdout,
  input: process.stdin,
});
var peso
var idade

terminal.question("Qual o seu peso(em Kg)?", function (valor) {
  terminal.question("Qual a sua idade(em anos)?", function (valor) {
  peso = Number(valor);
  idade = Number(valor)
  terminal.close();
  console.log(peso)
  console.log(idade)
  });
});

