//1) Criar a função calcularIndiceDeMassaCorporal que receba a altura em centímetros e o peso em quilogramas e calcule o IMC do usuário (peso / altura2). 
// Em seguida, execute a função testando diferentes valores.
console.log('Respostas do primeiro microdesafio')
const calcIMC = (peso, altura) => {
    let result = peso / altura;
    console.log(result)
}

let peter = {
    peso: 110,
    altura: 193
}

let leBronJames = {
    peso: 115,
    altura: 206
}

calcIMC(peter.peso, peter.altura)
calcIMC(leBronJames.peso, leBronJames.altura)

console.log('------------------------------------------------------------------')
//2) Criar as 4 “function expression” (dentro de variáveis) básicas de uma calculadora:
// Soma;
// Subtração;
// Multiplicação;
// Divisão.
// As 4 funções deverão receber dois parâmetros e retornar o resultado da operação matemática correspondente.
console.log('Respostas do segundo microdesafio')

const somar = (num1, num2) => {
    let resultado = num1 + num2
    console.log(resultado)
}
const subtrair = (num1, num2) => {
    let resultado = num1 - num2
    console.log(resultado)
}
const multiplicar = (num1, num2) => {
    let resultado = num1 * num2
    console.log(resultado)
}
const dividir = (num1, num2) => {
    let resultado = num1 / num2
    console.log(resultado)
}

dividir(24,2)

console.log('------------------------------------------------------------------')

// 3) Criar as variáveis, nomeJogador, golsJogador, precoEmDolares. Depois, criar a função fazerGol que incremente a quantidade de gols do jogador em uma unidade e, em seguida, imprima em tela a mensagem “GOL!!!!!!!!!”. Além disso, incremente o valor do jogador em 10.000 dólares. Por conseguinte, teste a execução da função várias vezes e imprima em tela a nova quantidade de gols do jogador e o preço do jogador no mercado.
console.log('Respostas do terceiro microdesafio')
let nomeJogador = 'Ramon';
let golsJogador = 0;
let precoEmDolares = 0;

const fazerGol = () => {
    golsJogador++;
    console.log('GOOOOOOOOL!!!');
    precoEmDolares = precoEmDolares + 10000
}
fazerGol()
fazerGol()
console.log(precoEmDolares)
fazerGol()
console.log('Do ' + nomeJogador + ' que agora vale ' + precoEmDolares)

// 4) Criar a função hatTrick (expressão usada para dizer que um jogador fez 3 gols em uma mesma partida) que em seu interior execute três vezes a função fazerGol e, em seguida, aumente o valor do jogador em 10% a mais por ano em comparação com o valor atual.

const hatTrick = () => {
    for (let index = 0; index < 3; index++) {
        fazerGol()
    };
}
precoEmDolares = precoEmDolares + (precoEmDolares*0.10);
console.log('Hatrick do ' + nomeJogador + 'e seu preço subiu para ' + precoEmDolares);
