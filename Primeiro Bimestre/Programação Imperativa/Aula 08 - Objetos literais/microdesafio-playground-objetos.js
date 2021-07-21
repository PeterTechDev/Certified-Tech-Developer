// Meu cardápio

// Crie uma função construtora chamada Restaurante, que receba como parâmetros o nome do restaurante e o cardápio (que será um array de strings).
// Após isso chame a função entrada() dentro do objeto, que irá trazer uma mensagem de boas-vindas, informando o nome do restaurante, e o cardápio.

function Restaurante(nome, cardápio){
    this.nome = nome;
    this.cardápio = cardápio;
}

let restaurante1 = new Restaurante('Oba-Oba', 'salgados');

console.log(restaurante1);