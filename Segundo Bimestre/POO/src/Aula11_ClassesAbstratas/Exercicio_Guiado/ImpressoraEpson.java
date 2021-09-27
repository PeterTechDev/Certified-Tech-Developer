package Aula11_ClassesAbstratas.Exercicio_Guiado;

import java.time.LocalDate;

public class ImpressoraEpson extends  Impressora{


    public ImpressoraEpson(String modelo, String tipoConexao, LocalDate dataFabricacao, int folhasDisponiveis,
                           double porcTinta) {
        super(modelo, tipoConexao, dataFabricacao, folhasDisponiveis, porcTinta);
    }

    @Override
    public String imprimir() {
        return "Seu documento foi impresso!";
    }

}