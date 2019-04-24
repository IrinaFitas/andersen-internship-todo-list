import Controller from "./Controller.js";
import Model from "./Model.js";
import View from "./View.js";
import "./../css/style.css";


const controller = new Controller(view, model);
controller.show();
const model = new Model();
model.show();
const view = new View();
view.render();
//view.showEvent();
view.log();
