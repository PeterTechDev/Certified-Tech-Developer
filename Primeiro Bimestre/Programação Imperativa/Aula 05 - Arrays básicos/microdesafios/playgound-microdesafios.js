// Crie um array que contenha nomes de produtos para compra. 
let listaCompras = ['arroz', 'granola', 'ovos', 'feijão']
// Após isso, exiba no console os resultados das funções relacionadas aos arrays, que são: Join, Pop, Push, Shift e Unshift. 
console.log('O join pega os elementos do array e os separa pelo que for definido no parênteses:');
console.log(listaCompras.join('~'));
console.log('_______________________________________________________________');

console.log('O pop armazena o útltimo elemento do array e o armazena');
console.log(listaCompras.pop());
console.log(listaCompras);
console.log('_______________________________________________________________');

console.log('O push empurra um ou mais elementos dentro do parênteses para o final do array e retorna o novo length')
console.log(listaCompras.push('frango'))
console.log(listaCompras);
console.log('_______________________________________________________________');

console.log('O shift é igual o pop, mas faz com o primeiro elemento do array')
console.log(listaCompras.shift())
console.log(listaCompras)
console.log('_______________________________________________________________');

console.log('O unshift faz igual o push, mas o faz no inicio do array')
console.log(listaCompras.unshift('batata'))
console.log(listaCompras)
console.log('_______________________________________________________________');

// Também se deve escrever com suas palavras, o que cada função realiza. Seguem abaixo alguns exemplos.

// console.log(“O método Join realiza tal coisa”)
// console.log(RESULTADO_DO_JOIN)
