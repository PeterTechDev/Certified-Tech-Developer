// Dado o seguinte código de leitura de arquivos com FileSystem, necessitamos modificá-lo para a sintaxe de Promises, de modo que possamos ver os arquivos corretamente através do console.

const fs = require('fs');

const toJson = (data) => JSON.parse(data)

const printResult = (data) => console.log(data)

const getError = (err) => console.log(err)

const readFile = (file)=>{
    return new Promise((resolve, reject)=>{
        fs.readFile(file, (err, data)=> {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        })
    }).then(toJson).catch(getError)
}

readFile('./file.json').then(printResult);