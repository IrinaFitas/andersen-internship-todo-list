export default class Controller {
    constructor (view, model) {
        this.view = view;
        this.model = model;
        this.addItem();
        this.renderList();
        this.doneItem();
        this.deleteItem();
        this.editItem();
    }

    addItem() {
        this.view.on("itemWasAdded", (data) => {
            this.model.addItem(data);
            this.view.render(data);
        });
    }

    renderList() {
        this.view.emit("renderList", this.model.list); 
    }

    doneItem() {
        this.view.on("itemIsDone", (id) => {
            this.model.doneItem(id);
        });
    }

    deleteItem() {
        this.view.on("itemIsDelete", (id) => {
            this.model.deleteItem(id);
        });
    }

    editItem() {
        this.view.on("itemIsEdited", ({id, newValue}) => {
            this.model.editItem(id, newValue);
        });
    }
}