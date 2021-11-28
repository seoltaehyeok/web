const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const todo = document.getElementById("todo-text");


const TODOS_KEY = "todos";
let toDos  = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  // 배열의 요소(toDo)에서 삭제(X)했던 요소(li)와 같지 않다면 true
  // 즉, 삭제했던 li 요소들은 faulse를 통해 출력x
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  if(toDos.length == 0) {
    todo.classList.add("hidden");
  }
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("ul");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo)
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo.text;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  console.log(newTodo);
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  if(newTodo !== null)
    todo.classList.remove("hidden");
  
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  toDoListText(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

function toDoListText(newTodoObj) {
  if(newTodoObj.text === null)
    todo.classList.add("hidden");
}