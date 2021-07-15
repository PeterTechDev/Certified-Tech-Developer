// Em um arquivo, cole o código abaixo. Em seguida, exporte a função promessa e importe-a em um arquivo diferente. Por fim, precisamos ler o arquivo file.json após os segundos especificados na função.

function promessa() {
    return new Promise(function(resolve, reject) {
      console.log("lendo arquivo...");
      setTimeout(resolve, 3000);
    })
  }
