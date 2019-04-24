import Controller from "./Controller.js";
import Model from "./Model.js";
import View from "./View.js";
import "./../css/style.css";

const model = new Model();
const view = new View();
const controller = new Controller(view, model);
controller.show();
model.show();
view.render();
