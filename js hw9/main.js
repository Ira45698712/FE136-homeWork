(function () {
  const form = document.querySelector("form");
  const text = document.querySelector("input[type=text]");

  const todoContainer = document.querySelector(".todo__items");

  const createToDoItem = function (text) {
    let li = document.createElement("li");
    li.classList.add("todo_item");
    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");

    let textSpan = document.createElement("span");
    textSpan.innerHTML = text;
    const doneItem = (event) => {
      console.log(event.target);
      li.classList.toggle("done");
      if (event.target.tagName != "INPUT") {
        check.checked = !check.checked;
      }
      //if(event.target === event){
      //li.classList.toggle('done')
      //}
    };
    li.addEventListener("click", doneItem, true);

    li.append(check, textSpan);
    return li;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let item = createToDoItem(text.value);
    text.value = "";
    todoContainer.append(item);
  });
  let btn__delete = document.querySelector(".btn_delete");
  btn__delete.addEventListener("click", function () {
    let del = confirm("Удалить все задачи?");
    if (del) {
      //   let li__remove = document.body.querySelector("todo_item");
      //   li__remove.classList.remove(".todo_items");
      todoContainer.innerHTML = '';
    } else {
      undefined;
    }
  });
  todoContainer.addEventListener("click", function () {
    let span = prompt("Введите новую задачу");
    if (span) {
      document.querySelector("span").innerText = span;
    } else {
      return;
    }
  });
})();
