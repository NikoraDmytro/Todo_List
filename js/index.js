class UI {
  static Startup() {
    const form = document.querySelector("#todoForm");
    const todoList = document.querySelector("#todoList");

    const eventHandlers = new EventHandlers();

    form.addEventListener("submit", eventHandlers.todoFormSubmit);
    todoList.addEventListener("click", eventHandlers.todoListClick);
  }
}

document.addEventListener("DOMContentLoaded", UI.Startup);
