/* --------------------------------------------------------------------------
Exemplo 1 - Estrutura do loop - imprimindo os itens de uma lista
--------------------------------------------------------------------------*/
const nome = 'Felipe Freire';

for (let letra = 0; letra < nome.length; letra++) {
    console.log(nome[letra])
}

/* --------------------------------------------------------------------------
Exemplo 2 - Média de notas de um aluno usando loop
--------------------------------------------------------------------------*/
const notas = []

notas.push(5)
notas.push(7)
notas.push(8)
notas.push(2)
notas.push(5)

let scored_sum = 0

for (let i = 0; i < notas.length; i++) {
    const scored = notas[i];
    scored_sum = scored_sum + scored
}

console.log(`averaged score is ${scored_sum/notas.length}`)