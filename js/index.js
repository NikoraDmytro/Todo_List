document.addEventListener("DOMContentLoaded", () => {
  const todoList = new TodoList();

  todoList.displayTodos();

  const form = document.querySelector("#todoForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const todoText = form.todo.value;

    if (!todoText) return;

    const todo = new Todo(todoText);

    todoList.addTodo(todo);
    TodoStorage.addTodo(todo);

    form.todo.value = "";
  });

  document.querySelector("#todoList").addEventListener("click", (event) => {
    const target = event.target;

    //clicked checkbox
    if (target.id.includes("completed")) {
      const todoElement = target.parentElement.parentElement;
      const createdAt = todoElement.dataset.createdAt;

      TodoStorage.toggleTodo(createdAt);
      todoList.toggleTodo(todoElement);
    }
    if (target.className.includes("deleteBtn")) {
      const todoElement = target.parentElement;
      const createdAt = todoElement.dataset.createdAt;

      todoList.deleteTodo(todoElement);
      TodoStorage.deleteTodo(createdAt);
    }
  });
});
