
//Item adding function
function addItems(){
  let input = document.getElementById("inputList")
  let item = input.value;
  let list = document.getElementById("list");
  let li=document.createElement("li");
  li.innerText=item
  list.appendChild(li);
}

//All function Remover
function removeAllItems(){
  list.innerHTML = ""
}