package Aula10Heranca.Mesa;

public class Objeto {
    private int posX;
    private int posY;
    private char direcao;


    Objeto(int x, int y, char direcao){
        this.posX = x;
        this.posY = y;
        this.direcao = direcao;
    }

    public void setDirecao(char direcao) {
        this.direcao = direcao;
    }

    public char getDirecao() {
        return direcao;
    }

    public void irA(int x, int y, char direcao){
        this.posX = x;
        this.posY = y;
        this.direcao = direcao;
        System.out.println("x= "+this.posX+", y= "+this.posY+" e sua direção é "+this.direcao);
    }

}