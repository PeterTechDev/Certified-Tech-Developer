// Neste exercício, você terá que criar uma função "FizzBuzz" que recebe dois parâmetros numéricos.
// A função deve atender aos seguintes requisitos:
// Você deve imprimir os números de 1 a 100;
// Se o número a ser impresso for um múltiplo de seu PRIMEIRO parâmetro, você deve imprimir a palavra “Fizz” em vez do número correspondente;
// Se o número a ser impresso for um múltiplo do seu SEGUNDO parâmetro, você deve imprimir a palavra "Buzz" em vez do número correspondente;
// Se o número for um múltiplo de AMBOS os parâmetros, você deve imprimir a palavra “FizzBuzz”.

const FizzBuzz = (param1, param2) => {
    let num = 0;
    for (let index = 0; index <= 100; index += 1) {
        if (index % param1 == 0 && index % param2 == 0){
            console.log('Fizz')
        }
        else if (index % param2 == 0) {
            console.log('Buzz')
        } 
        else if (index % param1 == 0){
            console.log('FizzBuzz')
        }
    }
}

FizzBuzz(3,2)