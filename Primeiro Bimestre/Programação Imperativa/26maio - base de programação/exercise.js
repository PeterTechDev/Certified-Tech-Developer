// Um nutricionista enviou a seguinte tabela com os dados de seus clientes e, você será responsável por calcular o Índice de Massa Corporal de cada registro:
// Quais são as variáveis? 
// Idade, peso, altura e plano

// Quais são as constantes? De que tipo são? 
// Nome e sobrenome

// Qual variável poderia armazenar o valor null segundo estes dados?
// Plano


// O Índice de Massa Corporal (IMC) se calcula dividindo o peso pela altura2  (a altura deve estar em metros e o peso em quilogramas). Por exemplo, no caso de Carlos de Souza, a altura ao quadrado é 3,09. 

// Você deverá criar 6 variáveis:
// Nome
let person1 = ['José da Silva', 27, 83.5, 1.7];
let firstName = ['Carlos'];

// Idade
let age = [27]
let age = [28]

// Peso
let weight = [83.5]
// , 80.1, 63.7, 55.0]

// Altura
let height = [1.7]
// , 1.76, 1.53, 1.62]

// Plano (só nos interessa saber se TEM ou NÃO TEM)

// Índice de Massa Corporal (IMC)
// O programa deverá apresentar em tela o valor do IMC de um paciente da tabela com uma mensagem. Por exemplo: “Aline Ferreira tem 33 anos e seu índice de massa corporal é de xx”.

let IMC = (peso, altura) => {
    console.log(`${person1[0]} tem ${person1[1]} anos e seu índice de massa corporal é de ${peso / altura}.`)
};
console.log(IMC(person1[2], person1[3]));
