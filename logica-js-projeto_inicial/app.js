// Atividade 01 de fixação da aula 01

/*
    alert("Boas vindas ao nosso site!");
    let nome = "Lua";
    let idade = 25;
    let numeroDeVendas = 50;
    let saldoDispoivel = 1000;
    alert("Erro! Preencha todos os campos");
    let mensagemDeErro = "Erro! Preencha todos os campos";
    alert(mensagemDeErro);
    nome = prompt("Informe o seu nome de usuário: ");
    idade = prompt("Informe sua idade: ");

    if(idade >= 18) {
        alert("Pode tirar a habilitação!");
    }
*/

// Acompanhamento aulas abaixo

/*
alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = 8;
console.log(numeroSecreto);
let chute = prompt("Informe seu palpite de um número entre 1 e 30:");

if (chute == numeroSecreto) {
    alert(`Parabéns, você descobriu o número secreto! ${numeroSecreto} :)`);
} else {
    alert("Você errou :(");
}
*/

let diaDaSemana = prompt("Qual é o dia da semana?");

if(diaDaSemana == 'Sábado' || diaDaSemana == 'Domingo'){
    alert("Bom fim de semana!");
}else{
    alert("Boa semana!");
}