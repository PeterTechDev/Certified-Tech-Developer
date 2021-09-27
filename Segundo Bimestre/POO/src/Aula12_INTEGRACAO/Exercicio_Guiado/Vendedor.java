package Aula12_INTEGRACAO.Exercicio_Guiado;

public class Vendedor extends Funcionario{
    private  double salario;
    private  double comissao;

    public Vendedor(String nome, String sobrenome, String cpf) {
        super(nome, sobrenome, cpf);
    }

    public  double cacularComissao(int vendas){
        this.comissao = vendas * 50;
        return this.comissao;
    }

    @Override
    public void pagamento() {
        System.out.println("Seu pagamento será de " + (this.salario + this.comissao));
    }
}
