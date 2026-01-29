// Task: Determine the type of two variables
// 1. One variable initialized with null
// 2. One variable declared but not initialized

var x = null
function checkObject(val){
    if(val && typeof val === "object"){
        return true
    }
    return false
}
console.log(checkObject(y))