const readline = require("readline");
const terminal = readline.createInterface({
  output: process.stdout,
  input: process.stdin,
});

terminal.question("Informe um número:", function (valor) {
    var numero1 = Number(valor);
    terminal.question("Informe um número:", function (valor) {
        var numero2 = Number(valor);
        terminal.question("Informe um número:", function (valor) {
            var numero3 = Number(valor);
            if (numero1 > numero2) {
                if (numero1 > numero3) {
                    console.log("Numero1 é o maior.");
                } else {
                    console.log("Numero3 é o maior.");
                }
            } else {
                if (numero2 > numero3) {
                    console.log("Numero2 é o maior.");
                } else {
                    console.log("Numero3 é o maior.");
                }
            }
    terminal.close();
    });
  });
});