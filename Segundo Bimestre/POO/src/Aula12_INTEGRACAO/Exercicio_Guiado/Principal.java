package Aula12_INTEGRACAO.Exercicio_Guiado;

public class Principal {
    public static void main(String[] args) {
        Empresa dh = new Empresa("DH", "68525");
        Funcionario funcionario1 = new Gerente("José", "Silva",
                "5555", 10000, 500);

        dh.cadastrar(funcionario1);
        dh.listar();
        System.out.println(dh);
    }
}