document.addEventListener("DOMContentLoaded", () => {
  const todoList = new TodoList();

  todoList.displayTodos();

  document.querySelector("#todoList").addEventListener("click", (event) => {
    const target = event.target;

    //clicked checkbox
    if (target.id.includes("completed")) {
      const todoElement = target.parentElement.parentElement;

      todoList.toggleTodo(todoElement);

      return;
    }
  });
});
