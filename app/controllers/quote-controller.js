import QuoteService from "../services/quote-service.js";

let _qs = new QuoteService()

function _drawQuote() {
  let quote = _qs.Quote
  document.getElementById('quote').innerHTML = quote.Template

  console.log("QUOTE ME B***", _qs.Quote);
}

//TODO Create methods for constructor, and rendering the quote to the page 
//      (be sure to review the HTML as an element already was put there for you)
export default class QuoteController {

  constructor() {
    //NOTE Register all subscribers
    _qs.addSubscriber('quote', _drawQuote)
    //NOTE Retrieve Data
    _qs.getQuote()
  }

}
