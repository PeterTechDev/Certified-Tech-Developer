// Você deverá criar 6 variáveis:
// Nome
const nome = 'José da Silva';

// Idade
let idade = 27;

// Peso
let peso = 83.5

// Altura
let altura = 1.70

// Plano (só nos interessa saber se TEM ou NÃO TEM)
let plano = true;

// Índice de Massa Corporal (IMC)
// O programa deverá apresentar em tela o valor do IMC de um paciente da tabela com uma mensagem. Por exemplo: “Aline Ferreira tem 33 anos e seu índice de massa corporal é de xx”.
const calcIMC = (peso, altura) => console.log(`${nome} tem ${idade} e seu índice de massa corporal é de ${(peso/(altura**2)).toFixed(1)}`)
// o método toFixed formata o número de decimais que irão aparecer / (2) duas casas decimais

calcIMC(peso, altura);
