/* 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta 
e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1- À vista Débito, recebe 10% de desconto;
2- À vista no Dinheiro ou PIX, recebe 15% de desconto;
3- Em duas vezes, preço normal de etiqueta sem juros;
4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%; */

const price_tag = 100;
const payment = '1';

if (payment === '1'){
    const discount = price_tag - (price_tag*0.1)
    console.log(discount)
} else if ( payment === '2'){
    const discount = price_tag - (price_tag*0.15)
    console.log(discount)
} else if (payment === '3'){
    console.log(price_tag)
} else if ( payment === '4'){
    const interest_value = price_tag + (price_tag*0.1)
    console.log(interest_value)
}