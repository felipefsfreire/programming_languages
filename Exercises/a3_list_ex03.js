/* Função dentro de outra função
Nesse exemplo inserimos a função my_name na função legal_age
Obs.: a função que for inserida precisa retornar um valor
 */

function my_name(name){
    return ('My name is '+name);
}


function legal_age (age){
    if (age>= 18){
        console.log(my_name('Freire' ) + 'Legal of age')
    }else{
        console.log('Underage')
    }
}
legal_age(40)