// Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) com apenas as palavras que têm mais do que uma quantidade de letras maior do que o número informado. (verifique como funciona o método filter ())
const random = ['aluno', 5, 'pêra', 'bebedouro', 'ovo', 'lobisomen'];
const random2 = ['Rouge', 7, 'paralelepipido', 'hanson', 'metallica', 'System of Down', 'KLB']


const exerDois = arrayRandom => {
    const numberArray = arrayRandom.filter(Number);
    const result = arrayRandom.filter(el => el.length > numberArray)
    console.log(result)
}

exerDois(random);
exerDois(random2);
