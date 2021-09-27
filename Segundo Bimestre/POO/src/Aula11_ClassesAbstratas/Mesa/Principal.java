package Aula11_ClassesAbstratas.Mesa;

import java.time.LocalDate;

public class Principal {

    public static void main(String[] args) {

        Cliente Peter = new Cliente(198816, "Leite", "7156894", "0165465146");


        ContaPoupanca contaP = new ContaPoupanca(1150.50, Peter, 0.05);
        contaP.obterRendimentos();
        contaP.sacar(1000.00);
        contaP.relatarSaldo();
        contaP.sacar(1000.00);
        contaP.relatarSaldo();
        contaP.obterRendimentos();

        ContaCorrente contaC = new ContaCorrente(425.60, Peter, 2500.00);
        contaC.depositar(500.00);
        contaC.relatarSaldo();
        contaC.sacar(3000.00);
        contaC.relatarSaldo();
        contaC.sacar(3000.00);
        contaC.relatarSaldo();
    }
}