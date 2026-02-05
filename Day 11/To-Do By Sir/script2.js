function addTodo(){
  let input = document.getElementById("inputList").value;

  if(localStorage.getItem("todos")===null){
    localStorage.setItem("todos",JSON.stringify([]));
  }
  let todos = JSON.parse(localStorage.getItem("todos"));
  
}