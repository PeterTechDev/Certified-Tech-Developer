package Aula10Heranca.Exercicio_Guiado;

//Uma academia já possui um sistema que contém um módulo para cobrança de mensalidades de seus associados. Os
// associados no sistema têm um código de associado, nome, taxa mensal, atividade que realizam - este é apenas o nome
// da atividade.
//A academia incorporou nas suas instalações uma piscina, pelo que oferece acessos adicionais à mesma, esta tem um
// custo extra fixo e para entrar o membro deve estar habilitado, ou seja, fazer um check-up médico. Para incorporar
// este novo serviço, o analista propõe estender as classes existentes da seguinte forma: a academia precisa saber
// qual é a taxa que o integrante deve pagar, caso não esteja habilitado a entrar na piscina, não há cobrança de
// custo adicional.

//Associado
//numAssociado: String
//nome: String
//valorMensal: Double
//atividade: String
//Associado( String numero, String nome, String atividade,double valor)
//double custoMensal()
//
//
//
//AssociadoHabilitado
//custoPiscina:double
//habilitado:boolean
//AssociadoHabilitado( String numero, String nome, String atividade,double valor, double custoPiscina)
//double custoMensal()

public class Principal {
    public static void main(String[] args) {
        Associado associado = new Associado("123", "Yana", 99, "Musculação");
        AssociadoHabilitado associadoHabilitado = new AssociadoHabilitado("345", "JP", "Dança",
                99, 25);
        associadoHabilitado.setHabilitado(true);

        System.out.println(associado.custoMensal());
        System.out.println(associadoHabilitado.custoMensal());

    }
}