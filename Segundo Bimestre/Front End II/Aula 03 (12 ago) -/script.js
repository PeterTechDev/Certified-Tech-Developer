let operacao = prompt("Qual operação deseja realizar? \n 1- Somar \n 2- Subtrair \n 3-Multiplicar \n 4- Subtrair");

let num1 = prompt("Qual o primeiro número?");
let num2 = prompt("Qual o segundo número?");


const somar = (num1, num2) => num1 + num2;

const subtrair = (num1, num2) => num1 - num2;

const multiplicar = (num1, num2) => {
    let resultado = 0;
    if ((num1 == 0) || (num2 == 0)){
        alert(resultado);
    }else{num1*num2}
}

const dividir = (num1, num2) => {
    if (num2==0) {
        return("Não se pode dividir por zero");
    } else {
        return num1 / num2;
    }
}




    switch(operacao){
        case '1':
           alert(`Resultado: ${somar(num1, num2)}`);
            break;
        case 2:
            alert(subtrair());
            break;
        case 3:
            alert(multiplicar());
            break;
        case 4:
            alert(dividir());
            break;
    }
