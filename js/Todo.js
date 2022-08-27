class Todo {
  text;
  createdA;
  isCompleted;

  constructor(text) {
    this.text = text;
    this.isCompleted = false;
    this.createdA = Date.now();
  }
}
