package Aula02Variaveis.exercicios;

//Defina duas sequências de texto. Verifique se são iguais ou diferentes e indique por meio de mensagem.

//Defina duas variáveis Integer e determine pelo valor delas qual é maior, qual é menor ou se são iguais.

//Mostre o resultado obtido.

public class Exercicio2ifElseEquals {
    public static void main(String[] args) {

        String phrase1 = "Hello darkness my old friend";
        String phrase2 = "The sky is a neighbor";


        if(phrase1 == phrase2)
            System.out.println("They're the same");
        else{
            System.out.println("They're NOT the same");
        }

        Integer numA = 10;
        Integer numB = 30;
        int compare;
        if (numA.equals(numB))
            System.out.println("São iguais");
        else {
            compare = numA.compareTo(numB);
            if (compare > 0)
                System.out.println("numA é maior que numB");
            else
                System.out.println("numB é maior que numA");
        }
    }




}
