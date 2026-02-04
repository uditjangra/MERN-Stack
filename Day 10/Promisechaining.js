// Promise Chaining 
// Prommise can be chained for sequential async operations.

function getNumber(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(5);
    },1000)
  });
}

// getNumber() .then((num)=>{
//     console.log("First: ",num)
//     return num * 2;
//   })
// .then((num)=>{
//     console.log("Second: ",num);
//     return num + 3;
//   })
// .then((result)=>{
//     console.log("Final: ",result);
//   });

console.log(typeof getNumber())