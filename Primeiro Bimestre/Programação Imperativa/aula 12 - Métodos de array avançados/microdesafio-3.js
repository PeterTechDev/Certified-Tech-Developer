// Crie um array de objetos literais, onde cada objeto será um aluno e terá dois atributos: nome e nota. 
// Crie duas funções que ordenam o array: uma ordenará os alunos em ordem alfabética e a outra o fará por nota, da mais alta para a mais baixa. (Analise qual método seria apropriado para este caso. Recomendamos que você consulte a documentação do MDN: 

const alunosPI = [
    {nome: 'Dave', nota: 3},
    {nome: 'Justin', nota: 7},
    {nome: 'Abraão', nota: 5}
]

// Função para ordenar por alfabeto:
const ordemAlfab = alunos => {
    alunos.sort((a, b) => {
        if (a.nome > b.nome) {
            return 1;
        }
        if (a.nome < b.nome) {
            return -1;
        }
        return 0
    })
    console.log(alunos)
}
ordemAlfab(alunosPI);

// Função para ordernar por maior nota:
const maiorNota = alunos => {
    alunos.sort((a, b) => (a.nota < b.nota) ? 1 : -1)
    console.log(alunos)
}

maiorNota(alunosPI);