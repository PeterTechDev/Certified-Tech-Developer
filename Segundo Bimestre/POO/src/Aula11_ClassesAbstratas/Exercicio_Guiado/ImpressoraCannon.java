package Aula11_ClassesAbstratas.Exercicio_Guiado;

import java.time.LocalDate;

public class ImpressoraCannon extends Impressora{

    public ImpressoraCannon(String modelo, String tipoConexao, LocalDate dataFabricacao, int folhasDisponiveis,
                            double porcTinta) {
        super(modelo, tipoConexao, dataFabricacao, folhasDisponiveis, porcTinta);
    }

    @Override
    public String imprimir() {
        return "Seu documento foi impresso! Impressora Cannon";
    }

    @Override
    public void precisaTinta() {
        System.out.println("impressora cannon");;
    }
}