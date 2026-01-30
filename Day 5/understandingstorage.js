let a = 20
console.log(a);
let b = a;
console.log(b);
b = 30;
console.log(b);
console.log(a);

//Non - Primitive
let arr = [1,2,3,4,5]
let arr1 = arr
console.log(arr);
console.log(arr1);
arr1.push(6);
console.log(arr);
console.log(arr1);


//From this we can conclude that in Non-Premitive we are referencing from the same point and the data can easily be manipulated even if we are changing a different thing.
//Whereas
// In the primitive, we are not able to change.