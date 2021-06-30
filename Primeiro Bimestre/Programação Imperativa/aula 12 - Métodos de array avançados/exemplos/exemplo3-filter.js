const pessoas = [
    {nome:'Maria', salario: 2000.00},
    {nome:'João', salario: 5000.00},
    {nome:'José', salario: 7000.00},
    {nome:'Paula', salario: 10000.00}
];

// filtrar pessoas que recebem mais de 2000
// sem filter
const maisDoisMil = el => el.salario>5000.00;

// com filter
console.log(pessoas.filter(maisDoisMil))

