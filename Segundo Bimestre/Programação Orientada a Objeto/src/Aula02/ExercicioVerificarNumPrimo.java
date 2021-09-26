package Aula02;

import java.util.Scanner;

public class ExercicioVerificarNumPrimo {
    public static String primeNumber(int num) {
        String result;
        if (num != 2 && num % 2 == 0 || num == 1) {
            result = "Não é primo";
        } else if (num == 2 || num == 3) {
            result = "É primo";
        } else {
            int contador = 0;
            for (int index = 1; index < num; index += 2) {
                if (num % index == 0) {
                    contador++;
                }
            }
            if (contador > 1) {
                result = "Não é primo";
            } else {
                result = "É primo";
            }
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner analysis;
        analysis = new Scanner(System.in);
        int numAnalysis;
        System.out.println("Digite um número, para consultar se ele é primo");
        numAnalysis = analysis.nextInt();
        System.out.println("O número " + numAnalysis + " " + primeNumber(numAnalysis));

    }
}
