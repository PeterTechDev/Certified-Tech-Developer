let notas = [9, 5, 8, 10];
//  EXERCICIO
// Crie uma estrutura na qual todos os números do array sejam somados sequencialmente: o primeiro número seja somado ao segundo e o resultado seja impresso no console e assim por diante
// Por fim, a soma desses números deve ser dividida pelo total de bimestres (4) para calcular a média e guardada em uma variável, a qual deve ser exibida no console.


//função para imprimir uma nota de cada vez a medida que ela é somada a anterior e mostrar msg personalizada
const somaNotas = (arrayNotas) => {
    let result = 0;
    // cria uma variável para receber o resultado da concatenação

    for (let index = 0; index < arrayNotas.length; index++) {
        result += arrayNotas[index];
        // laço de repetição para iterar o array e somar o valor do index à variável criada acima
        console.log(`Parabéns pela conclusão do ${index+1}º bimestre. Sua nota foi: ${result}`)
        //usando template literals para imprimir a mensagem com as variáveis
    }
}

//função para calcular media do total das notas com a duvisão por total de bimestres
//nesta função eu usei return no lugar de consolelog para poder capturar o valor na função resultadofinal
const mediaNotas =(arrayNotas)=> {
    let soma = arrayNotas.reduce((acumulador, atual)=> acumulador + atual);
    soma = soma / arrayNotas.length;
    return soma
}

// invocando as função
somaNotas(notas)
//console log pois o função retorna um valor sem mostrar no console, diferente das outras que já tem consolelog dentro delas
console.log(`A média foi de: ${mediaNotas(notas)}`)


// EXERCICIO EXTRA: 
// 1.Utilizando a função console.log informe a nota que o aluno teve em cada um dos
// bimestres e por fim sua nota final. Por exemplo: “Parabéns pela conclusão do primeiro
// bimestre. Sua nota foi: 8.”;

// 2. Após mostrar a nota final, crie uma estrutura de decisão que informe se o aluno foi
// aprovado ou não, sendo a média da escola 7.

// 3. Por fim, comente as etapas do código.

//função para verificar e imprimir a aprovação ou não do aluno
const resultadoFinal =(arrayNotas)=> {
    let notaFinal = mediaNotas(arrayNotas);
    //invocando a função para usar como valor de comparação
    let  resultado = notaFinal > 7 ? console.log('Parabéns, você foi aprovado!') : ('Infelizmente você não foi aprovado')
    // operador ternário para comparar e imprimir a msg
}

resultadoFinal(notas)