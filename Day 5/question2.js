//Write a function to check if the given variable is either array, object, or null if not print the datatype of the variable.

function what(a){
    if(Array.isArray(a)){
        return "this is an array";
    }if(typeof a === null){
        return "this is a null value"
    }
    if(a && typeof a === "object"){
        return "it is an object"
    }
    else{
    return "it is" + typeof a;
    }
}
a = {}
console.log(what(a))