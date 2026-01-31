//From an array of objects, print each user's name and age using forEach().
//Convert ["hello world", "good day" -> ["HelloWorld"], "GoodDay"]
array = ["hello world", "good day"]
array.forEach((element, index) => {
     array[index] = element.replaceAll(' ', '');
});
console.log(array)