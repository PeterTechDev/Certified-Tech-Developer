package Aula02Variaveis.mesaTrabalho;

//Faça uma função que, dado um número, indica se é um número primo ou não. Um número primo é aquele que só pode ser dividido por 1
// e ele mesmo. Por exemplo: 25 não é primo, pois 25 é divisível por 1, 5 e 25. 17 é primo porque só pode ser dividido por 1 e por 17.

//Para usar esta função que iremos criar em um programa, podemos permitir a entrada de apenas
// um número para verificar se o número é primo ou não.

// Para resolvê-lo, use a função obtida no exercício desenvolvido na aula assíncrona, Boolean e Divisível (int n, int divisor).

import java.util.Scanner;

public class Exercicio1verificarNumerosPrimos {
    public static String primeNumber(int num) {
        String result;
        if (num != 2 && num % 2 == 0 || num == 1) result = "Não é primo";
        else if (num == 2 || num == 3) {
            result = "É primo";
        } else {
            int counter = 0;
            for (int index = 1; index < num; index += 2) {
                if (num % index == 0) {
                    counter++;
                }
            }
            if (counter > 1) result = "Não é primo";
            else {
                result = "É primo";
            }
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner sc;
        sc = new Scanner(System.in);

        int numSc;

        System.out.println("Digite um número para verificar se é primo");
        numSc = sc.nextInt();
        System.out.println("O número " + numSc + " " + primeNumber(numSc));
    }
}
