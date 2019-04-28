import Controller from "./Controller.js";
import Model from "./Model.js";
import View from "./View.js";
import "./../css/style.css";

const model = new Model();
const view = new View();
const controller = new Controller(view, model);

// document.querySelectorAll(".done-btn").forEach( elem => elem.addEventListener("click", (e) => {
//     console.log(e.target.parentElement);
// }));