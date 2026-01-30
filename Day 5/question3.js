//Write a function that takes an array as input and destructures it to return the first and last elements of the array.
function print(arr){
    arr = [1,2,3,4,5]
    let [val1, val2, val3, val4, val5] = arr
    return  "["+val1 + "," + val5 + "]"
}
array = [1,2,3,4,5]
console.log(print(array))