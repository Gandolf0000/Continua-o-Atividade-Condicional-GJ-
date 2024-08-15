const readline = require("readline");
const terminal = readline.createInterface({
  output: process.stdout,
  input: process.stdin,
});

terminal.question("Qual é a sua idade?", function (valor) {
    var idade = Number(valor);
    if(idade >= 18){
        console.log("Pode tirar carteira de habilitação.")
    } else{
        console.log("Nâo pode tirar carteira de habilitação.")
    }
    terminal.close();
});