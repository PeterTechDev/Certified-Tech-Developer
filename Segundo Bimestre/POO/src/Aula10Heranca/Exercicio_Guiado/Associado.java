package Aula10Heranca.Exercicio_Guiado;

public class Associado {
    private String numAssociado;
    private String nome;
    private double valorMensal;
    private String atividade;


    Associado(String numero, String nome, double valor, String atividade) {
        this.numAssociado = numero;
        this.nome = nome;
        this.valorMensal = valor;
        this.atividade = atividade;
    }

    public double custoMensal() {
        return this.valorMensal;
    }
}
