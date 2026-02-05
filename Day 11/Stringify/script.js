let obj = {name : "Udit", value : "This"}
localStorage.setItem("obj",JSON.stringify(obj))

// console.log(JSON.stringify(obj))

let data = localStorage.getItem("obj")

console.log(JSON.parse(data));