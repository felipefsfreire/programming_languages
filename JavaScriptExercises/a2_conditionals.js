//Número é par?
const n = 0; // variável com o número que desejamos saber se é par ou ímpar
const npar = n%2 === 0; // usamos o operador % para saber se a operação aritmética tem resto 0 ou decimal
console.log(npar) // imprime o resultado como True ou False
if (n === 0){
    console.log('número inválido')
}else if (npar){
    console.log('Número par')
} else { 
    console.log('Número ímpar')
}