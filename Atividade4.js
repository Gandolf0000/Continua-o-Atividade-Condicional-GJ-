const readline = require("readline");
const terminal = readline.createInterface({
  output: process.stdout,
  input: process.stdin,
});

terminal.question("Qual é a sua idade?", function (valor) {
    var idade = Number(valor);

    if (idade < 16) {
        console.log("Você não pode votar.");
    } else if (idade < 18 || idade >= 60) {
        console.log("Voto facultativo.");
    } else {
        console.log("Voto obrigatório.");
    }
    terminal.close();
});


