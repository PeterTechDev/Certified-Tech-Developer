//Exercício 1 - Percorra o array abaixo e exiba seus elementos:
const pontos = [12, 34, 56, 34, 5, 8, 76, 4, 1, 90];

for (let index = 0; index < pontos.length; index++) {
    console.log(pontos[index])
};

//Exercício 2 - Crie um array com valores diversos, percorra-o, altere e mostre seus elementos:
const pontos2 = [12, 34, 56, 34, 5, 8, 76, 4, 1, 90];

for (let index = 0; index < pontos2.length; index++) {
    pontos2[index] = pontos2[index] + 1;
};

// Exercício 3 - Crie outro array, percorra-o, altere, salve e exiba seus elementos:
let pontos3 = [12, 34, 56, 34, 5, 8, 76, 4, 1, 90];

function alterar (array) {
    for (let index = 0; index < pontos3.length; index++) {
        pontos3[index] = pontos3[index] + 10;
    }
}

function exibir (array) {
    for (let index = 0; index < pontos3.length; index++) {
        console.log(array[index])
    }
}

alterar(pontos3)
console.log(pontos3)

//Exercício 4 - Crie um último array, percorra-o, selecione os elementos, salve e mostre-os:
let avengers = ['hulk', 'ironMan', 'Captain America', 'Thor'];
let result = [];
for (let index = 0; index < avengers.length; index++) {
    result.push(avengers[index])
};
console.log(result);

// Exercícios extras:
// 1) Escrever um programa que imprime 25 termos da série 11 - 22 - 33 - 44, etc.
const onzeX = (number) => {
    for (let index = 1; index < 26; index++) {
       let resultado = [];
       resultado = index * number ;
       console.log(resultado)
    };
};
onzeX(11)
