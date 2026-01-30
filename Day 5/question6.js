let obj = {
    name1 : "udit",
    age : 19,
    course : "btech CSE",
    major : "Android Stack",
}
let {age,...user1}=obj;
console.log(user1)