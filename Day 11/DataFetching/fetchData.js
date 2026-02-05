const { createElement } = require("react");

//DOM
const container = document.getElementById("container");

//Fetching Data first;
async function fetchData(){
  try {
    container.innerHTML="<h2>Loading..<h2>"
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    let fetched = response.ok 
    if(!fetched){
      container.innerHTML="<h2> No Data Found <h2>"
      throw new Error("Error while fetching data");
    }else{
      container.innerHTML="<h2>Data Loaded<h2>";
    }
    let data = await response.json();
    console.log(data);
    data.forEach(element => {
    container.innerHTML += `<p>${element.email}</p>`
  });
  } catch (error) {
    container.innerHTML="<h2>Failed to fetch data</h2>"
    console.log("Failed to fetch any data")
  }
}
fetchData();