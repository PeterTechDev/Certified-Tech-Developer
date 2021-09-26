package Aula01;

import java.util.Scanner;

public class AtivProf {

    public static String dataNasc(String dia, String mes, String ano) {
        String dataCompleta = dia + "/" + mes + "/" + ano;
        return dataCompleta;
        // O return é necessário quando há o tipo de dado. Se for void não é preciso
    }


    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        //É uma classe para receber dados do user
        //Dentro dos parenteses é para indicar o input
        System.out.println("Digite seu nome");
        String nome = entrada.nextLine();
        //nextLine é especifico para string

        System.out.println("Digite seu sobrenome");
        String sobrenome = entrada.nextLine();

        String inicialNome = nome.charAt(0) + " " + sobrenome.charAt(0);


        System.out.println("Digite seu dia de nascimento:");
        String dia = entrada.nextLine();
        System.out.println("Digite seu mês de nascimento:");
        String mes = entrada.nextLine();
        System.out.println("Digite seu ano de nascimento:");
        String ano = entrada.nextLine();

        System.out.println("Seu nome é " + nome + " " + sobrenome + " " + "Suas iniciais " + inicialNome + " " + "Sua data de nascimento: " + dataNasc(dia, mes, ano));
    }
}
