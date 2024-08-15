const readline = require("readline");
const terminal = readline.createInterface({
  output: process.stdout,
  input: process.stdin,
});

terminal.question("Informe um número:", function (valor) {
    var numero = Number(valor)

    if(numero > 0){
        console.log("Positivo.")
    } else if(numero < 0){
         console.log("Negativo.")
    } else{
        console.log("É zero.")
    }

    terminal.close();
});