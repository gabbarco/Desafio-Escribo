const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function somatorioMultiplos(numero) {
  let soma = 0;
  for (let i = 0; i < numero; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      soma += i;
    }
  }
  return soma;
}

rl.question("Digite um número: ", function(numero) {
  console.log("Resultado:", somatorioMultiplos(parseInt(numero)));
  rl.close();
});
