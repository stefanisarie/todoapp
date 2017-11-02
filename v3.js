// Define the todos
var todoList = {
  // our todos array
  todos: ['item 1', 'item 2', 'item 3', 'item 4'],

  // display the todos we currently have
  displayTodos: function(){
    console.log('My todos:', this.todos);
  },

  // add new todos to our array
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },

  // change a todo
  changeTodo: function (position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },

  // delete a todo
  deleteTodo: function (position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },

  // clear all the todos
  clearTodos: function(){
    this.todos = [];
    this.displayTodos();
  }
};
