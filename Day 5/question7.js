//Write a functoin in JavaScript that uses optional chaining to safely access the age property of a given person object.
// If the age property is present, return its value; otherwise, return a default value of 0.

const person = {
    name : "Udit",
    age : 19,
    height : "5'8"
}

if(person.age !== undefined){
    console.log(person?.age)
}else{
    console.log(0);
}