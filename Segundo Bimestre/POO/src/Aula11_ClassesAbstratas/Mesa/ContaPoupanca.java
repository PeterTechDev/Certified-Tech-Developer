package Aula11_ClassesAbstratas.Mesa;

public class ContaPoupanca extends Conta {
    private double taxaJuros;

    ContaPoupanca(double saldo, Cliente cliente, double taxaJuros) {
        super(saldo, cliente);
        this.taxaJuros = taxaJuros;
    }

    //Herdará métodos depositar() e relatarSaldo()

    @Override
    public void sacar(double quantia) {
        if (quantia > getSaldo()) {
            System.out.println("Saldo insuficiente");
        } else {
            setSaldo(Math.round((getSaldo() - quantia)*100.0)/100.0);
            System.out.println("Você sacou valor de: R$ " + quantia);
        }
    }

    public void obterRendimentos() {
        double rendimento = Math.round((this.getSaldo() * this.taxaJuros)*100.0)/100.0;
        System.out.println("O rendimento projetado da sua conta é de: R$ " + rendimento);
    }
}
