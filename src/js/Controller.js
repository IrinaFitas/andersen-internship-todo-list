import View from "./View.js";
import Model from "./Model.js";
export default class Controller {
    constructor () {
        this.view = new View();
        this.model = new Model();

        this.view.on("itemWasAdded", function(data) {
            this.model.listItems.push(data);
            console.log(this.model);
        }.bind(this));
    }
    
    show() {
        console.log("I`m Controller");
        console.log(this.view, this.model);
    }
}