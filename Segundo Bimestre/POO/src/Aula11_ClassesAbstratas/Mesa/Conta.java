package Aula11_ClassesAbstratas.Mesa;

abstract public class Conta {
    private double saldo;
    private Cliente cliente;

    Conta(double saldo, Cliente cliente){
        this.saldo = saldo;
        this.cliente = cliente;
    }

    public void depositar(double quantia){
        this.saldo += quantia;
    }

    public abstract void sacar(double quantia);

    public void relatarSaldo(){
        System.out.println("Seu saldo atual é de: R$ "+this.saldo);
    }

    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }
}