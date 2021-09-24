const board = document.querySelector('.board')
const nameInput = document.querySelector('#name')
const themeInput = document.querySelector('#theme')
const comentaryInput = document.querySelector('#textarea')

// let dataBase = JSON.parse(localStorage.getItem(dataBase)) || {}
let questions = JSON.parse(localStorage.getItem('DBquestions')) || []

function Question(name, theme, comentary) {
    this.name = name;
    this.theme = theme;
    this.comentary = comentary;
}

// let question2 = new Question ('Peter', 'CSS', 'Não entendo positoin até hoje')

function createObjQuestion(name, theme, comentary) {
    questions.push(new Question(name.value, theme.value, comentary.value))
}

function checkIfExist (event){
    for (let index = 0; index < questions.length; index++) {
        if(questions[index].comentary == comentaryInput.value){
            alert('Já existe')
            event.prevantDefault()
        }
    }
}

function setStorage() {
    localStorage.setItem('DBquestions', JSON.stringify(questions))
}

// function getState (){
//     const obj = 
// }

const clearLocalStorage = () => localStorage.clear()

document.querySelector('button').onclick = () => {
    checkIfExist()
    createObjQuestion(nameInput, themeInput, comentaryInput)
    setStorage()
    writeBoard()
}

function writeBoard() {
    for (index = 0; index < questions.length; index++) {
        board
            .innerHTML += `<h3>${questions[index].name}</h3>`
        board
            .innerHTML += `<p>${questions[index].theme}</p>`
        board
            .innerHTML += `<p>${questions[index].comentary}</p>`
    }
}
writeBoard()

