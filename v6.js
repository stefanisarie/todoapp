// Define the todos
var todoList = {
  // our todos array
  todos: [],

  // display the todos we currently have
  displayTodos: function(){
    if( this.todos.length === 0 ){
    	console.log('Your todo list is empty!');
    } else {
		console.log('My todos:');
		for ( var i = 0; i < this.todos.length; i++ ){
			if ( this.todos[i].completed === true ){
				console.log('(x)', this.todos[i].todoText);
			} else {
				console.log('( )', this.todos[i].todoText);
			}
		}
    }
  },

  // add new todos to our array
  addTodo: function(passedTodoText) {
    this.todos.push({
      todoText: passedTodoText,
      completed: false
    });
    this.displayTodos();
  },

  // change a todo
  changeTodo: function (position, passedTodoText) {
    this.todos[position].todoText = passedTodoText;
    this.displayTodos();
  },

  // toggle completed todo
  toggleCompleted: function(position){
    this.todos[position].completed = !this.todos[position].completed;
    this.displayTodos();
  },

  // delete a todo
  deleteTodo: function(position){
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
