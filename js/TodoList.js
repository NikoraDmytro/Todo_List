class TodoList {
  #list;

  constructor() {
    this.#list = document.querySelector("#todoList");

    this.addTodo = this.addTodo.bind(this);
    this.displayTodos = this.displayTodos.bind(this);
  }

  addTodo(todo) {
    const li = document.createElement("li");

    li.className = "todo";
    li.innerHTML = `
      <input type="checkbox" />
      <p>${todo.text}</p>
      <button>Edit</button>
      <button>Delete</button>
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
