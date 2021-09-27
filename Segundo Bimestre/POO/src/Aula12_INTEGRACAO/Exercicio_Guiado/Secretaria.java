package Aula12_INTEGRACAO.Exercicio_Guiado;

public class Secretaria extends Funcionario{

    private double salario;

    public Secretaria(String nome, String sobrenome, String cpf, double salario) {
        super(nome, sobrenome, cpf);
        this.salario = salario;
    }

    @Override
    public void pagamento() {
        System.out.println("Seu pagamento será de " + this.salario);
    }
}