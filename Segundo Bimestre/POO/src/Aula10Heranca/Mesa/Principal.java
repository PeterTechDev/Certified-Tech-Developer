package Aula10Heranca.Mesa;

public class Principal {

    public static void main(String[] args) {
        Nave nave1 = new Nave(1,2,'N',100);
        nave1.setVida(100);
        System.out.println(nave1.getDirecao());
        nave1.girar('L');
        System.out.println(nave1.getDirecao());

    }
}