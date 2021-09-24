
// Exemplo usado em aula
// const promise = fetch("https://dog.ceo/api/breeds/image/random")

// console.log(promise);

// promise.then((resolve)=>{
//     return resolve.json()
// })
// .then(resultado => console.log(resultado));

let imgContainer = document.querySelector('.imgContainer');

async function getExternalImg(){
    let response = await fetch("https://source.unsplash.com/random")
    
    imgContainer 
    .innerHTML += `<img src="${response.url}">`
    console.log(response.url);
}
getExternalImg()

const btn = document.querySelector('button')
btn.onclick=()=>getExternalImg()