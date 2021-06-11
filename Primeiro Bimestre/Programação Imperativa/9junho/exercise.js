// 1.Repetir como um papagaio 
// Crie um loop utilizando for que se repita 5 vezes. Dentro de cada repetição se deve mostrar no console a mensagem “Olá mundo”.
for (let index = 0; index < 5; index++) {
    console.log('Olá mundo')
}

// 2. Contando números ímpares 
// Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares. Dica: A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no console.

for (let index = 0; index < 10; index++) {
    if (index%2 !== 0) {
        console.log(index)
    } 
}

// 3. Criando a tabuada
// Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar utilizar dois loops (for).

const tabuada = number => {
    for (let count = 1; count < 10; count++) {
        console.log(`${number}x${count} = ${number*count}`)
    }
}
tabuada(2);
