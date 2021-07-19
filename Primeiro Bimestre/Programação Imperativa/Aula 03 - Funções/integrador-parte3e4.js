// // 3) Criar as variáveis, nomeJogador, golsJogador, precoEmDolares. Depois, criar a função fazerGol que incremente a quantidade de gols do jogador em uma unidade e, em seguida, imprima em tela a mensagem “GOL!!!!!!!!!”. Além disso, incremente o valor do jogador em 10.000 dólares. Por conseguinte, teste a execução da função várias vezes e imprima em tela a nova quantidade de gols do jogador e o preço do jogador no mercado.
console.log('Respostas do terceiro microdesafio')
const nomeJogador = 'Ramon';
let golsJogador = 0;
let precoEmDolares = 0;

const fazerGol = () => {
    golsJogador +=1;
    console.log('GOOOOOOOOL!!!');
    precoEmDolares += 10.000;
}
fazerGol()
fazerGol()
console.log(precoEmDolares)
fazerGol()
console.log(`Do ${nomeJogador} que agora vale ${precoEmDolares} mil dólares`)

// // 4) Criar a função hatTrick (expressão usada para dizer que um jogador fez 3 gols em uma mesma partida) que em seu interior execute três vezes a função fazerGol e, em seguida, aumente o valor do jogador em 10% a mais por ano em comparação com o valor atual.

const hatTrick = () => {
    for (let index = 0; index < 3; index +=1) {
        fazerGol()
    };
}
precoEmDolares = precoEmDolares + (precoEmDolares*0.10);
console.log(`Hat Trick do ${nomeJogador} que agora está estimado em ${precoEmDolares} mil dólares`);
    