// const nomeInput = document.getElementById('nome')
// const sobrenomeInput = document.getElementById('sobrenome')
let container = document.querySelector(".container");
document.getElementById('trim')
let nomeInput = document.getElementById('nome')
let sobrenomeInput = document.getElementById('sobrenome')
let fullName = '';

const submit = () => {
    fullName = nomeInput.value + '' + sobrenomeInput.value
    trim(fullName)
    upCase(fullName)
    lwCase(fullName)
    concat(fullName)
    replace(fullName)
}


const trim =()=> document.getElementById('trim').innerHTML = fullName.trim()
const upCase =()=> document.getElementById('toUpperCase').innerHTML = fullName.toLocaleUpperCase()
const lwCase =()=> document.getElementById('toLowerCase').innerHTML = fullName.toLocaleLowerCase()
const concat =()=> document.getElementById('concat').innerHTML = nomeInput.value.concat(sobrenomeInput.value)
const replace =()=> document.getElementById('replace').innerHTML = (fullName.replace('a','@')).replace('e', '3')
