public class ConverTemperatura {
    public static void main(String[] args) {
        // Declaração da variável que informa a temperatura em Celsius
        double tempCelsius = 42.8;
        // Variável que realiza o cálculo para converter a temperatura para Fahrenheit
        double tempFahrenheit = (tempCelsius * 9 / 5) +32;

        System.out.println("A temperatura de " + tempCelsius + "° em Celsius para Fahrenheit é: " + tempFahrenheit );
    }
}
