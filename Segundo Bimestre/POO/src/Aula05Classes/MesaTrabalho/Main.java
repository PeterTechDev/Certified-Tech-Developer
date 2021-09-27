// Para desenvolver um jogo, precisamos implementar a classe UsuarioJogo.
// Os usuários possuem name e um nickname, e estes dados devem ser fornecidos ao criar um novo usuário.
// Inicialmente, a pontuação é zero. Porém, eles podem aumentar esse nível em 1.
// Assim, devemos fornecer um método para realizar esse aumento.
// O usuário também pode receber um bônus, ou seja, um
// valor extra que é acrescentado em sua pontuação.

//name: String
//nickname: String
//pontuacao: int
//level: int
//--
//UsuarioJogo(name, nickname; String)
//scorePoint()
//levelUp()
//bonus(int valor)

//Com base no diagrama de classe, implemente o código da classe UsuarioJogo para provar
// que o diagrama criado é válido. Crie dois objetos da classe UsuarioJogo com pontuações e níveis diferentes.

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
