/* 
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class People{
    name
    weight
    height

    constructor(name, weight, height){
        this.name = name
        this.weight = weight
        this.height = height
    }

    IMC (){
        return this.weight / (Math.pow(this.height,2))
        
    }
    IMC_class(){
        const IMC = this.IMC()
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
}

const nome = new People ('José', 70, 1.75)

console.log(nome.IMC(),nome.IMC_class())