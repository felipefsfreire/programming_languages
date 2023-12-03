/* --------------------------------------------------------------------------
Exemplo 1 - função para calcular o quadrado de um valor
--------------------------------------------------------------------------*/
function quadrado(valor) {
    return valor*valor;
}

const result = quadrado(10);

console.log(result)

/* --------------------------------------------------------------------------
Exemplo 2 - Função para fazer incremento de juros
--------------------------------------------------------------------------*/

function add_interst (price_tag, interest){
    const interest_value = (interest/100) * price_tag;
    return price_tag + interest_value
}
console.log(add_interst(100,10))

/* --------------------------------------------------------------------------
Organizando funções
--------------------------------------------------------------------------*/
function IMC_value(weight, height){
    return weight / (Math.pow(height,2))
}
function IMC_class(IMC){
    if (IMC < 18.5){
        return 'Abaixo do peso'
    } else if (IMC>=18.5 && IMC<=25){
        return 'Peso Normal'
    }else if (IMC>25 && IMC<=30){
        return 'Acima do peso'
    }else if (IMC>30 && IMC<=40){
        return 'Obeso'
    }else {
        return 'Obesidade grave'
    }
}



(function main(){
    const weight = 70;
    const height = 1.75;

    const IMC = IMC_value(weight,height)
    console.log(IMC_class(IMC))
})()


