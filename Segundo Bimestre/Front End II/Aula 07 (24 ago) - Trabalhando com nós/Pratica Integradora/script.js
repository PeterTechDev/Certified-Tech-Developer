// Crie um formulário
// R: Linha 10 HTML
// Selecione o formulário e salve-o numa variável com querySelector.
const form = document.querySelector('#form');

//INSERIR OS ITENS A SEGUIR USANDO JS
// Um título com o texto: “Login”.
// TITULO
const title = document.createElement('h1');
form.appendChild(title);
title.innerText = 'Login';

// Um campo de input text com um placeholder: “Email”.
// EMAIL 
const emailInput = document.createElement('input');
form.appendChild(emailInput);
emailInput.setAttribute('placeholder', 'Digite seu email'); 

// Um campo de input password com um placeholder: “Senha”.
const passwordInput = document.createElement('input');
form.appendChild(passwordInput);
passwordInput.setAttribute('placeholder', 'Digite sua senha')

// Um botão submit com o texto “Enviar”.
const submitBtn = document.createElement('button');
form.appendChild(submitBtn)
submitBtn.innerHTML = 'Enviar'

// Um botão reset com o texto “Cancelar”.
const cancelBtn = document.createElement('button');
form.appendChild(cancelBtn);
cancelBtn.innerHTML = 'Cancelar'

// Insira a propriedade disabled no campo de Email.
emailInput.setAttribute('disabled', true);
// fonte da resposta: https://stackoverflow.com/questions/7526601/setattributedisabled-false-changes-editable-attribute-to-false

// Insira um estilo da sua escolha, a sugestão seria o display flex com flex-direction column.
form.style.display = 'flex'
form.style.flexDirection = 'collumn'

form.style.textAlign = 'center'

// Remova o atributo placeholder do email.
emailInput.removeAttribute('placeholder')
