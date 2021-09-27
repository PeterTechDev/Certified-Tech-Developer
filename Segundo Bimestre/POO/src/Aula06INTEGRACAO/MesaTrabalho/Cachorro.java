package Aula06INTEGRACAO.MesaTrabalho;

import org.w3c.dom.ls.LSOutput;

public class Cachorro {

    private String nome;
    private String raca;
    private int idade;
    private double peso;
    private boolean possuiChip;
    private boolean ferido;


    public Cachorro(String nome, String raca, int idade, double peso, boolean possuiChip, boolean ferido) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
        this.peso = peso;
        this.possuiChip = possuiChip;
        this.ferido = ferido;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getRaca() {
        return raca;
    }

    public void setRaca(String raca) {
        this.raca = raca;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public double getPeso() {
        return peso;
    }

    public void setPeso(double peso) {
        this.peso = peso;
    }

    public boolean isPossuiChip() {
        return possuiChip;
    }

    public void setPossuiChip(boolean possuiChip) {
        this.possuiChip = possuiChip;
    }

    public boolean isFerido() {
        return ferido;
    }

    public void setFerido(boolean ferido) {
        this.ferido = ferido;
    }

    // Métodos

    public boolean aptoAdocao() {
        if (this.peso > 5 && this.ferido == false) {
            return true;
        } else {
            return false;
        }
    }
}