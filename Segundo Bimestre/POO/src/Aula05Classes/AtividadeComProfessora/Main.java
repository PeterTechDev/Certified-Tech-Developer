package Aula05Classes.AtividadeComProfessora;

//Para resolver um problema, devemos criar uma classe cliente.
// Um cliente tem um número de cliente, o nome e uma dívida. Para registrar esse cliente,
// teremos que possuir seu número e seu nome. Um cliente pode aumentar sua dívida ou quitar.

//     numeroCliente: Int
//     nome: String
//     divida: Double
//     Cliente( String numero, String nome)
//     aumentarDivida(Double valor)
//     pagarDivida()


public class Main {
    public static void main(String[] args) {
        Cliente customer1 = new Cliente("Judite", 1);
        System.out.println(customer1.getName() + " " + customer1.getDebt());

        customer1.increaseDebt(200);
        System.out.println(customer1.getDebt());


    }
}
