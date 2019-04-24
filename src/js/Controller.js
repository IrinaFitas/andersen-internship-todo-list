import View from "./View.js";
import Model from "./Model.js";
export default class Controller {
    constructor (view, model) {
        this.view = view;
        this.model = model;
    }
    
    show() {
        console.log("I`m Controller");
    }
}