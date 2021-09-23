const nameInput = document.querySelector('#fullName')
const btn = document.querySelector('button')

const verTwoWords =(input)=> {
    if(input.value.trim().indexOf(' ') != -1){
        console.log('tem espaço')
        nameInput.style.borderColor = 'black'
    } else {
        nameInput.style.borderColor = 'red'
        console.log('ativado')
    }
}

const verNameTwoChar =(input)=>{

}

btn.addEventListener('click', ()=> verTwoWords(nameInput))