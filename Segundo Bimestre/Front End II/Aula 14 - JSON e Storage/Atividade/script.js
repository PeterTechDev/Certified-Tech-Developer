const board = document.querySelector('.board')
const nameInput = document.querySelector('#name')
const themeInput = document.querySelector('#theme')
const comentaryInput = document.querySelector('#textarea')

let questions = JSON.parse(localStorage.getItem('DBquestions')) || []

function Question(name, theme, comentary) {
    this.name = name;
    this.theme = theme;
    this.comentary = comentary;
}

// let question2 = new Question ('Peter', 'CSS', 'Não entendo positoin até hoje')

function createObjQuestion(name, theme, comentary) {
    questions.push(new Question(name.value, theme.value, comentary.value))
    console.log(questions);
}

function checkIfExists(event) {
    for (index in questions) {
        if (questions.length >= 0 && questions[index].comentary == comentaryInput.value) {
            alert('Já existe')
            event.prevantDefault()
        }
    }
}

function setStorage() {
    localStorage.setItem('DBquestions', JSON.stringify(questions))
}

document.querySelector('button').onclick = () => {
    checkIfExists()
    createObjQuestion(nameInput, themeInput, comentaryInput)
    setStorage()
    writeBoard()
}

function writeBoard() {
    board.innerHTML =''
    for (index = 0; index < questions.length; index++) {
        board
            .innerHTML += `<h3>Nome: ${questions[index].name}</h3>`
        board
            .innerHTML += `<p>Assunto: ${questions[index].theme}</p>`
        board
            .innerHTML += `<p>Descrição: ${questions[index].comentary}</p>`
    }
}
writeBoard()

const clear = () => {
    localStorage.removeItem('DBquestions')
    location.reload()
}
