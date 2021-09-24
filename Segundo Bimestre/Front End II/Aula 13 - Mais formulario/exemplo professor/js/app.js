//Função para a criação de cards
let elements = 0
let urlImg = ""
let title = ""
let description = ""
let arrObjImagem = []


function createCard() {
    title = document.getElementById("title").value
    description = document.getElementById("description").value
    urlImg = document.getElementById("url_img").value


    let cardSection = document.getElementById("card");
    cardSection.innerHTML += `<div> <img src="${urlImg}">
                                    <h2>${title}</h2>
                                    <p>${description}<p> </div>`;

    let json = `{"imagem":"${urlImg}", "titulo":"${title}"}`

    //localStorage.setItem('imagem', arrObjImagem)
    //localStorage.setItem('titulo', title)

    localStorage.setItem('card', json)
}

window.onload = function() {
    //let imagem = localStorage.getItem('imagem')
    //let titulo = localStorage.getItem('titulo')

    let obj = localStorage.getItem('card')
    obj = JSON.parse(obj)

    let cardSection = document.getElementById("card");
    cardSection.innerHTML += `<div> <img src="${obj.imagem}"> 
                                    <h2> ${obj.titulo} </h2></div>`
}