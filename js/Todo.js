class Todo {
  text;
  createdAt;
  isCompleted;

  constructor(text) {
    this.text = text;
    this.isCompleted = false;
    this.createdAt = Date.now();
  }
}
