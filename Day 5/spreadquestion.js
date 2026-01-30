let person  = {
    name: "udit",
    age : 19,
    city : "Kurukshetra",
    profile:[{designation:"android app developer"},{degree : "B.Tech CSE"},{role : "Android Team Manager"}]
}

let {profile} = person
// let [obj1, obj2] = profile
let[obj1, obj2, obj3] = profile
let obj = {obj1,obj2}
console.log(obj)

