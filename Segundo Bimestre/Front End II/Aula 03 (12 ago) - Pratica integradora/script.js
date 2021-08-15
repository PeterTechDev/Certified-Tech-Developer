// FUNÇÕES DA CALCULADORA
let somar = (n1, n2) => {return n1 + n2;}

let subtrair = (n1, n2) => {return n1 - n2;}

let multiplicar = (n1, n2) => {
    let resultado = 0;
    if((n1 == 0) || (n2 == 0)){
        return(resultado);
    }else{
        return (n1 * n2);
    }
}

let dividir = (n1, n2) => {
    if (n2==0) {
        return("Não se pode dividir por zero");
    } else {
        return (n1 / n2);
    }
}


// FUNÇÃO CALCULADORA
function calculadora(){
    // parseInt para converter o que o usuario digitar em inteiro e assim o CASE reconhecer a opção
    let operacao = parseInt(prompt("Qual operação deseja realizar? \n 1- Somar \n 2- Subtrair \n 3-Multiplicar \n 4- Subtrair"));
    let n1 = parseFloat(prompt("Qual o primeiro número?"));
    let n2 = parseFloat(prompt("Qual o segundo número?"));

    switch(operacao){
        case 1:
            alert(somar(n1, n2));
            break;
        case 2:
            alert(subtrair(n1, n2));
            break;
        case 3:
            alert(multiplicar(n1, n2));
            break;
        case 4:
            alert(dividir(n1, n2));
            break;
    }
}

calculadora();