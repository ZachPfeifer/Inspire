import TodoService from "../services/todo-service.js";

const _todoService = new TodoService()

//TODO Create the render function
function _drawTodos() {
	let todo = _todoService.MyToDo
	let template = ``
	todo.forEach((td, index) => {
		template += td.getTemplate(index)
	})
	document.getElementById('todos').innerHTML = template
}

//NOTE Keep an eye on your console for any of these errors
function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
}


export default class TodoController {
	constructor() {
		//TODO Remember to register your subscribers
		// Register all subscribers
		_todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todos', _drawTodos)
		// Retrieve data
		_todoService.getTodos()


	}

	//FIXME region Gets???
	// getOne(name) {
	// 	_todoService.getOne(name)
	// }
	//#endregion

	addTodo(e) {
		e.preventDefault()
		let form = e.target
		let todo = {
			description: form.description.value
			//TODO build the todo object from the data that comes into this method
		}
		form.reset()
		_todoService.addTodo(todo)
	}

	//NOTE This method will pass an Id to your service for the TODO that will need to be toggled
	toggleTodoStatus(todoId) {
		_todoService.toggleTodoStatus(todoId)
	}

	//NOTE This method will pass an Id to your service for the TODO that will need to be deleted
	removeTodo(todoId) {
		_todoService.removeTodo(todoId)
		// document.getElementById('todos').innerHTML = ''
	}



}
