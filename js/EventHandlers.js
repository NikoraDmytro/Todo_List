class EventHandlers {
  #storage;
  #todoList;

  constructor() {
    this.#todoList = new TodoList();
    this.#storage = new TodoStorage();
    this.#initTodoList();

    this.todoListClick = this.todoListClick.bind(this);
    this.todoFormSubmit = this.todoFormSubmit.bind(this);
  }

  #initTodoList() {
    for (let todo of this.#storage.todos) {
      this.#todoList.addTodo(todo);
    }
  }

  todoFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const todoText = form.todo.value;

    if (!todoText) return;

    const editingTodo = form.dataset.editing;

    if (editingTodo) {
      this.#storage.editTodo(todoText, editingTodo);
      this.#todoList.editTodo(todoText, editingTodo);

      delete form.dataset.editing;

      const formBtn = form.querySelector(".submitBtn");
      formBtn.classList.remove("submitEditBtn");
      formBtn.textContent = "Add";
    } else {
      const todo = new Todo(todoText);

      this.#storage.addTodo(todo);
      this.#todoList.addTodo(todo);
    }

    form.todo.value = "";
  }

  #checkboxClick(target) {
    const todo = target.parentElement.parentElement;
    const createdAt = todo.dataset.createdAt;

    this.#todoList.toggleTodo(todo);
    this.#storage.toggleTodo(createdAt);
  }

  #editBtnClick(target) {
    const todo = target.parentElement;

    const form = document.querySelector("#todoForm");
    const todoText = todo.querySelector(".todoText");

    form.todo.focus();
    form.todo.value = todoText.textContent;
    form.dataset.editing = todo.dataset.createdAt;

    const formBtn = form.querySelector(".submitBtn");

    if (!formBtn.classList.contains("submitEditBtn")) {
      formBtn.textContent = "Edit";
      formBtn.classList.add("submitEditBtn");
    }
  }

  #deleteBtnClick(target) {
    const todo = target.parentElement;
    const createdAt = todo.dataset.createdAt;

    this.#todoList.deleteTodo(todo);
    this.#storage.deleteTodo(createdAt);
  }

  todoListClick(event) {
    const target = event.target;

    //clicked checkbox
    if (target.id.includes("completed")) {
      this.#checkboxClick(target);
      return;
    }
    if (target.className.includes("deleteBtn")) {
      this.#deleteBtnClick(target);
      return;
    }
    if (target.className.includes("editBtn")) {
      this.#editBtnClick(target);
    }
  }
}
