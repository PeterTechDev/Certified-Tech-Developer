// Crie uma função, que após 5 segundos, dobre o resultado do número passado como parâmetro. Essa função deverá retornar uma Promise. Use o setTimeOut como temporizador.
const double = (number) => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>resolve(number*2), 7000);
    }).then((result)=>result)
}
console.log(double(3).then((result)=>console.log(result)));

// Crie uma função assíncrona que irá receber um parâmetro x. Crie três variáveis: a, b e c dentro do corpo da função. Cada uma dessas variáveis receberá um await da função do passo anterior. Você deve passar como parâmetros dessa função os números 10, 20 e 30, respectivamente.
// Retorne a soma de todos esses elementos, inclusive o parâmetro da função assíncrona.
async function soma (x) {
    const a = 0 + await double(10);
    const b = 0 + await double(20);
    const c = 0 + await double(30);

    console.log(x+a+b+c);
}
console.log(soma(10));

