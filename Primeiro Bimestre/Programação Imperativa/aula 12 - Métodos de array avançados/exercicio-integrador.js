// Temos que fazer um sistema para um Agricultor controlar suas vendas. Ele tem um controle de vendas em um caderno, onde os produtos estão organizados por nome, preço e quantidade vendida. 
// Portanto, crie um array de objetos literais com essas informações. No sistema, você tem que adicionar uma função (ou várias) que realize os seguintes passos:

const agroStore = [
    {nome: 'Pá', preço: 35.99, quantidadeVendida:325},
    {nome: 'Sal', preço: 12.00, quantidadeVendida:2159},
    {nome: 'Enxada', preço: 44.50, quantidadeVendida:1598},
    {nome: 'Par de Luvas', preço: 23.99, quantidadeVendida:2554}
];

// Calcular o lucro total de todos os produtos;

const profit = (valor, vendidos) => {
    let totalPrice = Object.values(valor)
    console.log(totalPrice)

    // let result = vendidos * totalPrice;
    
    // console.log(`O 'lucro' foi de ${result}`)
}

profit(agroStore);