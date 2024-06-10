public class aprovadoReprovado {
    
    public static void main(String[] args) {
        
        //Declaring variables
        int nota = 70;
        String graduacao = "";

        //Condicional structure (Logical test)
        if (nota >= 80) {
            graduacao = "Graduação A";
        } else if (nota < 80 && nota >= 70) {
            graduacao = "Graduação B";
        } else if (nota <70 && nota >=60) {
            graduacao = "Graduação C";
        }else if (nota <60 && nota >= 0) {
            graduacao = "Graduação D";
        } else {
            graduacao = "Nota Inválida";
        }

        switch (graduacao) {
            case "Graduação A":
            case "Graduação B":
                System.out.println("Aluno Aprovado " + graduacao);
                break;
            case "Graduação C":
            case "Graduação D":
                System.out.println("Aluno Reprovado " + graduacao);
        
            default:
            System.out.println("Graduação Inválida");
            
        }
    }
}
