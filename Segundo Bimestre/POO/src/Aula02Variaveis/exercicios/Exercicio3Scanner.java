package Aula02Variaveis.exercicios;

import java.util.Scanner;

//Digite seu nome e sobrenome separadamente,
//a partir dessas variáveis, você deve obter uma terceira com as suas iniciais

public class Exercicio3Scanner {
    public static void main(String[] args) {
        Scanner scan;
        scan = new Scanner(System.in);

        String firstName;
        String lastName;
        char initialFistName;
        char initialLastName;
//        String initials = firstName.charAt(0) + " " + lastName.charAt(0)

        System.out.println("Digite seu primeiro nome");
        firstName = scan.nextLine();

        System.out.println("Digite seu último nome");
        lastName = scan.nextLine();

        System.out.println("Nome completo: " + firstName + " " + lastName);
        initialFistName = firstName.charAt(0);
        initialLastName = lastName.charAt(0);
        System.out.println("As inicias dos nomes são: " + initialFistName + " " + initialLastName);


    }
}
