//Write a function named isTruthy that takes in three boolean arguments a, b and c.
//The function should return true if at least one of the arguments is truthy, and false otherwise.

function isTruthy(a, b ,c){
    d = a || b || c;
    if(d){
        return true;
    }else{
        return false;
    }
}

console.log(isTruthy(NaN, NaN, NaN))