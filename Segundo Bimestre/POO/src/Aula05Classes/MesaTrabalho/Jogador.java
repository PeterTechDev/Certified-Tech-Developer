package Aula05Classes.MesaTrabalho;

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
