// map (tranformar)
// função declarativa anônima
const letras = ['a', 'b', 'c', 'd'];

// const letrasMaisculas = letras.map(
//     function maiscula(elemento)
//     {
//         return elemento.toLocaleUpperCase();
//     }
// );

// arrow function                    //callback
const letrasMaisculas = letras.map(elemento => elemento.toLocaleUpperCase());

console.log(letrasMaisculas);
