function outer(){
    let a = 20;
    function inner(){
        console.log(a)
    }
    return inner()
}
let closure = outer()
console.log(closure)
