// Write a javascript function that checks if a variable is undefined. The functiom should return tre if the variable is undefined and false otherwise.

function check(input){
    if(input === undefined){
        return true;
    }else{
        return false;
    }
}
let num  = null; 
console.log(check(num))
