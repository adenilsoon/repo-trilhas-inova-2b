//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um numero entre 1 e 100';

let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){
     let campo = document.querySelector(tag);
     campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');

function verificarChute() {
    console.log("O botão foi clicado");
    console.log(numeroSecreto);
}

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * 100 + 1);
}