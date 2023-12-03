/* --------------------------------------------------------------------------
3) Faça um programa que dado uma lista de nomes imprima os nomes que comecem com a letra "V".
--------------------------------------------------------------------------*/

const nomes = ['Vinícius','Vanessa','Pedro','Larissa','Viviane','Lucas','Fernanda','Gabriel','Vitoria','Ricardo'];
for (let i = 0; i < nomes.length; i++) {
    const nome = nomes[i]
    if(nome.charAt(0).toUpperCase() === 'V'){
        console.log(nome)
    }
}