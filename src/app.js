const DONE = "done";
const PENDDING = "pendding";
const todoList = document.getElementById("todo-list");

const onCheck = (object) => {
  const todoStyle = object.checked ? "line-through" : "none";
  object.parentElement.style.textDecoration = todoStyle;
};

const makeTodo = (text, status) => {
  const liDom = document.createElement("li");
  const inputDom = document.createElement("input");
  const spanDom = document.createElement("span");

  inputDom.type = "checkbox";
  spanDom.innerHTML = text;
  inputDom.addEventListener("change", () => {
    onCheck(inputDom);
  });

  if (status === DONE) {
    setTimeout(() => inputDom.click(), 0);
  }

  liDom.appendChild(inputDom);
  liDom.appendChild(spanDom);
  todoList.appendChild(liDom);
};

for (let index = 0; index < 100; index++) {
  makeTodo(`${index}-${index}-${index}-${index}`, DONE);
}
