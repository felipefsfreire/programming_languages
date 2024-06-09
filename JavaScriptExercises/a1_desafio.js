/*Faça um programa para calcular o valor de uma viagem.
Você terá 3 variáveis. Sendo elas:
1 - preço do combustível
2 - gasto médio de combustível do carro por KM
3 - distância em Km da viagem;
Imprima o valor que será gasto de combustível para realizar a viagem.*/

let fuel_value = 5.72;
const KMl = 10.8;
let distance =  100;

const quant_fuel = distance/KMl;
const coast = quant_fuel * fuel_value;
console.log(coast.toFixed(2))