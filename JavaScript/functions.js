"use strict";
// function sum(x,y){
//     let result;
//     result = x+y;
//     return result;
// }

// sum(2,5);
// let x = sum(2,5);
// console.log(sum(x,x));


// //cochinadas
// console.log(sum());
// console.log(sum(5));
// console.log(sum(2,2,3,4,2,4,"hahaha"));



function finalPrice(product = "Producto genérico", price = 100, taxes = 0.21) {

    
    
    
    let result;
    result = "Product: " + String(product) + " | Price before taxes: " + price +  " " + "| Price after taxes: " + Number(price + (price * taxes));
    if (isNaN(price) || isNaN(taxes) || price<0 || taxes<0){
        console.log("el precio y/o los impuestos son incorrectos")
        return -1;
    } else {console.log("El producto " + product + " tiene un precio de: " + (price + (price * taxes)));
}
    return result;
}


console.log(finalPrice("Manzana", 0.32, 0.21));




