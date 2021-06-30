// reduce (retorna um único valor do array)

const valores = [10, 5, 9, 7, 8, 12, 4, 4];

// soma
// reduce recebe dois parametros: acumulador + el atual)
console.log(valores.reduce((total, el)=>total+el))