package Aula05.Mesa;

public class UsuarioJogo {
    private String name;
    private  String nickName;
    private int score;
    private int level;

    UsuarioJogo(String name, String nickName){
        this.name = name;
        this.nickName = nickName;
        this.score = 0;
    }

    public void increaseScore(int score) {
        this.score = score;
    }
}

