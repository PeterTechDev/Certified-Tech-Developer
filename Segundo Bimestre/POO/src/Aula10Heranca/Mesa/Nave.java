package Aula10Heranca.Mesa;

public class Nave extends Objeto{
    private double velocidade;
    private int vida;

    Nave(int x, int y, char direcao, double velocidade){
        super(x, y, direcao);
        this.velocidade=velocidade;
    }

    public void setVida(int vida) {
        this.vida = vida;
    }

    @Override
    public char getDirecao() {
        return super.getDirecao();
    }

    @Override
    public void irA(int x, int y, char direcao) {
        super.irA(x, y, direcao);
    }

    public void girar(char direcao){
        super.setDirecao(direcao);
        System.out.println("Você girou para a direção " + direcao);

    }
    public String restaVida(){
        return "Você tem" + this.vida;
    }
}