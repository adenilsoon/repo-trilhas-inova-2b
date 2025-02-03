// Acompanhamento aulas abaixo

alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = 8;
console.log(numeroSecreto);
let chute = prompt("Informe seu palpite de um número entre 1 e 30:");

if (chute == numeroSecreto) {
    alert(`Parabéns, você descobriu o número secreto! ${numeroSecreto} :)`);
} else {
    alert("Você errou :(");
}