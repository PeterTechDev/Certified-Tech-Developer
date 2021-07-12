const fs= require('fs');
console.log(1);
//instanciando Promise              argumentos
const lerArquivo=arq=>new Promise((resolve,reject)=>{
    console.log(2);
    fs.readFile(arq,(err,contents)=>{
        if(err){
            reject(err);
        }
        else {
            resolve(contents);
        }
    })
})

console.log(3);
//utilizando a promise
lerArquivo('./letras.txt').then(contents=> {
    console.log(String(contents));
}).catch(err=> {
    console.log(err);
})
