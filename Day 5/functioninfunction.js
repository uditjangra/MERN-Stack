function hi(){
    console.log("Hi from Hi Function")
}

function fun(hi){
    return hi();
}
fun(hi)
