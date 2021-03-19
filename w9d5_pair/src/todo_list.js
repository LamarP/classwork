const populateList = function (toDos) {
  const todoUl = document.querySelector(".todos");
  let elementChildren = Array.from(todoUl.children);
  if (elementChildren.length > 0) {
    elementChildren.forEach(child=>{
      child.remove();
    });
    
  }
  toDos.forEach(todo => {

    const todoLabel = document.createElement("label");
    todoLabel.innerText=todo.text;

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.value = todo.done;
    const todoLi = document.createElement("li");
    todoLi.appendChild(todoLabel);
    todoLi.appendChild(checkBox);
    todoUl.appendChild(todoLi);
  })
}

let toDos = [];
if (localStorage.getItem("todoArray")) {
  toDos = JSON.parse(localStorage.getItem("todoArray"));
  populateList(toDos);
}
const ulElement = document.querySelector("ul .todos");

const formElement = document.querySelector("form .add-todo-form");

const addTodo = function (event) {
  event.preventDefault();

  const inputBox = document.querySelector("[name='add-todo']");
  const todo = inputBox.value;
  const done = false;
  toDos.push(new Todo(todo, done));
  localStorage.setItem("todoArray", JSON.stringify(toDos));
  populateList(toDos);
}

class Todo {
  constructor(text,done) {
    this.text = text;
    this.done = done;
  }
}



const submitButton = document.querySelector("input[type='submit']");
submitButton.addEventListener('click', addTodo);