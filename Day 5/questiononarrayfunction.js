// Write a JavaScript function named findEvenNumbers that takes in an array of numbers as a parameter and returns a new array containing only the even numbers from the original array.

let findEvenNumbers = (num) => {
    let array = [];
    for(let i = 0; i < num.length;i++){
        if(num[i] % 2 ==0 ){
            array.push(num[i]);
        }
    }
    return array;
}

arr1 = [1,2,3,4,5,6,7,8,9,10]
console.log(findEvenNumbers(arr1))