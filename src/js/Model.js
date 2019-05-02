import Item from "./Item.js";
export default class Model {
    constructor() {
        this.listItems = Model.getListFromStorage();
    }

    get list() {
        const listFromStorage = window.localStorage.getItem("list");
        return listFromStorage ? JSON.parse(listFromStorage) : this.listItems;
    }

    // get active() {
    //     let active = this.list.filter( elem => elem.isDone === false);
    //     return active;
    // }

    // get completed() {
    //     let completed = this.list.filter( elem => elem.isDone === true);
    //     return completed;
    // }

    static getListFromStorage() {
        const listFromStorage = window.localStorage.getItem("list");
        return listFromStorage ? JSON.parse(listFromStorage) : [];
    }

    addItem({text, id}) {
        const item = new Item(text, id);
        this.listItems.push(item);
        this.updateStorage();
    }

    
    deleteItem(id) {
        const ind = this.listItems.findIndex( elem => elem.id === +id);
        this.listItems.splice(ind, 1);
        this.updateStorage();
    }
    editItem(id, text) {
        const ind = this.listItems.findIndex( elem => elem.id === +id);
        this.listItems[ind].text = text;
        this.updateStorage();
    }
    
    doneItem(id) {
        const ind = this.listItems.findIndex( elem => elem.id === +id);
        this.listItems[ind].isDone = !this.listItems[ind].isDone;
        this.updateStorage();
    }

    updateStorage() {
        window.localStorage.setItem("list", JSON.stringify(this.listItems));
    }
}