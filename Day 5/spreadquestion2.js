let user = {
    firstName : "Vivek",
    lastName : "Agarwal",
    age : 38,
    posts:
    [
        {title : "Post 1", comments : 10},
        {title : "Post 2", comments : 11},
    ]
}

let {posts} = user
let [obj1, obj2] = posts
console.log(obj1, obj2);
