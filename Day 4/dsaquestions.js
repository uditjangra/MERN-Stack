// Write a funtion named sumArray that takes an array of number as an argument and returns the sum of all the numbers in the array.
// Write a function named findMax that takes an array of numbers as an argument and returns the largest number in the array.
let arr = [1,2,3,4,5]
function sumArray(array){
    max = array[0];
    for(i = 0; i < array.length; i++){
        if(max < array[i]){
            max = array[i];
        }
    }
    return max;
}
console.log(sumArray(arr))