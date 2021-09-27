package Aula11_ClassesAbstratas.Mesa;

import java.time.LocalDate;

public class ContaCorrente extends Conta {
    private double saqueAutorizado;

    ContaCorrente(double saldo, Cliente cliente, double saqueAutorizado){
        super(saldo, cliente);
        this.saqueAutorizado = saqueAutorizado;
    }

    @Override
    public void sacar(double quantia){
        if (quantia > (getSaldo() + this.saqueAutorizado)) {
            System.out.println("Limite insuficiente");
        } else {
            setSaldo(Math.round((getSaldo() - quantia)*100.0)/100.0);
            System.out.println("Você sacou valor de: R$ " + quantia);
        }
    }

    //public void depositarCheque(double valor, String banco, LocalDate data){
    //    setSaldo(Math.round((getSaldo()+valor)*100.0)/100.0);
    //}
}
