/* 2 - O IMC (Índice de massa corporal) é um critério da OMS para dar uma indicação sobre a
condição de pedo de uma pessoa adulta

Fórmula do IMC:
IMC = peso / (altura*altura)

Elabore um algorítimo que dado o peso de uma pessoa adulta mostre sua condição de acordo com a tabela abaixo:

Abaixo de 18.5 - Abaixo do peso;
Entre 18.5 e 25 - Peso normal;
Entre 25 e 30 - Acima do peso;
Entre 30 3 40 - Obeso;
Acima de 40 - Obesidade grave*/

const p = 66;
const a = 1.73;

const IMC = p / (Math.pow(a,2))

if (IMC < 18.5){
    console.log('Abaixo do peso');
} else if (IMC>=18.5 && IMC<=25){
    console.log('Peso Normal')
}else if (IMC>25 && IMC<=30){
    console.log('Acima do peso')
}else if (IMC>30 && IMC<=40){
    console.log('Obeso')
}else {
    console.log('Obesidade grave')
}