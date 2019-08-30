import ImageService from "../services/image-service.js";

const _is = new ImageService()

//TODO Create methods for constructor, and rendering the image to the page 
//      (you may wish to set it as a background image)

//#region ANCHOR Draws
function _drawImage() {
  // let image = _is.Image.imgurl
  // document.getElementById('bg-image').body.style.backgroundImage = image
  console.log("hello from _drawImage");
  debugger
  document.getElementById("bg-image").style.backgroundImage = `url('${_is.Image.imgurl}')`;

}
//#endregion 


export default class ImageController {
  constructor() {
    //NOTE Register all subscribers
    _is.addSubscriber('image', _drawImage)

    //NOTE Retrieve data
    _is.getImage()

  }

}

