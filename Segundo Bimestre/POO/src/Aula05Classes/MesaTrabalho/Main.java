package Aula05Classes.MesaTrabalho;

public class Main {
    public static void main(String[] args) {
        Jogador player1 = new Jogador("Peter", "Pharaoh");
        Jogador player2 = new Jogador("Ítalo", "Nefalim");

        player1.levelUp();
        player1.levelUp();
        player1.levelUp();
        System.out.println("Seu nível é: "+""+ player1.getLevel());

        player2.levelUp();
        System.out.println("Seu nível é: "+""+ player2.getLevel());

        player1.scorePoint();
        player1.scorePoint();
        player1.scorePoint();
        player1.bonus(2);
        System.out.println("Sua pontuação é: "+""+ player1.getScore());

        player1.scorePoint();
        System.out.println("Sua pontuação é: "+""+ player2.getScore());
    }
}
