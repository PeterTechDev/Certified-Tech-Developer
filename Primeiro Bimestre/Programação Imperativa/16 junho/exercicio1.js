// Conta Bancária

// 1. Defina um novo objeto "conta" que contenha as seguintes propriedades:
// a. Númmro da conta
// b. Saldo
// c. Nome do títular

const contaBancaria = {
    numeroConta: 2315400,
    saldo: 15000,
    nomeTitular: 'Pedro Alvares'
}

// 2. Crie um método chamado ‘depósito’ que tem a quantidade de dinheiro como parâmetro de entrada. 
// Ao fazer um depósito, a quantia em dinheiro deve ser adicionada ao saldo existente.
//  O método também deve imprimir na tela o tipo de transação realizada e o novo saldo.

const deposito = (quantia) => {
    contaBancaria.saldo += quantia;
    console.log(contaBancaria.saldo)
}

deposito(500);

// Crie um novo método chamado saque, como o método de depósito, deve consistir em um parâmetro numérico que será a quantia de dinheiro que queremos sacar. 
// Esta quantia será subtraída do saldo existente. 
// Caso o valor do saque seja superior ao saldo disponível, deve-se imprimir na tela a mensagem “Fundos Insuficientes”, caso contrário deve-se imprimir o tipo de transação realizada e o novo saldo.

const saque = (quantia) => {
    if (contaBancaria.saldo < contaBancaria - quantia) {
        console.log('Fundos Insuficientes')
    } else {
        contaBancaria.saldo -= quantia;
        console.log(`Saque de R$${quantia} realizado. Saldo atual é de: R$${contaBancaria.saldo}`)
    }
}

saque(300)

// 4. Crie uma função construtora de nosso objeto de conta.