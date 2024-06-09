/* --------------------------------------------------------------------------
3) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
Exemplo:
    Entrada:
        5
        1
        3
        9
        10
        12

    Saída:
        Números Pares: 10, 12
--------------------------------------------------------------------------*/
const {gets, print} = require('./a6_list_ex03_exp')
const total_number = gets()
for (let i = 0; i < total_number; i++) {
    const number = gets();
    if (number %2 === 0){
        print(`${number} é par`)
    }
}
