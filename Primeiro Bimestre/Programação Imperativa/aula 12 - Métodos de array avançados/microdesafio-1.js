// Crie uma função que receba um array composto por números e retorna uma nova matriz (array) com todos os valores divididos pela soma de toda a matriz, usando map() e reduce().
const numbers = [2, 5, 7, 8, 10];
const numbers2 = [100, 132, 254, 514]

const exerUm = arrayNumber => {
    const soma = arrayNumber.reduce((acumulador, atual)=>acumulador+atual);
    const calc = el => el/soma;
    console.log(arrayNumber.map(calc))
}

exerUm(numbers);
exerUm(numbers2);
