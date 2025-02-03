//Desafio 1

//Aluno: Adenilson Veneranda da Silva
//Inova Trilhas 2B - Front End

//Intrução 1
let nome = "Adenilson";
alert(`Olá, ${nome}!`);

//Intrução 2
let idade = 25;
let altura = 1.75;
alert(`Idade: ${idade}\nAltura: ${altura}`);


//Intrução 3
let preco = 50;
let desconto = 0.2;
alert(`Preço: R$ 50,00 | Desconto: 20%\nPreço com desconto: R$ ${preco - (preco * desconto)}`);

//Intrução 4
let temperatura = 30;
if(temperatura > 25){
    alert("Está calor!");
}else{
    alert("Está fresco!");
}

//Intrução 5
//Variável já declaradas no inicio do código
if(idade >= 18){
    alert("Você é maior de idade");
}else{
    alert("Você é menor de idade");
}


//Intrução 6
let nota = 5.5;
if(nota >= 7){
    alert("Aprovado");
}else if(nota >= 5 && nota <= 6){
    alert("Recuperação");
}else{
    alert("Reprovado");
}


//Intrução 7
let numero1 = 6;
let numero2 = 10;
if(numero1 == numero2){
    alert("Os números são iguais");
}else{
    alert("Os números são diferentes");
}

//Intrução 8
//Variaveis já declaradas no inicio do código
alert("Olá, meu nome é " + nome + " e eu tenho " + idade + " anos");


//Intrução 9
let contador = 1;
while(contador <= 10){
    alert(contador);
    contador++;
}

//Intrução 10
let numeroDigitado;
while(numeroDigitado != 5){
    numeroDigitado = prompt("Digite um número: ");
}


//Intrução 11
contador = 1;
while(contador <= 10){
    alert(`7 x ${contador}:  ${contador * 7}`);
    contador++;
}


//Intrução 12
contador = 1;
while(contador <= 20){
    if(contador % 2 == 0){
        alert(contador);
    }
    contador++;
}


//Intrução 13
let raio = prompt("Informe o raio do circulo: ");
alert(`A área equivale a ${3.14 * (raio * raio)}`);


//Intrução 14
let soma = numero1 + numero2;
alert(`A soma de ${numero1} mais ${numero2} é igual a ${numero1 + numero2}`);