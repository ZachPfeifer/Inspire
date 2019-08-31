export default class Quote {
  constructor(data) {
    console.log('[RAW QUOTE API DATA]', data);
    this.body = data.quote.body
    this.author = data.quote.author
    this.tags = data.quote.tags
  }

  get Template() {
    let template = `
    <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">Quote of the Day</div>
        <div class="card-body">
          <h5 class="card-title">${this.author}</h5><h7>Once Said:</h7>
          <p class="card-text">
          <i>"${this.body}"</i>
          <br>
          #${this.tags}
          </p>
        </div>
    </div>
    `
    return template
  }
}