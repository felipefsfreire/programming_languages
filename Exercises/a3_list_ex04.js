function app_discount(price_tag,discount){
    return (price_tag-(price_tag*(discount/100)));
}
function add_interst (price_tag, interest){
    return price_tag + ((interest/100) * price_tag)
}
const price_tag = 100;
const payment = '4';

if (payment === '1'){
        console.log(app_discount(price_tag,10))
} else if ( payment === '2'){
        console.log(app_discount(price_tag,15))
} else if (payment === '3'){
    console.log(price_tag)
} else if ( payment === '4'){
    console.log(add_interst(price_tag,10))
}