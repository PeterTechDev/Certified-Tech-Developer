const imgContainer = document.querySelector('.imgContainer');
const btn = document.querySelector('button')

const getExternalImg =()=>{
    const promise = fetch("https://dog.ceo/api/breeds/image/random")
    
    promise.then((resolve)=>{
        return resolve.json()
    })
    .then(resultado => imgContainer.innerHTML = `<img src="${resultado.message}">`)
}

btn.onclick=()=>getExternalImg()
getExternalImg()

