const board = document.querySelector('.board')
const nameInput = document.querySelector('#name')
const themeInput = document.querySelector('#theme')
const textareaInput = document.querySelector('#textarea')


document.querySelector('button').onclick =()=> writeBoard()

function writeBoard(){
    board
    .innerHTML += `<h3>${nameInput.value}</h3>`
    board
    .innerHTML += `<p>${themeInput.value}</p>`
    board
    .innerHTML += `<p>${textareaInput.value}</p>`
}