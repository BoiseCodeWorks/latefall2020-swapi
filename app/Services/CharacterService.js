import { ProxyState } from "../AppState.js";
import Character from "../Models/Character.js";
import { api } from "./AxiosService.js";

class CharacterService {
  previous() {
    if (ProxyState.previous) {
      api.get(ProxyState.previous).then(res => {
        ProxyState.next = res.data.next
        ProxyState.previous = res.data.previous
        ProxyState.characters = res.data.results.map(rawCharacterData => new Character(rawCharacterData))
      }).catch(err => console.error(err))
    }
  }
  next() {
    if (ProxyState.next) {
      api.get(ProxyState.next).then(res => {
        ProxyState.next = res.data.next
        ProxyState.previous = res.data.previous
        ProxyState.characters = res.data.results.map(rawCharacterData => new Character(rawCharacterData))
      }).catch(err => console.error(err))
    } else {
      this.getCharacters()
    }
  }
  constructor() {
    this.getCharacters()
  }
  getCharacters() {
    api.get("people").then(res => {
      console.log("request is back!", res.data);
      ProxyState.next = res.data.next
      ProxyState.characters = res.data.results.map(rawCharacterData => new Character(rawCharacterData))
      // console.log(ProxyState.characters);
    }).catch(err => console.error(err))
    // console.log("run immediately before request comes back");
  }
}

export const characterService = new CharacterService();

