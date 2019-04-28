import Item from "./Item.js";
export default class Model {
    constructor() {
        this.listItems = Model.getListFromStorage(); 

    }

    get list() {
        const listFromStorage = window.localStorage.getItem("list");
        return listFromStorage ? JSON.parse(listFromStorage) : this.listItems;
    }

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
        this.listItems.splice(id, 1);
        this.updateStorage();
    }
    editItem() {}
    filterItem() {}
    
    doneItem(id) {
        const ind = this.listItems.findIndex( elem => elem.id === +id);
        this.listItems[ind].isDone = !this.listItems[ind].isDone;
        this.updateStorage();
    }
    updateStorage() {
        window.localStorage.setItem("list", JSON.stringify(this.listItems));
    }
}