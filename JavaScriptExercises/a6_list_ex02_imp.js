/* --------------------------------------------------------------------------
2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90
--------------------------------------------------------------------------*/
const {gets, print} = require('./a6_list_ex02_exp')

const total_number = gets()
let max_value = Number.NEGATIVE_INFINITY
let min_value = Number.POSITIVE_INFINITY

for (let i = 0; i < total_number; i++) {
    const number = gets();
    if (number > max_value){
        max_value = number
    }

    if (number < min_value){
        min_value = number
    }
}

print(`Maior valor da lista é: ${max_value}`)
print(`Menor valor da lista é: ${min_value}`)