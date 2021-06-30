// map em array de objetos
const pessoas = [
    {nome:'Maria', salario: 2000.00},
    {nome:'João', salario: 5000.00},
    {nome:'José', salario: 7000.00},
    {nome:'Paula', salario: 10000.00}
];

// 2 arrays com os nomes em maíscula
const nomesUpperCase = el => el.nome.toUpperCase();



// salario

console.log(pessoas.map(nomesUpperCase))
