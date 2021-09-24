//Função para a criação de cards
let elements = 0
let urlImg = ""
let title = ""
let description = ""

//Criei uma estrutura que será usada para armazenar os cards
let json = {
    'imagem': [],
    'titulo': [],
    'descricao': []
}

function createCard() {
    title = document.getElementById("title").value
    description = document.getElementById("description").value
    urlImg = document.getElementById("url_img").value

    //Vericação de usuário e senha
    let url = new URL('http://127.0.0.1:5500/parte3.html?usuario=Garfield&senha=****')
    let query = new URLSearchParams(url.search.slice(1))

    //Verifica se o campo existe na url
    console.log(query.has('usuario'))

    //Verifica se um determinado usuário existe em uma base de dados
    if (query.get('usuario') == 'Garfield' || query.has('****')) {
        let cardSection = document.getElementById("card");
        cardSection.innerHTML += `<div> <img src="${urlImg}">
                                    <h2>${title}</h2>
                                    <p>${description}<p> </div>`;


        //adiciona o item no último indice do array
        json.imagem.push(urlImg)
        json.titulo.push(title)
        json.descricao.push(description)
        console.log(json)

        //let json = `{"imagem":"${urlImg}", "titulo":"${title}"}`

        //localStorage.setItem('imagem', arrObjImagem)
        //localStorage.setItem('titulo', title)

        //Converto o valor para o objeto JSON
        json = JSON.stringify(json) //Objeto
        localStorage.setItem('card', json)
        json = JSON.parse(json) //Javascript
    } else {
        alert("Digite o endereço de uma imagem existente")
    }

}

window.onload = function() {
    //let imagem = localStorage.getItem('imagem')
    //let titulo = localStorage.getItem('titulo')
    //Pego da memória do valor armazenado
    let obj = localStorage.getItem('card')
    console.log(obj)
        //Para que o JSON seja entendido do local storage, ele precisa ser convertido para um objeto Javascript
    obj = JSON.parse(obj)

    let cardSection = document.getElementById("card");

    for (elements in obj.imagem) {
        cardSection.innerHTML += `<div> <img src="${obj.imagem[elements]}"> 
                                <h2> ${obj.titulo[elements]} </h2>
                                <p> ${obj.descricao[elements]}</div>`

        //Repor os objetos anteriores
        json.imagem.push(obj.imagem[elements])
        json.titulo.push(obj.titulo[elements])
        json.descricao.push(obj.descricao[elements])
    }
}

//Remove o card do Local Storage
function removeCards() {
    localStorage.removeItem('card')
}