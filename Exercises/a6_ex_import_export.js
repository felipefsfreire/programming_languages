/*
Exemplo 1 - uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 - 100
Faça um programa que receba os 5 npumeros sorteados para os alunos e mostre o maior número sorteado.
Dados de entrada:
5
50
10
98
23

Saída:
98
*/
 const inputs = [4, 100, 150, 90, 200]
 let i = 0

 function gets (){
    const value = inputs [i]
    i++
    return value
}


function print(texto){
    console.log(texto)
}

module.exports = {
    gets,
    print
}

