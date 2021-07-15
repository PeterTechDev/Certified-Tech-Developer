// Agora temos um código com callbacks aninhados e precisamos executá-los todos ao mesmo tempo — com as funções de callbacks não poderíamos fazer isso —. Precisamos usar o método Promise.all() para poder transcrever nossos callbacks aninhados em Promises e obter por console os 3 arquivos lidos e impressos por eles.

const fs = require('fs');
 
// convencional
function leitorDeArquivosMultiplos(){
    return fs.readFile('file.json', (err, data1) => {
                fs.readFile('file2.json', (err, data2) => {
                    fs.readFile('file3.json', (err, data3) => {
                        console.log(JSON.parse(data1));
                        console.log(JSON.parse(data2));
                        console.log(JSON.parse(data3));
                    });
                });
            });
}
 
leitorDeArquivosMultiplos()

let arquivo1 = readFile('./file.json')
let arquivo2 = readFile('./file2.json')
let arquivo3 = readFile('./file3.json')
Promise.all([arquivo1,arquivo2,arquivo3]).then(printResult).catch(getError)