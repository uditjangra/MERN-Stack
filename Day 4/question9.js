// Check if a variable is null. The function should return true if the vairable is null and false otherwise.

function checkNull(val){
    if(val && typeof val === "object"){
        return true
    }
    return false
}
let val1 = null;
let val2;
let val3 = 0;
console.log(checkNull(val1));
console.log(checkNull(val2));
console.log(checkNull(val3));