// slice - returns a new array, doesn't modify original
const arr1 = [1, 2, 3, 4, 5];
const sliced = arr1.slice(1, 4);
console.log(sliced);      // [2, 3, 4]
console.log(arr1);        // [1, 2, 3, 4, 5] - unchanged

// splice - modifies original array, removes/replaces elements
const arr2 = [1, 2, 3, 4, 5];
const spliced = arr2.splice(1, 2, 'a', 'b');
console.log(spliced);     // [2, 3] - removed elements
console.log(arr2);        // [1, 'a', 'b', 4, 5] - modified

const arr3 = [3,4,5,6,7]
arr3.slice(9)