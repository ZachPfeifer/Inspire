export default class Todo {
  constructor(data) {
    console.log('[RAW TO DO API DATA]', data);
    // this.toDo = data.toDo || []
    this.name = data.name
    // this.message = data.message
    // this.value = data.value
    this.completed = data.completed
    this.description = data.description

  }


  //#region ANCHOR Modal Info
  //   {
  //   //the server will create these properties for you
  //DONT USE   _id: { type: String, required: true, unique: true }
  //NEED   completed: { type: Boolean, required: true, default: false },
  //DONT USE   user: { type: String, required: true },
  //   //You will need to provide a description
  //NEED   description: { type: String, required: true },
  // }


  // 20190831150013
  // https://bcw-sandbox.herokuapp.com/api/zachp/todos/:todoId
  // {
  //   "message": "Cast to ObjectId failed for value \":todoId\" at path \"_id\" for model \"Todo\"",
  //     "name": "CastError",
  //       "stringValue": "\":todoId\"",
  //         "kind": "ObjectId",
  //           "value": ":todoId",
  //             "path": "_id"
  // }
  //#endregion


  getTemplate(index) {
    let template =
      ` <div class="col-4 list-bg">
            <h1>${this.name}</h1>
            <hr>
                <h3><b>Things to Do:</b></3>
             <ul>`
    template += this.getToDoTemplate(index)
    template += `
         </ul>
                <form onsubmit="app.controllers.todoController.addTodo(event, ${index})">
                    <div class="form-group">
                        <label for="name">To Do:</label>
                        <input type="text" class="form-control" name="toDo" placeholder="Enter Things to do here">
                </div>
                        <div class="col">
                            <button class="btn btn-dark" type="submit">Add</button>
              </form>
                        <button class="btn btn-dark" type="button" onclick="app.controllers.todoController.removeTodo(${index})">Remove</button>
                    </div>
        </div>
                `
    return template
  }
  getToDoTemplate(listIndex) {
    let toDoTemplate = ""
    this.toDo.forEach((td, toDoIndex) => {
      toDoTemplate += `<h4><input type="checkbox" name="crossOFF" class="strikethrough largerCheckbox" value="1"><span> ${td} </span><span class="redx" onclick="app.controllers.todoController.removeTodo(${listIndex}, 
                ${toDoIndex})"> X </span></h4>`
    });
    return toDoTemplate
  }
}