class TodoList {
  #list;

  constructor() {
    this.#list = document.querySelector("#todoList");

    this.addTodo = this.addTodo.bind(this);
    this.displayTodos = this.displayTodos.bind(this);
  }

  toggleTodo(todoElement) {
    todoElement.classList.add("toggled");

    const text = todoElement.querySelector(".todoText");

    if (text.classList.contains("crossed")) {
      text.classList.remove("crossed");
    } else {
      text.classList.add("crossed");
    }

    todoElement.addEventListener("animationend", () => {
      todoElement.classList.remove("toggled");

      todoElement.removeEventListener("animationend");
    });
  }

  deleteTodo(todoElement) {
    todoElement.classList.add("deleted");

    todoElement.addEventListener("transitionend", (e) => {
      if (e.target !== todoElement) return;

      todoElement.remove();
    });
  }

  addTodo(todo) {
    const li = document.createElement("li");

    li.classList.add("todo", "popOut");
    li.dataset.createdAt = todo.createdAt;

    li.addEventListener("animationend", () => {
      li.classList.remove("popOut");

      li.removeEventListener("animationend");
    });

    li.innerHTML += `
      <div class="checkboxWrapper">
        <input 
          type="checkbox"
          id="completed-${todo.createdAt}"
          ${todo.isCompleted ? "checked" : ""}
        />

        <label for="completed-${todo.createdAt}"></label>
      </div>

      <p class="todoText ${todo.isCompleted ? "crossed" : ""}">${todo.text}</p>

      <button class="iconBtn editBtn">
        <img src="../img/edit.png" alt="Edit" />
      </button>
      <button class="iconBtn deleteBtn">
        <img src="../img/remove.png" alt="Remove" />
      </button>
    `;

    this.#list.append(li);
  }

  displayTodos() {
    const todos = TodoStorage.getTodos();

    todos.forEach((todo) => this.addTodo(todo));
  }
}
