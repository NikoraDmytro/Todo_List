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

    todoElement.addEventListener("animationend", () =>
      todoElement.classList.remove("toggled")
    );
  }

  addTodo(todo) {
    const li = document.createElement("li");

    li.className = "todo";
    li.innerHTML += `
      <div class="checkboxWrapper">
        <input 
          type="checkbox"
          id="completed-${todo.createdAt}"
          ${todo.isCompleted ? "checked" : ""}
        />

        <label for="completed-${todo.createdAt}"></label>
      </div>

      <p class="todoText">${todo.text}</p>

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
    const initialTodos = [
      new Todo("Do the programing"),
      new Todo("Study physics"),
    ];

    initialTodos.forEach(this.addTodo);
  }
}
