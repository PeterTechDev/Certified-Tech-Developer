package com.company;

public class Main {

    static void callNames(String fname, String sname, String dnascimento) {
        System.out.println(fname.charAt(0) + " " + sname.charAt(0));
        System.out.println(dnascimento);
    }

    public static void main(String[] args) {
        // write your code here

        callNames("Peter", "Leite", "01/01/1993");

        String nome = "Gustavo";
        String sobrenome = "Barretto";
        String dataNascimento = "05/06/2001";
        System.out.println(nome.charAt(0) + " " + sobrenome.charAt(0));

    }
}

public class Main {

    public static void main(String[] args) {
        String nome = "Thays";
        String sobrenome = "Gama";
        String iniciais = nome.charAt(0)+" "+ sobrenome.charAt(0);
        int diaNascimento= 15;
        int mesNascimento= 8;
        int anoNascimento= 1992;
        System.out.println(iniciais);
        String dataNascimento = getDataNascimento(diaNascimento, mesNascimento, anoNascimento);
        System.out.println(dataNascimento);
    }


    public static String getDataNascimento(int dia, int mes, int ano){
        return dia+"/"+mes+"/"+ano;
    }

}
