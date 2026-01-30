let user = {
    firstName : "Udit",
    lastName : "Jangra",
}

let {firstName, lastName} = user
console.log(`${firstName} ${lastName}`);

let arr2 = [1,2,3,4,5]
let arr3 = [6,7,8]
let array = [...arr2,...arr3]
console.log(array)


let [one,x,three] = arr3
console.log(x,one,three);

