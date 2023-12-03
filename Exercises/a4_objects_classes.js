/* --------------------------------------------------------------------------
Exemplo 1 - Criando e editando objetos
--------------------------------------------------------------------------*/
const freire = {
    name: 'Felipe Freire',
    age: 40,
    e_mail: 'felipe.freier1983@gmail.com',

    describe: function() {
        console.log(`My name is ${this.name}, and I am ${this.age} years old`)
    }
}
delete freire.e_mail
console.log(freire.name)
console.log(freire.age)
console.log(freire)
freire.describe()

/* --------------------------------------------------------------------------
Exemplo 2 - Criando classe e instância
--------------------------------------------------------------------------*/
class People {
    name2;
    age2;
    
    describe(){
        console.log(`My name is ${this.name2}, and I am ${this.age2} years old`)
    }
}

const felipe = new People();
felipe.name2 = 'Felipe Freire'; // Corrigido para name2
felipe.age2 = 40; // Corrigido para age2

console.log(felipe);
felipe.describe()

/* --------------------------------------------------------------------------
Exemplo 3 - Criando instância com constructor
--------------------------------------------------------------------------*/
class People2 {
    name3;
    age3;

    constructor(nome, idade){
        this.name3 = nome
        this.age3 = idade
    }
    
    describe(){
        console.log(`My name is ${this.name3}, and I am ${this.age3} years old`)
    }
}

const felipe3 = new People2('Freire', 35);


felipe3.describe()

/* --------------------------------------------------------------------------
Exemplo 4 - Criando instância com constructor
--------------------------------------------------------------------------*/
class People4 {
    name4;
    age4;

    constructor(nome4, idade4){
        this.name4 = nome4;
        this.age4 = idade4;
    }
    
    describe(){
        console.log(`My name is ${this.name4}, and I am ${this.age4} years old`);
    }
}

function compare_age(p1, p2){
    if(p1.age4 > p2.age4){
        console.log(`${p1.name4} mais velho(a) do que ${p2.name4}`);
    } else if (p2.age4 > p1.age4){
        console.log(`${p2.name4} mais velho(a) do que ${p1.name4}`);
    } else{
        console.log(`${p1.name4} tem mesma idade que ${p2.name4}`);
    }
} 

const felipe4 = new People4('Freire', 40);
const freire4 = new People4('Felipe', 39);

compare_age(felipe4, freire4);