import Todo from "../models/todo.js";


//NOTE your service is all set up for the observer pattern but there is still work to be done


// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/zachp/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	error: {},
}
let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	getOne(name) {
		todoApi.get(name)
			.then(res => {
				let todo = new Todo(res.data)
				_setState('todos', todo)
				console.log(todo);
			})
			.catch(err => console.error(err))

	}
	get TodoError() {
		return _state.error
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	//#region ANCHOR  GETTERS
	get MyToDo() {
		return _state.todos.map(td => new Todo(td))
	}
	//#endregion

	//#region ANCHOR get____
	getTodos() {
		console.log("Getting the Todo List")
		todoApi.get()
			.then(res => {
				//TODO Handle this response from the server
				let newTodo = res.data.data.map(td => new Todo(td))
				_setState('todos', newTodo) //FIXME res.data.dat?
			})
		// .catch(err => _setState('error', err.response.data))
	}
	//#endregion get____

	//#region ANCHOR  ADD_____
	addTodo(todo) {
		todoApi.post('', todo)
			.then(res => {
				//TODO Handle this response from the server (hint: what data comes back, do you want this?)
				_state.todos.push(new Todo(res.data.data)) // FIXME res.data.data?
				_setState('todos', _state.todos)
			})
		// .catch(err => _setState('error', err.response.data))
	}
	//#endregion ADD____

	//#region FIXME   toggleTodoStatus
	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		//TODO Make sure that you found a todo, 
		//		and if you did find one
		//		change its completed status to whatever it is not (ex: false => true or true => false)

		todoApi.put(todoId, todo)
			.then(res => {
				//TODO do you care about this data? or should you go get something else?
			})
		// .catch(err => _setState('error', err.response.data))
	}
	//#endregion ToggleToDO

	//#region FIXME   removeTodo
	removeTodo(todoId) {
		//TODO Work through this one on your own
		//		what is the request type
		//		once the response comes back, what do you need to insure happens?
		todoApi.delete(todoId)
			.then(res => {
				let index = _state.todos.findIndex(t => t._id == _state.todos._id)
				_state.todos.splice(index, 1)
				_setState('todos', _state.todos)
			})
	}
	//#endregion removeTodo

}
