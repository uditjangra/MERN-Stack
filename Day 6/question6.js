//Write a function to return the frequency of the items.
// for example 

let arr = [1,2,1,3,3,5,"Hi","Hello","Hi",1,2]
function frequency(array){
    const frequencyMap = {}
    for(let i = 0; i < arr.length; i++){
        const num = arr[i];
        if(frequencyMap[num]){
            frequencyMap[num]++;
        }
        else{
            frequencyMap[num] = 1;
        }
    }    
    return frequencyMap;
}
const freq = frequency(arr)
console.log(freq)