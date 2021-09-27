package Aula06INTEGRACAO.ExercicioComProfImpressora;

//Modele em UML e codifique a classe Impressora em Java.
//
//Exercício para fazer em aula com o professor
//As impressoras têm um modelo, um tipo de conexão, existem impressoras que são USB e outras sem fio. Eles têm uma
// data de fabricação e todas sabem a quantidade de folhas disponíveis.

//modelo: String
//tipoConexao: String
//dataFabricacao: Date
//folhasDisponiveis: Int
//temPapel(): boolean
//imprimir(texto:String)

import java.time.LocalDate;
import java.util.Date;

public class Main {
    public static void main(String[] args) {

        Impressora impressora = new Impressora("epon", "wifi", LocalDate.of(2021, 8,20));
        // System.out.println(impressora.getDataFabricacao());
        impressora.setFolhasDisponiveis(100);
        impressora.imprimir("OlÃ¡ mundo!");
        System.out.println(impressora.getFolhasDisponiveis());


    }
}