export default class Todo {
  constructor(data) {
    console.log('[RAW TO DO API DATA]', data);
    // this.toDo = data.toDo || []
    this._id = data._id
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
    let template = `
    <div class="row uppercase">
        <ul>
              <label>
              <span><h5>
              <input type="checkbox" name="checkedTodo" class="strikethrough largerCheckbox " checked="${this.completed}" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')"><span>
              ${this.description}</h5></label>
              </span>
             

              <button class="btn btn-secondary" value="${this.completed}" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">✔</button>
              <button class="btn btn-secondary redx" onclick="app.controllers.todoController.removeTodo('${this._id}')">X</button>
              </div>
              </div>
        </ul>
</div>
   `
    return template
  }

  //   getTemplate(index) {
  //     let template =
  //       `
  //       <div class="row">
  //       <ul>
  //             <li>${this.description}</li>
  //              `
  //     // template += this.getToDoTemplate(index)
  //     template += `
  //          </ul>
  //          <hr>
  //                         <button class="btn btn-secondary" type="button" onclick="app.controllers.todoController.removeTodo('${this.id}')">X</button>
  //         </div>

  //         `
  //     return template
  //   }
  //   // getToDoTemplate(listIndex) {
  //   //   let toDoTemplate = ""
  //   //   this.description.forEach((td, toDoIndex) => {
  //   //     toDoTemplate += `<h4><input type="checkbox" name="crossOFF" class="strikethrough largerCheckbox" value="1"><span> ${td} </span><span class="redx" onclick="app.controllers.todoController.removeTodo(${listIndex}, 
  //   //              ${toDoIndex})"> X </span></h4>`
  //   //   });
  //   //   return toDoTemplate
  //   // }
}