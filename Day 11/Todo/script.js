function addTask(){
  let list = document.getElementById("list");
  let task = document.createElement("li");
  let input = document.getElementById("task");
  let taskname = input.value;
  task.innerText = taskname
  list.appendChild(task);
  console.log(list.task)
}