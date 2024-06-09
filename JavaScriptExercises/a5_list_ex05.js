/* --------------------------------------------------------------------------
5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]
--------------------------------------------------------------------------*/

const avg_scored = [2, 7, 3, 8, 10, 4]
for (let i = 0; i < avg_scored.length; i++) {
    const scored = avg_scored[i]
    if (scored<5){
        console.log(`${scored} está abaixo da média. Recuperação`)
    }
    
}