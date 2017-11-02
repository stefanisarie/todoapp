// Define the todos
var todos = ['item 1', 'item 2', 'item 3'];
var update = false;

// Display the todos we currently have active
function displayTodos() {
  if (!update){
    console.log('My todos:', todos);
  } else {
    console.log('+++++++++++ Updated todos:', todos);
  }
}

// Add another item into the todos array
function addTodo(item) {
  todos.push(item);
  console.log('Added new item to array:', item);
  update = true;
  // displayTodos();
}

// Change a value in the array at the given index
function changeTodo(index, newValue) {
  todos[index] = newValue;
  console.log('Updated the todo with the new value:', newValue);
  update = true;
  // displayTodos();
}

// Remove one todo at the given index
function deleteTodo(index){
  var deleted = todos.splice(index, 1);
  console.log('The following todo has been removed:', deleted);
  update = true;
  // displayTodos();
}

// Remove all the todos we currently have
function clearTodos(){
  todos = [];
  console.log('There are no todos!');
  update = true;
  // displayTodos();
}

displayTodos();
addTodo('item 4');
changeTodo(0, 'item 1 changed');
deleteTodo(3);
clearTodos();
