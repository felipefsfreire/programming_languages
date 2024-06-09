/* 
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetros rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class car {
    brand
    color
    avg_fuel_km

    constructor(brand, color, avg_fuel_km){
        this.brand = brand
        this.color = color
        this.avg_fuel_km = 1/avg_fuel_km
    }

    travel_cost(distance,fuel_price){
        return distance*this.avg_fuel_km*fuel_price
    }
    
}

const gol = new car('VW', 'White', 12)

gol.travel_cost(70, 5)
console.log(`Travel fuel cost = R$ ${(gol.travel_cost(70, 5).toFixed(2))}`)