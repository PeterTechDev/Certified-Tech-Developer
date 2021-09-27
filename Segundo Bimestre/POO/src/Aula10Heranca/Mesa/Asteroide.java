package Aula10Heranca.Mesa;

public class Asteroide extends Objeto{
    private int danos;

    Asteroide(int x, int y, char direcao, int danos){
        super(x, y, direcao);
        this.danos=danos;
    }

    @Override
    public void irA(int x, int y, char direcao) {
        super.irA(x, y, direcao);
    }
}