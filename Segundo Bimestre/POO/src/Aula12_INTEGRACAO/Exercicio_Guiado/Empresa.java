package Aula12_INTEGRACAO.Exercicio_Guiado;

import java.util.ArrayList;

public class Empresa {

    private String nome;
    private String cnpj;
    private ArrayList<Funcionario> listaFuncionario = new ArrayList<>();


    public Empresa(String nome, String cnpj) {
        this.nome = nome;
        this.cnpj = cnpj;
    }

    public void cadastrar(Funcionario funcionario){
        listaFuncionario.add(funcionario);
        System.out.println("Funcionário foi cadastrado com sucesso!!");
    }

    public void listar(){
        for(int i = 0; i < listaFuncionario.size(); i++){
            System.out.println(listaFuncionario.get(i));
        }
    }

}
