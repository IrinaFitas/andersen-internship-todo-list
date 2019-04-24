import Controller from "./Controller.js";
import Model from "./Model.js";
import View from "./View.js";
import "./../css/style.css";


let a = new Controller();
a.show();
let b = new Model();
b.show();
let c = new View();
c.render();