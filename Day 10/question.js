setTimeout(()=>{
  console.log("I am parent async function")
  setTimeout(()=>{
    console.log("I am first child function");
    setTimeout(()=>{
      console.log("I am second child function");
    },1000)
  },1000)
},1000)