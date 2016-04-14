class ToDosController {
  constructor($firebaseArray) {
    let ref = new Firebase("https://jk-todo.firebaseio.com/todos");

    this.todo = "";
    this.todos = $firebaseArray(ref);

  }

  addTodos() {
    this.todos.$add({ item: this.todo, completed: false});
  }

  markComplete(todo) {
    todo.completed = !todo.completed;
    this.todos.$save(todo);

    //   if (todo.completed) {
    //     todo.completed = false;
    //   } else {
    //     todo.completed = true;
    //   }
    console.log(todo);
  }

  deleteTodos(item) {
    // console.log("trying to delete");
    // this.todos.splice(this.todos.indexOf(item), 1);
    this.todos.$remove(item);
  }
}
export default ToDosController;
