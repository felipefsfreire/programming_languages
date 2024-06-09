/*Faça um programa para calcular o valor de uma viagem.
Você terá 5 variáveis. Sendo elas:
1 - preço do etanol
2 - preço gasolina
3 - Tipo de combustível que está no carro
4 - gasto médio de combustível do carro por Km
5 - distância em Km da viagem;
Imprima o valor que será gasto de combustível para realizar a viagem.*/

const fuel_ethanol = 5;
const fuel_gasolina = 6.66;
const fuel_type = 'ethanol';
const KMl = 10;
const distance =  10;
const quant_fuel = distance/KMl;
if (fuel_type === 'ethanol'){
    const coast = quant_fuel * fuel_ethanol;
    console.log('valor etanol:',coast.toFixed(2));
} else {
    const coast = quant_fuel * fuel_gasolina;
    console.log('valor gasolina:',coast.toFixed(2));
}
