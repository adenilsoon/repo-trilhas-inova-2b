// Acompanhamento aulas abaixo

alert("Boas vindas ao jogo do número secreto!");

let numeroMaximo = 50;
//Utilizacação do MathRandom para gerar o número secreto aleatoriamente(pseudoaleatorio) entre 0 e 1.
//Uso do parseInt para converter o numero aleatorio gerado para um numero inteiro.
//Multiplicação por 100 e incrementação de + 1 para que o valor tenha duas casas decimais e que seja acima de 0
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

//console.log apresenta informações console que são úteis para os desenvolvedores durante realização de testes
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto
while(chute != numeroSecreto) {
    chute = prompt(`Informe seu palpite de um número entre 1 e ${numeroMaximo}:`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if(chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        }else{
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

/*if(tentativas > 1){
    alert(`Parabéns, você descobriu o número secreto em ${tentativas} tentativas :)`);
}else{
    alert(`Parabéns, você descobriu o número secreto em ${tentativas} tentativa :)`);
}
*/

//Forma alternativa de substituir o IF
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Parabéns, você descobriu o número secreto em ${tentativas} ${palavraTentativa} :)\nNúmero secreto: ${numeroSecreto}`);