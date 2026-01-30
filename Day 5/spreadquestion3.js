
const user1 = {
    id : 339,
    name : "john",
    age : 42,
    subjects : ["HTML","CSS","JavaScript"],
    education:{
        degree:{
            name: "BCA",
        },
    },
};

// let {education} = user1
// let {degree} = education
// let{name} = degree
// console.log(name)

let {education:{degree:{name}}} = user1
console.log(name)