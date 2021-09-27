package Aula05Classes.AtividadeComProfessora;

public class Cliente {

    private int customerNumber;
    private String name;
    private double debt;

    Cliente(String nameArg, int numberArg){
        this.customerNumber = numberArg;
        this.name = nameArg;
        this.debt = 0;
    }

    public double increaseDebt(double value){
        this.debt = debt + value;
        return this.debt;
    }

    public String payDebt(){
        this.debt = 0;
        return "Sua dívida foi paga";
    }

    public int getCustomerNumber() {
        return customerNumber;
    }

    public String getName() {
        return name;
    }

    public double getDebt() {
        return debt;
    }

    public void setCustomerNumber(int customerNumber) {
        this.customerNumber = customerNumber;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDebt(double debt) {
        this.debt = debt;
    }
}
