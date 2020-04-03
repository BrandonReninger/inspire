import TodoService from "../services/todo-service.js";
import store from "../store.js";
import todoService from "../services/todo-service.js";

//TODO Create the render function
function _drawTodos() {
  let template = ''
  let myTodos = store.State.todos

  myTodos.forEach(todo => template += todo.Template)
  document.getElementById("todos").innerHTML = template
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    TodoService.getTodos()
    store.subscribe("todos", _drawTodos)
  }

  addTodo(event) {
    event.preventDefault();
    let formData = event.target;
    let newTodoObject = {
      description: formData.description.value
    };
    TodoService.addTodoAsync(newTodoObject);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}