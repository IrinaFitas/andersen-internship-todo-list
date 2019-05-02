export default class Controller {
    constructor (view, model) {
        this.view = view;
        this.model = model;
        this.addItem();
        this.renderList();
        this.doneItem();
        this.deleteItem();
        this.editItem();
        this.showActive();
        this.showCompleted();
    }

    addItem() {
        this.view.on("itemWasAdded", (data) => {
            this.model.addItem(data);
            this.view.render(data);
            this.showActive();
        });
    }

    renderList() {
        this.view.emit("renderList", this.model.list); 
    }

    doneItem() {
        this.view.on("itemIsDone", (id) => {
            this.model.doneItem(id);
            this.showActive();
        });
    }

    deleteItem() {
        this.view.on("itemIsDelete", (id) => {
            this.model.deleteItem(id);
            this.showActive();
        });
    }

    editItem() {
        this.view.on("itemIsEdited", (data) => {
            this.model.editItem(data.id, data.newValue);
        });
    }

    showActive() {
        this.view.emit("showActive", this.model.active);
        this.view.showActiveCounter(this.model.active);
        this.view.showActiveTasks(this.model.active);
    }

    showCompleted() {
        this.view.emit("showCompleted", this.model.completed);
        this.view.showCompleted(this.model.completed);
    }
}