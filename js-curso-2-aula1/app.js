//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um numero entre 1 e 100';

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function exibirTextoNaTela(tag, texto){
     let campo = document.querySelector(tag);
     campo.innerHTML = texto;
}

function verificarChute() {
    
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        
        let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
        let mensagemTentativas = `Você acertou o número secreto em ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('h1', 'Parabéns! ' + mensagemTentativas);
        exibirTextoNaTela('p', 'Foi bem, mas você consegue reduzir esse número? :) Se sim, clique em "Novo jogo"');
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else if(numeroSecreto > chute){
        exibirTextoNaTela('h1', 'Não foi dessa vez :(');
        exibirTextoNaTela('p', 'O número secreto é MAIOR que seu chute. Tente novamente');
    }else{
        exibirTextoNaTela('h1', 'Não foi dessa vez :(');
        exibirTextoNaTela('p', 'O número secreto é MENOR que seu chute. Tente novamente');
    }

    tentativas++;
    limparCampo();
    
}

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}