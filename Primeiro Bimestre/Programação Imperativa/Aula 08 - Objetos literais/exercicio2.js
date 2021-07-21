// Calcular notas

//Crie o objeto de aluno, que consistirá nas seguintes propriedades básicas:
const aluno = {
    nome: 'Joãozinho',
    numeroArquivos: 10,
    listaNotas: [10,4,3,5]
}

// Gostaríamos de calcular a média do aluno e se o aluno foi aprovado com base na nota de aprovação que será dada. 
// Para este exercício, vamos deixar você pensar sobre todos os métodos e propriedades que podem ser necessários para que nosso programa funcione corretamente da maneira solicitada.
const reducer = (acumulator, currentValue) => acumulator + currentValue;


const resultado = (notas) => {
    let media = aluno.listaNotas.reduce(reducer) / aluno.listaNotas.length
    console.log(media > 7 ? 'Parabéns, você foi aprovado' : 'Infelizmente você não alcançou a média.')

}

resultado(aluno.listaNotas)