class TodoStorage {
  static getTodos() {
    const todos = window.localStorage.getItem("todos");

    if (!todos) {
      return [];
    }

    return JSON.parse(todos);
  }

  static toggleTodo(createdAt) {
    let todos = TodoStorage.getTodos();

    const todoToToggle = todos.find((todo) => todo.createdAt == createdAt);

    todoToToggle.isCompleted = !todoToToggle.isCompleted;

    window.localStorage.setItem("todos", JSON.stringify(todos));
  }

  static addTodo(todo) {
    const todos = TodoStorage.getTodos();

    todos.push(todo);

    window.localStorage.setItem("todos", JSON.stringify(todos));
  }

  static deleteTodo(createdAt) {
    let todos = TodoStorage.getTodos();

    todos = todos.filter((todo) => todo.createdAt != createdAt);

    window.localStorage.setItem("todos", JSON.stringify(todos));
  }
}
