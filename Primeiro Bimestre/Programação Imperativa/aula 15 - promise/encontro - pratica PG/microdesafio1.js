// Dado o seguinte código de leitura de arquivos com FileSystem, necessitamos modificá-lo para a sintaxe de Promises, de modo que possamos ver os arquivos corretamente através do console.

const fs = require('fs');
 
// forma convencional
    fs.readFile('file.json', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(JSON.parse(data));
        }
    });
