//CRIAÇÃO DO FORM 
const form = document.createElement('form');
document.body.appendChild(form);

// CAPTURA O FORM 
const $form = document.querySelector('form');

//FUNÇÃO PARA CRIAR OS FILHOS DO FORM
const formChild = son => $form.appendChild(son);

// const create = document.createElement();

// CRIAÇÃO DO TITULO
const title = document.createElement('h1');
formChild(title)
title.innerText = 'Cadastro'


//CRIAÇÃO DOS INPUTS
//email
const email = document.createElement('input');
email.setAttribute('placeholder', 'Digite seu email');
email.setAttribute('type', 'email');
formChild(email);
//senha
const password = document.createElement('input')
password.setAttribute('placeholder', 'Digite sua senha');
password.setAttribute('type', 'passoword');
formChild(password);
//confirmar senha
const passwordConfirm = document.createElement('input')
passwordConfirm.setAttribute('placeholder', 'Confirme sua senha');
passwordConfirm.setAttribute('type', 'passoword');
formChild(passwordConfirm);
//botão enviar
const sendButton = document.createElement('button');
sendButton.setAttribute('type', 'submit');
sendButton.innerText = 'Enviar';
formChild(sendButton);
//botão cancelar
const cancelButton = document.createElement('button');
cancelButton.setAttribute('type', 'reset');
cancelButton.innerText = 'Cancelar';
formChild(cancelButton);


//Construa esses inputs de uma forma que quando forem preenchidos com algum conteúdo, os campos receberão a propriedade “disabled”
//mas quando o mouse estiver acima desse campo ele vai perder essa propriedade possibilitando a modificação do conteúdo pelo usuário.
//Quando o mouse sair do input e o mesmo tiver preenchido, ele receberá a propriedade disabled novamente.

const inputs = document.querySelectorAll('input');
// desativar.forEach(element => {
//     element.setAttribute('disabled', 'true')
// });

// form.setAttribute('disabled', 'true')

// password.addEventListener('Mouse', ()=>{
//     password.setAttribute('disabled', 'false')
//     console.log('ahhhhhh')
// })
// const disbable =(element)=>{
//     if (element.value != '') {
//         element.setAttribute('disabled', 'true');
//     }
// };



password.addEventListener('focus', ()=> console.log('ativar'))



