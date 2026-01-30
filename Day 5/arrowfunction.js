function greet(name){
    return `Greeting from ${name}`;
}
console.log(greet("Udit"))


//In arrow function

let greet2 =(name)=>{
    return `Greeting from ${name}`;
}
console.log(greet("Udit"));

//Can also be written in as simple as:
let greet3 = name => `greeting from ${name}`
console.log(greet3("Udit"))