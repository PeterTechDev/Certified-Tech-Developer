package Aula05;

public class Cliente {
    private int numCliente;
    private String nome;
    private double divida;

    Cliente(int num, String nome) {
        this.numCliente = num;
        this.nome = nome;
        this.divida = 0;
    }

    public double getDivida() {
        return divida;
    }

    public void setDivida(double divida) {
        this.divida = divida;
    }

    public int getNumeroCliente() {
        return numCliente;
    }

    public void setNumeroCliente(int numeroCliente) {
        this.numCliente = numeroCliente;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double aumentarDivida(double valor) {
        this.divida = divida + valor;
        return this.divida;

    }

    public String pagarDivida() {
        this.divida = 0;
        return "Sua divida foi paga";
    }


}

