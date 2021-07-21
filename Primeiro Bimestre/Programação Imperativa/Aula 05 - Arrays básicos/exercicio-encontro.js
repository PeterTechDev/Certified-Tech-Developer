// Acesse elementos específicos de um array.
// Percorra um Array  e modifique cada um de seus elementos.
// Adicione elementos a um array.
// Exclua elementos de um array.
// Compare elementos de um array com elementos de outro array. 

// const player = ['Durant', 'Irving', 'Harden', 'George'];

// player[0];

// for (index = 0; index < player.length; index++) {
//     player[index] = player[index] + ' AllStar';
// }

// player.push('Gobert');
// player.pop();

// console.log(player);

// const finallMVP = ['James'];

// player[0] === finallMVP

// Criar um arquivo arrays.js que contenha o código:
let filmes = ["star wars", "clube da luta",  "o poderoso chefão", "top gun",  "interestelar"]

// 2. No mesmo arquivo, coloque todos os elementos em letras MAIÚSCULAS utilizando  .toUpperCase() para cada elemento.
let maiuscula = filmes.join()
console.log(maiuscula.toUpperCase())

// 3. Enquanto trabalhava no exercício 2, descobrimos que também há outro array no código, mas com filmes animados. 
let cartoons = ["toy story", "Procurando Nemo", "kung-fu panda", "wally", "fortnite"] 

// 4. No mesmo arquivo, crie este array e uma função que adiciona cada elemento do array de desenhos animados (cartoons) ao array de filmes. 
// 5. Um dos desenvolvedores avisou que a última animação é na verdade um jogo, então remova esse último elemento do array de desenhos animados (cartoons) antes de passá-los para os filmes.
cartoons.pop();
let mix = filmes + " " + cartoons ;
console.log(mix);

// 6. Por fim, eles nos enviam dois arrays com as avaliações feitas por diferentes usuários do mundo desses filmes, da seguinte forma:
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8]; 
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9]; 
//Eles nos pedem para criar uma função que compare as notas e nos diga se elas são iguais ou diferentes. Eles confirmam que estão na respectiva ordem e que trazem apenas valores numéricos de 1 a 10.

const compare = () => {
    for (let index = 0; index < asiaScores.length; index++) {
        console.log(asiaScores[index] === euroScores[index])
    }
}
compare()
