// let frutas1 = ['melao', 'mamao', 'limao siciliano'];
// let frutas2 = ['morango', 'cereja', 'maça vermelha'];
// let frutas3 = ['limao', 'kiwi', 'maca verda'];

// let frutas1A = frutas1.map(fruta => fruta.toUpperCase());

// console.log(frutas1A)

// let todasFrutas = [...frutas2,...frutas1A,...frutas3];

// console.log(todasFrutas)

// let x = 50;
// let resto = 50%2;
// respota = resto == 0 ? 'par' : 'impar';
// console.log(respota)

// let frutas1 = ['melao', 'mamao', 'limao'];
// let [frutaA, frutaB, frutaC] = frutas1;

// console.log(frutaA)
// console.log(frutaB)
// console.log(frutaC)
// console.log(frutas1)

// var salarios = [1050.00, 2000.00, 5000.00, 1000.00]
// var salarioAtualizados = salarios.map(ajusta);

// function ajusta(valor) {
//     return valor*1.04;
// }

// console.log(salarios)
// console.log(salarioAtualizados)

// for (var index=0; index<50; index+=10) {
//     console.log(index);
// }
// console.log(index)

// let numeros = [10, 8, 7, 99, 0, 1, 6];
// console.log(numeros);
// console.log(numeros.sort(function(a,b){ return b-a;}));

let valor = 5;
let fatorial = 1;
for (let i = valor; i > 1; i--) {
    fatorial*=i;
}
console.log('Fatorial =' +fatorial)

// var z = 0;
// for (var i=20; i<50; i+=10) {
//     z+=i;
// }
// console.log(z)

// let x=5;
// let y = x++ + ++x;
// console.log('y= ' +y);

// x =3;
// y=x*(x+1)*x++;
// x=5;
// y=3;
// y*=x+1
// console.log('x= ' +x);
// console.log('y= ' +y);

function soletrar(texto) {
    console.log(texto.replace('-', '').toLocaleUpperCase().split('').join('-'));
}
soletrar('digital-house');
soletrar('ctd')