import CharacterController from "./Controllers/CharacterController.js";

class App {
  characterController = new CharacterController();
}

window["app"] = new App();


function greet(greeting) {
  console.log(greeting)
}

// setTimeout(() => { greet("Hello world") }, Math.random() * 4000)
// setTimeout(() => { greet("Hallo") }, Math.random() * 4000)
// setTimeout(() => { greet("wie gehts") }, Math.random() * 4000)
// setTimeout(() => { greet("sup") }, Math.random() * 4000)
