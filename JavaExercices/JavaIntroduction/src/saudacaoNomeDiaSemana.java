// Expected output of the program: Olá, Freire. "Hoje é dia_da_semana, saudacao_apropriada_horário!"


import java.time.LocalDateTime; // Used combined date and time
import java.time.format.TextStyle;  // Specifies text formatting style
import java.util.Locale; // Used for geographical location, cultural preferences and language conventions
import javax.swing.JOptionPane; // Used to create a simple pop-up dialog, such as to display message or collect user input

public class saudacaoNomeDiaSemana {
    public static void main(String[] args) {
        // Declaring Variable
        String nome = "Freire";
        LocalDateTime hoje = LocalDateTime.now();
        Locale brasil = Locale.forLanguageTag("pt-BR");
        String diaSemana = hoje.getDayOfWeek().getDisplayName(TextStyle.FULL, brasil);
        String saudacao;
        LocalDateTime agora = LocalDateTime.now();
        // Condition to determine greeting based on the time
        if (agora.getHour() >= 0 && agora.getHour() <12) {
            saudacao = "bom dia";
        } else if (agora.getHour() >=12 && agora.getHour()< 18) {
            saudacao = "boa tarde";
        } else if (agora.getHour() >= 18 && agora.getHour()< 24) {
            saudacao = "boa noite";
        } else {
            saudacao = "Olá";
        }
        // Creating output variable
        String mensagem = String.format("Olá, %s. Hoje é %s, %s!", nome, diaSemana, saudacao.toUpperCase());
        // Output displayed in the dialog box
        JOptionPane.showMessageDialog(null, mensagem);
    }
}
