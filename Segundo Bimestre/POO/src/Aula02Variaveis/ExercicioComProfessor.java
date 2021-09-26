package Aula02Variaveis;

//Digite seu nome e sobrenome separadamente, a partir dessas variáveis obtenha em uma terceira, suas iniciais e sua data de nascimento,
// para a data digite 3 valores que representam dia, mês e ano.
//Em seguida, exiba uma mensagem, como se fosse um token, com seu nomes, as iniciais do seu nome e sobrenome
// e sua data de nascimento no formato "dd / mm / aaaa"

//Nota: Use alguma função para resolver, por exemplo, dados os 3 valores, retorne a data como uma string.

public class exercicioComProfessor {
    public static String getDataNascimento(int day, int month, int year) {
        return day + "/" + month + "/" + year;
    }

    public static void main(String[] args) {
        String nome = "Peter";
        String sobrenome = "Leite";
        String iniciais = nome.charAt(0) + "" + sobrenome.charAt(0) + " " + getDataNascimento(
                23,
                12,
                1993);
        System.out.println(iniciais);
    }
}
