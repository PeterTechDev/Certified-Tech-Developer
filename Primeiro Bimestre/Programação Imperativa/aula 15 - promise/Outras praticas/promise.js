// Código sincrono
// function outraFunction() {
//     console.log('Estamos dentro de outraFunction');
//     console.log('Faça algo');
// };

// console.log('Começo');

// outraFunction();

// console.log('Final');


// Código Assíncrono
console.log('Começo');

setTimeout(()=> {
    console.log('Estamos dentro do timeout');

}, 2000);

console.log('Final');

