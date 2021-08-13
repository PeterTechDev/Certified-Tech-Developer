package Aula02;

public class exerciseInteger {
    public static void main(String[] args) {
        Integer first = 30;
        Integer second = 30;

        if (first < second) {
            System.out.println(first + " é menor que " + second);
        } else if (first == second) {
            System.out.println("São iguais");
        } else {
            System.out.println(first + " é maior que " + second);
        }
    }
}