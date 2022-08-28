class TodoStorage {
  todos;

  constructor() {
    this.todos = this.#getTodos();

    this.addTodo = this.addTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  #getTodos() {
    const todos = window.localStorage.getItem("todos");

    if (!todos) {
      return [];
    }

    return JSON.parse(todos);
  }

  #save() {
    window.localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(createdAt) {
    const todoToToggle = this.todos.find((todo) => todo.createdAt == createdAt);

    todoToToggle.isCompleted = !todoToToggle.isCompleted;

    this.#save();
  }

  addTodo(todo) {
    this.todos.push(todo);

    this.#save();
  }

  deleteTodo(createdAt) {
    this.todos = this.todos.filter((todo) => todo.createdAt != createdAt);

    this.#save();
  }

  editTodo(text, createdAt) {
    const todoToEdit = this.todos.find((todo) => todo.createdAt == createdAt);

    todoToEdit.text = text;

    this.#save();
  }
}
