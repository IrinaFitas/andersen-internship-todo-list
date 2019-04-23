import View from "./View.js";
import Model from "./Model.js";



export default function Controller(view, model) {
    this.view = view;
    this.model = model;
}

Controller.prototype.show = function() {
    console.log("I`m Controller");
}