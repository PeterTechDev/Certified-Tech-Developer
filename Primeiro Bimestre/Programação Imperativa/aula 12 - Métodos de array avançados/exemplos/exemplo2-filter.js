const numeros = [1,2,3,4,5,6,7,8,9];

//separar pares e ímpares

// Vai separar todos os números que o resto da divisão seja 0
const pares = numeros.filter(el => el %2 == 0);

const impares=numeros.filter(el => el %2 !== 0);

console.log(pares);
console.log(impares);