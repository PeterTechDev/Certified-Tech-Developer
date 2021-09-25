const imgContainer = document.querySelector('.imgContainer');
const btn = document.querySelector('button')


btn.onclick=()=>updateImg()

async function updateImg(){
    await getExternalImg()
}

async function getExternalImg(){
    let response = await fetch("https://source.unsplash.com/random")
    
    imgContainer 
    .innerHTML = `<img src="${response.url}">`
}

getExternalImg()
