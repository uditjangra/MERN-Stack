//Looks for the first truthy value.
let a = NaN, b = NaN, c = {}
let z = a || b || c
console.log(z);