package Aula11_ClassesAbstratas.Exercicio_Guiado;

import java.time.LocalDate;

public class Principal {
    public static void main(String[] args) {
        Impressora impressora = new ImpressoraCannon("XX", "wifi",
                LocalDate.of(2015, 5, 25), 50, 50);

        ((ImpressoraCannon)impressora).precisaTinta();
    }
}