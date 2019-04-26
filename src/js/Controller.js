export default class Controller {
    constructor (view, model) {
        this.view = view;
        this.model = model;
        this.addItem();
        this.renderList();
    }

    addItem() {
        this.view.on("itemWasAdded", (data) => {
            this.model.addItem(data);
            this.view.render(data);
            console.log(this.model.listItems);
        });
    }

    renderList() {
        this.view.emit("renderList", this.model.listItems);
    }
}