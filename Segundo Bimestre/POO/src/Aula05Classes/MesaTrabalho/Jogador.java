package Aula05Classes.MesaTrabalho;

// Para desenvolver um jogo, precisamos implementar a classe UsuarioJogo.
// Os usuários possuem name e um nickname, e estes dados devem ser fornecidos ao criar um novo usuário.
// Inicialmente, a pontuação é zero. Porém, eles podem aumentar esse nível em 1.
// Assim, devemos fornecer um método para realizar esse aumento.
// O usuário também pode receber um bônus, ou seja, um
// valor extra que é acrescentado em sua pontuação.

//name: String
//        nickname: String
//        pontuacao: int
//        level: int
//--
//UsuarioJogo(name, nickname; String)
//scorePoint()
//levelUp()
//bonus(int valor)

//Com base no diagrama de classe, implemente o código da classe UsuarioJogo para provar
// que o diagrama criado é válido. Crie dois objetos da classe UsuarioJogo com pontuações e níveis diferentes.

public class Jogador {
    private String name;
    private String nickname;
    private int score;
    private int level;


    Jogador(String name, String nickname){
        this.name = name;
        this.nickname = nickname;
        this.score=0;
        this.level =0;
    }

    public void scorePoint(){
        ++this.score;
    }

    public void levelUp(){++this.level;}

    public int bonus(int valor){
        return this.score+=valor;
    }

    public String getName() {
        return name;
    }

    public int getLevel() {
        return level;
    }

    public int getScore() {
        return score;
    }

    public String getNickname() {
        return nickname;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public void setLevel(int level) {
        this.level = level;
    }
}
