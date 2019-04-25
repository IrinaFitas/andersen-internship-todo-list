export default class Controller {
    constructor (view, model) {
        this.view = view;
        this.model = model;

        this.view.on("itemWasAdded", function(data) {
            this.model.listItems.push(data);
            console.log(this.model.listItems);
        }.bind(this));

        this.view.trigger("renderList", this.model.listItems);
    }
}