package Aula10Heranca.Exercicio_Guiado;

public class AssociadoHabilitado extends Associado {
    //    super indica o construtor da classe pai
    private double custoPiscina;
    private boolean habilitado;


    AssociadoHabilitado(String numero, String nome, String atividade, double valor, double custoPiscina) {
        super(numero, nome, valor, atividade);
        this.custoPiscina = custoPiscina;
    }

    public void setHabilitado(boolean habilitado) {
        this.habilitado = habilitado;
    }

    @Override
    public double custoMensal() {
        if (this.habilitado)
            return super.custoMensal() + this.custoPiscina;
        else
            return super.custoMensal();
    }
}
