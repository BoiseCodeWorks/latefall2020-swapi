import { ProxyState } from "../AppState.js";
import { characterService } from "../Services/CharacterService.js";


//Private
function _draw() {
  let template = ""
  ProxyState.characters.forEach(c => template += c.Template)
  document.getElementById("characters").innerHTML = template
}

//Public
export default class CharacterController {
  constructor() {
    ProxyState.on("characters", _draw);
    _draw()
  }

  next() {
    characterService.next()
  }

  previous() {
    characterService.previous()
  }

}
