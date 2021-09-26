package Aula02;
/*
EXERCICIO
Defina duas sequências de texto.
Verifique se são iguais ou diferentes e indique por meio de mensagem.
 */


public class ExerciseString {
    public static void main (String[] args){

        String quote1 = "Be yourself; everyone else is already taken";
        String quote2 = "You only live once, but if you do it right, once is enough";

        if(quote1.equals(quote2)){
            System.out.println("As frases são iguais");
        } else {
            System.out.println("As frases são diferentes");
        }

    }
}