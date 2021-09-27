package Aula12_INTEGRACAO.Exercicio_Guiado;

public abstract class Funcionario {

    private String nome;
    private String sobrenome;
    private String cpf;
    private String email;
    private String matricula;

    public Funcionario(String nome, String sobrenome, String cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
    }

    public abstract void pagamento();

    @Override
    public String toString() {
        return "Funcionario - " +
                "nome='" + nome + '\'' +
                ", sobrenome='" + sobrenome + '\'' +
                ", cpf='" + cpf;
    }
}