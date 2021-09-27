package Aula12_INTEGRACAO.Exercicio_Guiado;

public class Gerente extends Funcionario{

    private double salario;
    private double bonus;

    public Gerente(String nome, String sobrenome, String cpf, double salario, double bonus) {
        super(nome, sobrenome, cpf);
        this.salario = salario;
        this.bonus = bonus;
    }

    @Override
    public void pagamento() {
        this.salario = this.salario + this.bonus;
        System.out.println("Seu pagamento será de " + this.salario);
    }
}