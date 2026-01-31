// Given an array of numbers, return "Even" or "Odd" for each number using map().

array = [1,2,3,3,3]

const evenodd = array.map((y) => evenorodd(y))

function evenorodd(x){
    if(x%2 == 0){
        return "Even";
    }else{
        return "Odd";
    }
}

console.log(evenodd)