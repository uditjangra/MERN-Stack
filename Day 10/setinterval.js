let x = 0;

const intervalId = setInterval(() => {
  console.log(x,x+1,x+2,x+3,x+4,x+5,x+6,x+7,x+8,x+9,x+10);
  x++;

  if (x > 10000) {
    clearInterval(intervalId);
  }
},1 * 1/100000);