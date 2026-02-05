function addTask(){
  let div = document.getElementById("main-div")
  let check = document.createElement('input')
  check.type = "checkbox"
  check.defaultChecked
  let task = document.getElementById("input1")
  let val = task.value
  let taskdiv = document.createElement('taskdiv')
  div.append(taskdiv)
  taskdiv.append(check, val)
}