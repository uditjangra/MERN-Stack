// Implement a function in JavaScript that uses optional chaining to safely acess the price property of a given product object. If he price property is present, apply a discount of 10% and return the discount price as a string with two decimal places.

const property = {
    type : "3BHK",
    price : 2500000,
}

function discount(amount){
    if(amount !== undefined){
    amount = amount - (amount * 0.1)
    }
    console.log(amount);
}
let amount = property?.price 
discount(amount)