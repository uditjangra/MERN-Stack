
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

for(i in user1){
    console.log(i)
}