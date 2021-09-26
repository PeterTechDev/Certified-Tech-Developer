package Aula02Variaveis;

import java.util.Scanner;

public class exemploScanner {
    public static void main(String[] args) {
        Scanner scan;
        scan = new Scanner(System.in);

        int num1;
        int num2;
        float coeficiente;
        String nome;
        char inicial;

        System.out.println("Insira um primeiro número");
        num1 = scan.nextInt();

        System.out.println("Insira um segundo número");
        num2 = scan.nextInt();

        System.out.println("Insira o coeficiente");
        coeficiente = scan.nextFloat();

        // Não há método para recolher characteres
        //Para entrada de texto é usado o nextLine
        System.out.println("Digite seu nome");
        nome = scan.nextLine();
        //Não consegio CAPTURAR A STRNIG NOME
    }
}
