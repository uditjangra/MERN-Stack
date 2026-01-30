//Write a function that takes in an array of numbers and returns the sum of all the numbers using the rest operator.
//Write a function that tkes in two objets and merges them together using the spread operator. The fuction should return the m
//Write a function that takes in a string and uses 

function Greet(...rest){
    return `Hi, I am ${rest[0]} and my hobbies are ${rest[1]}, ${rest[2]}, ${rest[3]}`
}
// let ans = Greet("Udit","guitar","cricket");
let ans = Greet("Udit", "Guitar", "Graphic Designing");
console.log(ans);
//Rest Operator
