//1) Criar a função calcularIndiceDeMassaCorporal que receba a altura em centímetros e o peso em quilogramas e calcule o IMC do usuário (peso / altura2). 
// Em seguida, execute a função testando diferentes valores.
console.log('Resposta atividade 1')

const calcIMC = (peso, altura) => {
    return (peso / (altura**2)).toFixed(2)
}

let peter = {
    peso: 110,
    altura: 1.93
}

let leBronJames = {
    peso: 115,
    altura: 2.06
}

console.log(calcIMC(peter.peso, peter.altura));
console.log(calcIMC(leBronJames.peso, leBronJames.altura));