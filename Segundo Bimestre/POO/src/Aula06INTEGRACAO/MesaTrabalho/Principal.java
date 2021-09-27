package Aula06INTEGRACAO.MesaTrabalho;


public class Principal {
    public static void main(String[] args) {

        Cachorro darius = new Cachorro("darius", "Pastor alemão", 2015, 6, true, false);
        Cachorro wukong = new Cachorro("wukong", "Pastor alemão", 2015, 4, true, false);
        Cachorro corki = new Cachorro("corki", "Pastor alemão", 2015, 8, true, true);

        System.out.println(darius.aptoAdocao());
        System.out.println(wukong.aptoAdocao());
        System.out.println(corki.aptoAdocao());
    }
}

