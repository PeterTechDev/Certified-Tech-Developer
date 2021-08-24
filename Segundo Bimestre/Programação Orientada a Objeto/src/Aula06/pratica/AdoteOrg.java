package Aula06.pratica;

public class AdoteOrg {

    //atributos
    private String nome;
    private String raca;
    private double peso;
    private boolean chip;
    private int anoNasc;

    private boolean ferido;
    private boolean aptoAdocao;

    public AdoteOrg(String nome, String raca, double peso, boolean chip, int anoNasc){
        this.nome = nome;
        this.raca = raca;
        this.peso = peso;
        this.chip = chip;
        this.anoNasc = anoNasc;

        this.ferido = true;
        this.aptoAdocao = false;
    }

    public String getNome() {
        return nome;
    }

    public String getRaca() {
        return raca;
    }

    public double getPeso() {
        return peso;
    }

    public boolean isChip() {
        return chip;
    }

    public int getAnoNasc() {
        return anoNasc;
    }

    public boolean isFerido() {
        return ferido;
    }

    public boolean isAptoAdocao() {
        return aptoAdocao;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setRaca(String raca) {
        this.raca = raca;
    }

    public void setPeso(float peso) {
        this.peso = peso;
    }

    public void setChip(boolean chip) {
        this.chip = chip;
    }

    public void setAnoNasc(int anoNasc) {
        this.anoNasc = anoNasc;
    }

    public void setFerido(boolean ferido) {
        this.ferido = ferido;
    }

    public void setAptoAdocao(boolean aptoAdocao) {
        this.aptoAdocao = aptoAdocao;
    }
}
