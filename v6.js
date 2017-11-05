// Define the todos
var app = {
  // our todos array
  todos: [
  	{todoText:'Learn JavaScript', completed: false},
  	{todoText:'Learn VueJS', completed: false},
  	{todoText:'Learn Angular JS', completed: false},
  	{todoText:'Learn Webpack', completed: false}
  ],

  // display the todos we currently have
  display: function(){
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
  add: function(passedTodoText) {
    this.todos.push({
      todoText: passedTodoText,
      completed: false
    });
    this.display();
  },

  // change a todo
  update: function (position, passedTodoText) {
    this.todos[position].todoText = passedTodoText;
    this.display();
  },

  // toggle completed todo
  toggleCompleted: function(position){
    this.todos[position].completed = !this.todos[position].completed;
    this.display();
  },

  // toggle all todos
  toggleAll: function(){
  	var totalTodos = this.todos.length;
  	var completedTodos = 0;

    // Get number of completed todos
  	for ( var i = 0; i < totalTodos; i++ ){
  		if ( this.todos[i].completed === true ){
  			completedTodos++;
  		}
  	}

  	// Case 1: If all todos are completed, make them not completed
  	if ( completedTodos === totalTodos ){
  		// Make everything false.
  		for ( var k = 0; k < totalTodos; k++ ){
  			this.todos[k].completed = false;
  		}
  	} else {
      // Case 2: Otherwise, make all todos completed
      for ( var j = 0; j < totalTodos; j++ ){
  			this.todos[j].completed = true;
  		}
    }

    this.display();
  },

  // delete a todo
  delete: function(position){
    this.todos.splice(position, 1);
    this.display();
  }
};
