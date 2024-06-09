/* 1 - Faça um algorítimo que dado 3 notastiradas por um aluno em um semestreda faculdade,
calcule e imprima a sua média e sua classificação conforme a tabela abaixo
média = (Nota1 + Nota2 + Nota3)/3
Classificação:
média menor que 5 = reprovação
média entre 5 e 7 = recuperação
acima de 7 = passou de semestre */

const n1 = 7;
const n2 = 7;
const n3 = 7.1;

const media_n = (n1+n2+n3)/3;

console.log(media_n.toFixed(2))

if (media_n<5){
    console.log('Reprovação')
} else if (media_n>=5 && media_n<=7) {
    console.log('Recuperação')
} else {
    console.log('Passou de semestre')
}