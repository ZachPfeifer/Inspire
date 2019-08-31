export default class Todo {
  constructor(data) {
    console.log('[RAW TO DO API DATA]', data);
    this.name = data.name
    this.message = data.message
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


  get Template() {
    let template =
      `<p>
      <button class="btn btn-dark" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            To Do List
      </button>
     </p>
    <div class="collapse" id="collapseExample">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
    `
    return template
  }
}