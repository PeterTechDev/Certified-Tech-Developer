package Aula02;

/* EXERCICIO:
Digite seu nome e sobrenome separadamente, a partir dessas variáveis, você deve obter
uma terceira com as suas iniciais.
 */

import java.util.Scanner;

public class exerciseIntegrador {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String nome;
        String sobreNome;


        System.out.println("Digite seu primeiro nome");
        nome = sc.nextLine();

        System.out.println("Digite seu sobrenome");
        sobreNome = sc.nextLine();

        String iniciais = nome.charAt(0) + " " + sobreNome.charAt(0);

        System.out.println("Seu nome completo é: " + nome + " " + sobreNome + " e suas iniciais são: " + iniciais);
    }
}


